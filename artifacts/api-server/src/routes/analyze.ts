import { Router, type IRouter } from "express";
import { anthropic } from "@workspace/integrations-anthropic-ai";

const router: IRouter = Router();

router.post("/analyze", async (req, res) => {
  const { type, website, description, industry } = req.body;

  if (!type || (type !== "business" && type !== "individual")) {
    res.status(400).json({ error: "type must be 'business' or 'individual'" });
    return;
  }

  const contextLines: string[] = [];

  if (type === "business") {
    if (website) contextLines.push(`Website: ${website}`);
    if (industry) contextLines.push(`Industry: ${industry}`);
    if (description) contextLines.push(`Additional context: ${description}`);
  } else {
    if (description) contextLines.push(`Role / what they do: ${description}`);
    if (industry) contextLines.push(`Industry / field: ${industry}`);
  }

  const contextStr = contextLines.length > 0
    ? contextLines.join("\n")
    : type === "business"
      ? "A general business (no specific URL provided)"
      : "A professional individual";

  const systemPrompt = `You are Evan Weber's AI productivity assistant. Evan is a 25-year digital marketing veteran who trains business teams and individuals on Claude Cowork — Anthropic's agentic AI tool that can operate a computer, automate multi-step workflows, and connect to apps via MCP.

Your job is to generate a personalized, specific, enthusiastic report showing someone exactly how Claude Cowork could help them. The report should feel tailored, not generic. Use specific job functions and realistic tasks.

Format your response as clean HTML using only these tags: <h3>, <p>, <ul>, <li>, <strong>, <em>. No markdown. No code blocks. No extra commentary before or after — just the HTML.`;

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

    for await (const event of stream) {
      if (
        event.type === "content_block_delta" &&
        event.delta.type === "text_delta"
      ) {
        res.write(`data: ${JSON.stringify({ content: event.delta.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error: any) {
    req.log.error({ err: error }, "Failed to generate analysis");
    res.write(`data: ${JSON.stringify({ error: "Failed to generate report. Please try again." })}\n\n`);
    res.end();
  }
});

export default router;
