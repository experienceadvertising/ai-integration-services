import { Router } from "express";
import { sendServiceInquiry } from "../lib/postmark";

export type ServiceInquiry = {
  name: string;
  email: string;
  company: string;
  service: "corporate-training" | "ai-development";
  details: string;
};

export function validateInquiry(body: unknown): ServiceInquiry | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const field = (key: string, min: number, max: number) =>
    typeof b[key] === "string" &&
    (b[key] as string).trim().length >= min &&
    (b[key] as string).trim().length <= max;
  if (
    !field("name", 2, 100) ||
    !field("email", 3, 254) ||
    !field("company", 2, 150) ||
    !field("details", 20, 4000)
  )
    return null;
  if (
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(b.email as string) ||
    /[\r\n]/.test(b.email as string)
  )
    return null;
  if (b.service !== "corporate-training" && b.service !== "ai-development")
    return null;
  return {
    name: (b.name as string).trim(),
    email: (b.email as string).trim(),
    company: (b.company as string).trim(),
    service: b.service,
    details: (b.details as string).trim(),
  };
}

export function createInquiryRouter(
  send: typeof sendServiceInquiry = sendServiceInquiry,
) {
  const router = Router();
  const limits = new Map<string, { count: number; expires: number }>();
  router.post("/inquiries", async (req, res) => {
    const origin = req.get("origin");
    const allowed = ["https://learncowork.net", "https://www.learncowork.net"];
    if (
      origin &&
      !allowed.includes(origin) &&
      !(
        process.env.NODE_ENV !== "production" &&
        /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)
      )
    ) {
      res
        .status(403)
        .json({ error: "Please use the inquiry form on learncowork.net." });
      return;
    }
    if (req.body?.website) {
      res.status(400).json({ error: "Please leave the website field empty." });
      return;
    }
    const inquiry = validateInquiry(req.body);
    if (!inquiry) {
      res
        .status(400)
        .json({
          error:
            "Please enter your name, valid email, company, and at least 20 characters about your request.",
        });
      return;
    }
    const now = Date.now();
    for (const [key, value] of limits)
      if (value.expires <= now) limits.delete(key);
    // Limit per reply address because the hosting proxy can share a server IP.
    const key = inquiry.email.toLowerCase();
    if (!limits.has(key) && limits.size >= 5000) {
      res
        .status(429)
        .json({ error: "Please email Evan directly or try again later." });
      return;
    }
    const limit = limits.get(key) ?? { count: 0, expires: now + 3600000 };
    if (limit.count >= 10) {
      res
        .status(429)
        .json({
          error:
            "Too many requests. Please email Evan directly or try again later.",
        });
      return;
    }
    limit.count++;
    limits.set(key, limit);
    try {
      const messageId = await send(inquiry);
      res.status(200).json({ accepted: true, reference: messageId });
    } catch (err) {
      req.log?.error({ err }, "Service inquiry notification failed");
      res
        .status(503)
        .json({
          error:
            "Your inquiry could not be confirmed. Please email evan@experienceadvertising.com directly. Your text is still in the form.",
        });
    }
  });
  return router;
}
export default createInquiryRouter();
