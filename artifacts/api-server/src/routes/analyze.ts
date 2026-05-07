import { Router, type IRouter } from "express";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { db } from "@workspace/db";
import { leadsTable } from "@workspace/db/schema";
import { sendLeadNotification, sendWelcomeEmail } from "../lib/postmark";

const router: IRouter = Router();

// Fetch a URL's homepage and extract readable text. Returns null on any failure.
async function fetchSiteText(rawUrl: string, log: { warn: (...args: any[]) => void }): Promise<string | null> {
  try {
    let url = rawUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    const parsed = new URL(url);
    // Block private / loopback hosts to avoid SSRF
    const host = parsed.hostname.toLowerCase();
    if (
      host === "localhost" ||
      host.endsWith(".local") ||
      /^(127\.|10\.|192\.168\.|169\.254\.|0\.)/.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
    ) {
      return null;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const resp = await fetch(parsed.toString(), {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LearnCoworkBot/1.0; +https://learncowork.net)",
        Accept: "text/html,application/xhtml+xml",
      },
    }).finally(() => clearTimeout(timeout));

    if (!resp.ok) return null;
    const ctype = resp.headers.get("content-type") || "";
    if (!ctype.includes("text/html") && !ctype.includes("xml")) return null;

    const html = (await resp.text()).slice(0, 250_000);

    // Pull title + meta description first (usually the most signal-dense bits)
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const metaDescMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    const ogDescMatch = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);
    const ogTitleMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);

    // Strip scripts/styles/nav junk, then tags
    const stripped = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
      .replace(/<header[\s\S]*?<\/header>/gi, " ")
      .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
      .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&[a-z]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();

    const meta = [
      titleMatch ? `Title: ${titleMatch[1].trim()}` : null,
      (ogTitleMatch && (!titleMatch || ogTitleMatch[1].trim() !== titleMatch[1].trim())) ? `OG Title: ${ogTitleMatch[1].trim()}` : null,
      metaDescMatch ? `Meta description: ${metaDescMatch[1].trim()}` : null,
      ogDescMatch ? `OG description: ${ogDescMatch[1].trim()}` : null,
    ].filter(Boolean).join("\n");

    const body = stripped.slice(0, 4000);
    const combined = [meta, body].filter(Boolean).join("\n\n").trim();
    return combined.length > 40 ? combined : null;
  } catch (err) {
    log.warn({ err, url: rawUrl }, "fetchSiteText failed");
    return null;
  }
}

