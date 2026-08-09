import { Router, type IRouter } from "express";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { db } from "@workspace/db";
import { leadsTable } from "@workspace/db/schema";
import { sendLeadNotification, sendWelcomeEmail } from "../lib/postmark";

const router: IRouter = Router();

type Logger = { warn: (...args: any[]) => void; info?: (...args: any[]) => void };

function isPrivateHost(host: string): boolean {
  const h = host.toLowerCase();
  return (
    h === "localhost" ||
    h.endsWith(".local") ||
    /^(127\.|10\.|192\.168\.|169\.254\.|0\.)/.test(h) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(h)
  );
}

interface FetchedPage {
  url: string;
  title: string | null;
  metaDescription: string | null;
  body: string;
}

// Fetch one URL and return parsed page content, or null on failure
async function fetchPage(rawUrl: string, log: Logger, timeoutMs = 7000): Promise<FetchedPage | null> {
  try {
    let url = rawUrl.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
    const parsed = new URL(url);
    if (isPrivateHost(parsed.hostname)) return null;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
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

    const html = (await resp.text()).slice(0, 300_000);

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const metaDescMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    const ogDescMatch = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);

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

    return {
      url: parsed.toString(),
      title: titleMatch?.[1]?.trim() || null,
      metaDescription: (metaDescMatch?.[1] || ogDescMatch?.[1])?.trim() || null,
      body: stripped,
    };
  } catch (err) {
    log.warn({ err, url: rawUrl }, "fetchPage failed");
    return null;
  }
}

// Discover candidate internal links from homepage HTML for "about / services / what we do" type pages
function findInsightLinks(homepageUrl: string, homepageBody: string, rawHtml: string): string[] {
  try {
    const base = new URL(homepageUrl);
    const seen = new Set<string>();
    const candidates: string[] = [];
    // Patterns that typically describe what a company does
    const patterns = /href=["']([^"']+)["'][^>]*>\s*(?:[^<]*?(about(?:\s*us)?|what we do|services|solutions|practice|expertise|capabilities|approach|industries|who we serve)[^<]*?)\s*</gi;
    let m: RegExpExecArray | null;
    while ((m = patterns.exec(rawHtml)) !== null && candidates.length < 8) {
      try {
        const absolute = new URL(m[1], base).toString();
        const abs = new URL(absolute);
        // Same host only
        if (abs.hostname.replace(/^www\./, "") !== base.hostname.replace(/^www\./, "")) continue;
        // Skip files & fragments
        if (/\.(pdf|jpg|jpeg|png|gif|svg|zip|mp4|css|js)(\?|$)/i.test(abs.pathname)) continue;
        abs.hash = "";
        const key = abs.toString();
        if (seen.has(key) || key === homepageUrl) continue;
        seen.add(key);
        candidates.push(key);
      } catch {}
    }
    return candidates.slice(0, 3);
  } catch {
    return [];
  }
}

// Fetch homepage + up to 3 insight pages, returning a single rich excerpt for the model
async function fetchSiteContext(rawUrl: string, log: Logger): Promise<string | null> {
  // First fetch homepage with raw HTML kept for link discovery
  let url = rawUrl.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  let parsed: URL;
  try { parsed = new URL(url); } catch { return null; }
  if (isPrivateHost(parsed.hostname)) return null;

  // Fetch homepage with raw HTML preserved
  let homepageRawHtml = "";
  let homepage: FetchedPage | null = null;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
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
    homepageRawHtml = (await resp.text()).slice(0, 300_000);
    // Reuse fetchPage logic by reparsing
    const titleMatch = homepageRawHtml.match(/<title[^>]*>([^<]*)<\/title>/i);
    const metaDescMatch = homepageRawHtml.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
      || homepageRawHtml.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    const ogDescMatch = homepageRawHtml.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);
    const stripped = homepageRawHtml
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
    homepage = {
      url: parsed.toString(),
      title: titleMatch?.[1]?.trim() || null,
      metaDescription: (metaDescMatch?.[1] || ogDescMatch?.[1])?.trim() || null,
      body: stripped,
    };
  } catch (err) {
    log.warn({ err, url: rawUrl }, "homepage fetch failed");
    return null;
  }

  if (!homepage) return null;

  // Discover and fetch up to 3 insight pages in parallel
  const insightUrls = findInsightLinks(homepage.url, homepage.body, homepageRawHtml);
  const insightResults = await Promise.all(insightUrls.map((u) => fetchPage(u, log, 5000)));
  const insightPages = insightResults.filter((p): p is FetchedPage => p !== null);

  // Build a structured excerpt
  const sections: string[] = [];
  sections.push(`### Homepage (${homepage.url})`);
  if (homepage.title) sections.push(`Title: ${homepage.title}`);
  if (homepage.metaDescription) sections.push(`Meta description: ${homepage.metaDescription}`);
  if (homepage.body) sections.push(`Body excerpt:\n${homepage.body.slice(0, 4500)}`);

  for (const page of insightPages) {
    sections.push(`\n### Page: ${page.url}`);
    if (page.title) sections.push(`Title: ${page.title}`);
    if (page.metaDescription) sections.push(`Meta description: ${page.metaDescription}`);
    if (page.body) sections.push(`Body excerpt:\n${page.body.slice(0, 2500)}`);
  }

  const combined = sections.join("\n").trim();
  return combined.length > 40 ? combined : null;
}

