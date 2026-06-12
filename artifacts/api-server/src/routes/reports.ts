import { randomUUID } from "node:crypto";
import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db } from "@workspace/db";
import { reportsTable } from "@workspace/db/schema";

const router: IRouter = Router();

const VALID_TYPES = new Set(["business", "individual", "job-description"]);
const MAX_REPORT_LENGTH = 100_000;

// POST /api/reports — persist a generated report and return its share slug
router.post("/reports", async (req, res) => {
  const { type, industry, website, description, reportHtml } = req.body;

  if (!type || !VALID_TYPES.has(type)) {
    res.status(400).json({ error: "type must be 'business', 'individual', or 'job-description'" });
    return;
  }
  if (!reportHtml || typeof reportHtml !== "string" || reportHtml.length > MAX_REPORT_LENGTH) {
    res.status(400).json({ error: "reportHtml is required" });
    return;
  }

  try {
    const id = randomUUID();
    await db.insert(reportsTable).values({
      id,
      type,
      industry: industry || null,
      website: website || null,
      description: description || null,
      reportHtml,
    });
    res.json({ id });
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to save report");
    res.status(500).json({ error: "Failed to save report" });
  }
});

// GET /api/reports/:id — fetch a saved report for the shareable /report/:id page
router.get("/reports/:id", async (req, res) => {
  const { id } = req.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    res.status(404).json({ error: "Report not found" });
    return;
  }

  try {
    const [report] = await db.select().from(reportsTable).where(eq(reportsTable.id, id));
    if (!report) {
      res.status(404).json({ error: "Report not found" });
      return;
    }
    res.json({
      id: report.id,
      type: report.type,
      industry: report.industry,
      reportHtml: report.reportHtml,
      createdAt: report.createdAt,
    });
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to fetch report");
    res.status(500).json({ error: "Failed to fetch report" });
  }
});

export default router;