// POST /api/analyze — streaming AI report generation
router.post("/analyze", async (req, res) => {
  const { type, website, description, industry } = req.body;

  if (!type || (type !== "business" && type !== "individual")) {
    res.status(400).json({ error: "type must be 'business' or 'individual'" });
    return;
  }

  const contextLines: string[] = [];
  let siteExcerpt: string | null = null;

  if (type === "business") {
    if (website) {
      contextLines.push(`Website: ${website}`);
      siteExcerpt = await fetchSiteText(website, req.log);
    }
    if (industry) contextLines.push(`Industry: ${industry}`);
    if (description) contextLines.push(`Additional context: ${description}`);
  } else {
    if (description) contextLines.push(`Role / what they do: ${description}`);
    if (industry) contextLines.push(`Industry / field: ${industry}`);
  }

  if (siteExcerpt) {
    contextLines.push(`\n--- Live excerpt fetched from the website (use this as the primary source of truth for what the business actually does; do NOT guess from the URL/name alone) ---\n${siteExcerpt}\n--- end excerpt ---`);
  }

  const contextStr = contextLines.length > 0
    ? contextLines.join("\n")
    : type === "business"
      ? "A general business (no specific URL provided)"
      : "A professional individual";

  const systemPrompt = `You are Evan Weber's AI productivity assistant. Evan is a 25-year digital marketing veteran who trains business teams and individuals on Claude Cowork — Anthropic's agentic AI tool that can operate a computer, automate multi-step workflows, and connect to apps via MCP.

Your job is to generate a personalized, specific, enthusiastic report showing someone exactly how Claude Cowork could help them. The report should feel tailored, not generic. Use specific job functions and realistic tasks.

CRITICAL — how to identify what the business does:
- If a "Live excerpt fetched from the website" block is provided, that is the SOLE source of truth for what the business does. Read it carefully (title, meta description, body) and base every assumption on it.
- NEVER guess the industry from a domain name, brand name, or word association (e.g. don't assume "chartis" = finance, "apex" = fitness, "summit" = consulting). Names are misleading.
- If no excerpt is provided AND no industry/description is given, do NOT invent a specific industry. Open with a neutral framing like "Based on the limited info shared..." and write generically applicable use cases.
- If the excerpt and a user-provided industry/description conflict, trust the user-provided industry/description (they know their business).

Output ONLY raw HTML — do not wrap it in a code block, do not use backticks, do not add \`\`\`html or any other markdown syntax. Use only these tags: <h3>, <p>, <ul>, <li>, <strong>, <em>. No commentary before or after — just the HTML.`;

  const userPrompt = type === "business"
    ? `Generate a Claude Cowork opportunity report for this business:
${contextStr}

Structure the report as follows:
1. A short opening paragraph (2-3 sentences) naming the business/website and framing the opportunity.
2. A section titled "5 Ways Claude Cowork Can Transform Your Business" with exactly 5 items. Each item should have a bold title and 2 sentences explaining the specific use case and the time/output impact.
3. A "Biggest Quick Win" section — one specific workflow they could automate in their first session.
4. A closing paragraph recommending either the 1-Hour Session ($300) or the 4-Hour Deep Dive ($1,000) based on complexity, and why.

Be specific to their business type. Avoid generic AI platitudes.`
    : `Generate a Claude Cowork opportunity report for this individual:
${contextStr}

Structure the report as follows:
1. A short opening paragraph (2-3 sentences) acknowledging their role/situation and the specific opportunity Claude Cowork creates for them.
2. A section titled "5 Ways Claude Cowork Can Change Your Day" with exactly 5 items. Each item should have a bold title and 2 sentences explaining the specific use case and real impact on their work.
3. A "Start Here" section — one specific workflow they should automate first in their session.
4. A closing paragraph recommending either the 1-Hour Session ($300) or the 4-Hour Deep Dive ($1,000) based on their needs, and why.

Be specific to their role. Avoid generic AI platitudes.`;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");

  try {
    const stream = anthropic.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 8192,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    let fullReport = "";
    for await (const event of stream) {
      if (
        event.type === "content_block_delta" &&
        event.delta.type === "text_delta"
      ) {
        fullReport += event.delta.text;
        res.write(`data: ${JSON.stringify({ content: event.delta.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true, reportHtml: fullReport })}\n\n`);
    res.end();
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to generate analysis");
    res.write(`data: ${JSON.stringify({ error: "Failed to generate report. Please try again." })}\n\n`);
    res.end();
  }
});

// POST /api/leads — save lead + send emails
router.post("/leads", async (req, res) => {
  const { email, name, type, website, industry, description, reportHtml } = req.body;

  if (!email || !type) {
    res.status(400).json({ error: "email and type are required" });
    return;
  }

  try {
    const [lead] = await db
      .insert(leadsTable)
      .values({ email, name, type, website, industry, description, reportHtml })
      .returning();

    // Send emails in background — don't block the response
    Promise.allSettled([
      sendLeadNotification(lead).then(async () => {
        await db.update(leadsTable)
          .set({ notificationSent: true });
      }),
      sendWelcomeEmail(lead).then(async () => {
        await db.update(leadsTable)
          .set({ welcomeSent: true });
      }),
    ]).catch((err) => {
      console.error("Email send error:", err);
    });

    res.json({ success: true, id: lead.id });
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to save lead");
    res.status(500).json({ error: "Failed to save lead" });
  }
});

export default router;