// POST /api/analyze: streaming AI report generation
router.post("/analyze", async (req, res) => {
  const { type, website, description, industry } = req.body;

  if (!type || (type !== "business" && type !== "individual" && type !== "job-description")) {
    res.status(400).json({ error: "type must be 'business', 'individual', or 'job-description'" });
    return;
  }

  if (type === "job-description" && (!description || typeof description !== "string" || description.trim().length < 40)) {
    res.status(400).json({ error: "Paste a job description (at least a few sentences) to analyze." });
    return;
  }

  const contextLines: string[] = [];
  let siteExcerpt: string | null = null;

  if (type === "business") {
    if (website) {
      contextLines.push(`Website: ${website}`);
      siteExcerpt = await fetchSiteContext(website, req.log);
    }
    if (industry) contextLines.push(`Industry: ${industry}`);
    if (description) contextLines.push(`Additional context: ${description}`);
  } else if (type === "job-description") {
    if (industry) contextLines.push(`Industry / field: ${industry}`);
    contextLines.push(`--- Job description (verbatim, pasted by the user) ---\n${description.slice(0, 20_000)}\n--- end job description ---`);
  } else {
    if (description) contextLines.push(`Role / what they do: ${description}`);
    if (industry) contextLines.push(`Industry / field: ${industry}`);
  }

  if (siteExcerpt) {
    contextLines.push(`\n--- Live content fetched from the website (homepage + key internal pages). Use this as the PRIMARY source of truth for what the business does, who they serve, and how they describe themselves. Do NOT guess from the URL or brand name. ---\n${siteExcerpt}\n--- end fetched content ---`);
  }

  const contextStr = contextLines.length > 0
    ? contextLines.join("\n")
    : type === "business"
      ? "A general business (no specific URL provided)"
      : "A professional individual";

  const systemPrompt = `You are Evan Weber's senior AI productivity strategist. Evan is a 25-year digital marketing veteran who trains business teams and individuals on practical AI workflows using ChatGPT Work, OpenAI Codex, Claude Cowork, Claude Code, Replit, and other tools that fit the client's work.

Your job is to write a *strikingly specific*, *credible*, and *useful* free report, the kind that makes the reader say "this person actually understood my business." It should feel like a 30-minute consulting call, not a generic AI brochure.

# How to ground your understanding
- If a "Live content fetched from the website" block is provided, that is the SOLE source of truth for what the business does. Read every section (homepage + insight pages) carefully. Cite specifics: services they list, industries they serve, geographic markets, team size if mentioned, named methodologies, marquee clients.
- NEVER guess industry from a domain name, brand name, or word association. Names are misleading ("chartis" is healthcare, not finance; "apex" could be anything). If you don't have data, say so.
- If no fetched content AND no industry/description, open with "Based on the limited info shared..." and keep use cases broadly applicable. Do not invent specifics.
- If the user-provided industry/description conflicts with the fetched content, trust the user.
- Be conservative with claims. Don't invent statistics or quote made-up numbers. Time-saved estimates should be realistic ranges based on common workflows in their industry.

# How to choose a tool (so recommendations stay realistic)
- ChatGPT Work: multi-step knowledge work, research, document creation, analysis, and deliverables. Apps and workspace capabilities depend on the user's plan and administrator settings.
- OpenAI Codex: software work such as repository exploration, implementation, testing, code review, parallel agent tasks, worktrees, skills, and automations.
- Claude Cowork: computer-based knowledge work, document synthesis, structured outputs, and workflows that use supported app or MCP connections.
- Claude Code: terminal-based software engineering and repository work.
- Replit: browser-based application prototyping, building, and iteration.
- Other tools such as Microsoft Copilot, Gemini, or Perplexity may be a better fit when the client's existing environment or use case calls for them.
- Keep a human responsible for approvals, judgment, relationships, legal or compliance review, financial commitments, and consequential external actions.
Name the recommended tool for every workflow and explain why it fits. Never claim a feature is available to every plan, workspace, or account.

# Tone
Direct, confident, generous, never salesy. Sound like a strategist who's already inside the business. Use specific job titles, real tools, realistic numbers. Avoid "leverage," "synergy," "unlock," "transform," "revolutionize." Avoid filler adjectives.

# Output format
Output ONLY raw HTML. Do not use code fences, \`\`\`html, or markdown. Use ONLY these tags:
- <h3> for section headers
- <h4> for sub-headers (e.g. workflow titles inside lists)
- <p> for paragraphs
- <ul> + <li> for lists
- <strong> for bold (use sparingly for emphasis)
- <em> for italic (use for inline callouts like time estimates)
- <blockquote> for the "First-Hour Build" callout and the "Total time recovered" stat. These are highlighted boxes.
No other tags. No commentary before or after, just the HTML.`;

  const businessPrompt = `Write a practical AI opportunity report for this business:
${contextStr}

Use this exact structure:

1. <h3>What we see</h3>
   <p>2–3 sentences. Confidently and specifically describe what the business does, who it serves, and the operational reality of running this kind of business. Use specifics from the fetched content (services, industries served, geography, scale signals). This paragraph proves you understand them.</p>

2. <h3>Where time is leaking right now</h3>
   <ul> with 3 <li> items. Each item is a realistic, specific operational bottleneck typical of this kind of business, the kind of thing a senior person at the firm would nod at. No fluff. One sentence per item.

3. <h3>5 high-value AI workflows for your team</h3>
   <ul> with exactly 5 <li> items. Each item must contain:
   - <h4>Workflow name</h4>. Make it concrete and specific (not "automate reports", but "Weekly client KPI deck assembly across HubSpot + GA4 + Looker exports").
   - <p><strong>Recommended tool:</strong> name the best-fit tool and give a brief reason. Then explain in 2–3 sentences what the workflow does step-by-step, which apps or data sources it touches, and what the human reviews or does next.</p>
   - <p><em>Estimated time saved: ~X hours/week per [role]</em></p>. Pick a realistic range, not a wild claim.

4. <blockquote>
   <h3>Your first-hour build</h3>
   <p>1 specific workflow from the 5 above that's the highest ROI to ship live in Evan's session. Name it, explain why it's first, and describe the deliverable they'd walk away with by the end of the hour.</p>
   </blockquote>

5. <blockquote>
   <p><strong>Estimated weekly time recovered across the 5 workflows: ~X to Y hours per affected team member.</strong> <em>Conservative estimate based on typical workflows in your industry. Actual savings vary.</em></p>
   </blockquote>

6. <h3>What Evan recommends</h3>
   <p>2 to 3 sentences. Recommend either the <strong>1-Hour Session ($300)</strong> or the <strong>4-Hour Deep Dive ($1,000)</strong>. Choose based on workflow complexity and number of integrations needed. Explain why in concrete terms tied to their business and what they get done in that time. Do not hedge.</p>

Hard rules:
- Every workflow must be specific to THIS business. If you could swap the company name and the report still works, rewrite.
- Never invent stats, awards, client names, or facts not in the fetched content.
- No emojis, no horizontal rules, no preamble before the first <h3>.`;

  const individualPrompt = `Write a practical AI opportunity report for this individual:
${contextStr}

Use this exact structure:

1. <h3>What we see</h3>
   <p>2–3 sentences acknowledging their role and the operational reality of their day. Specific, not generic.</p>

2. <h3>Where your time is going right now</h3>
   <ul> with 3 <li> items containing realistic time sinks for someone in their role. One sentence each.

3. <h3>5 AI workflows that change your week</h3>
   <ul> with exactly 5 <li> items. Each must contain:
   - <h4>Workflow name</h4>. Make it concrete and specific.
   - <p><strong>Recommended tool:</strong> name the best-fit tool and give a brief reason. Then explain in 2–3 sentences exactly what the workflow does, which tools it touches, and what the person reviews or does next.</p>
   - <p><em>Estimated time saved: ~X hours/week</em></p>

4. <blockquote>
   <h3>Start here</h3>
   <p>1 workflow from the 5 above, the one to build first in Evan's session, and what they'd walk out with by the end of the hour.</p>
   </blockquote>

5. <blockquote>
   <p><strong>Estimated weekly time recovered: ~X to Y hours.</strong> <em>Conservative estimate. Actual savings vary with how integrated their tools are.</em></p>
   </blockquote>

6. <h3>What Evan recommends</h3>
   <p>2–3 sentences. Recommend the <strong>1-Hour Session ($300)</strong> or <strong>4-Hour Deep Dive ($1,000)</strong> with concrete reasoning tied to their situation.</p>

Hard rules:
- Every workflow must be specific to THIS person's role or work. Generic advice fails.
- Never invent facts. No emojis, no horizontal rules, no preamble before the first <h3>.`;

  const jobDescriptionPrompt = `A user pasted a job description. Analyze it and write an "AI task breakdown" report that splits the role's responsibilities into what an appropriate AI tool can handle, what AI can assist with, and what stays human.

${contextStr}

Use this exact structure:

1. <h3>The role at a glance</h3>
   <p>2 to 3 sentences. Name the role and summarize what this job actually consists of operationally, based ONLY on the pasted description: the recurring outputs, the tools mentioned, and who the role serves. Prove you read it.</p>

2. <h3>Tasks AI can help run end-to-end</h3>
   <ul> with 3–5 <li> items. Each item must contain:
   - <h4>Task name</h4>. Pull or paraphrase it from an actual responsibility in the job description.
   - <p>1–2 sentences: name the recommended tool, explain how it handles the task, and state what the human must review, approve, or send.</p>

3. <h3>Tasks AI accelerates (human still drives)</h3>
   <ul> with 2–4 <li> items, same <h4> + <p> format. Responsibilities where AI does the heavy lifting, such as first drafts, research, or organization, but judgment, relationships, or sign-off stay with the person.

4. <h3>What stays fully human</h3>
   <ul> with 2 to 3 <li> items, one sentence each. Responsibilities from the description that genuinely require human presence, judgment, accountability, or relationships. Be honest here because it builds credibility.

5. <blockquote>
   <h3>The bottom line for this role</h3>
   <p>2–3 sentences: roughly what share of this role's recurring work appropriate AI tools can absorb or accelerate (a realistic range, not hype), and what the person in this seat should do with the reclaimed time.</p>
   </blockquote>

6. <h3>What Evan recommends</h3>
   <p>2–3 sentences. Recommend the <strong>1-Hour Session ($300)</strong> or <strong>4-Hour Deep Dive ($1,000)</strong> based on how many tools and integrations the role touches. Tie the reasoning to specific responsibilities in the description.</p>

Hard rules:
- Every task must trace back to a responsibility actually present in the pasted description. Do not import generic duties the description does not mention.
- If the pasted text is not actually a job description, say so politely in one <p> and give a brief general overview of how practical AI tools help knowledge workers instead.
- Never invent facts. No emojis, no horizontal rules, no preamble before the first <h3>.`;

  const userPrompt =
    type === "business" ? businessPrompt :
    type === "job-description" ? jobDescriptionPrompt :
    individualPrompt;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");

  try {
    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-5",
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

// POST /api/leads: save lead and send emails
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

    // Send emails in background without blocking the response.
    // Welcome email references "your report", so only send it when a report
    // was actually generated (tool leads like playbook/quiz/calculator skip it).
    Promise.allSettled([
      sendLeadNotification(lead).then(async () => {
        await db.update(leadsTable)
          .set({ notificationSent: true });
      }),
      ...(reportHtml
        ? [sendWelcomeEmail(lead).then(async () => {
            await db.update(leadsTable)
              .set({ welcomeSent: true });
          })]
        : []),
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
