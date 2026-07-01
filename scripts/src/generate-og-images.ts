import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../../artifacts/consulting-site/public");

const BG = "#F5F0EB";
const ORANGE = "#D4703A";
const DARK = "#1C1612";
const WHITE = "#FFFFFF";

interface OGPage {
  filename: string;
  category: string;
  title: string;
}

function escXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text: string, max = 26): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const candidate = cur ? `${cur} ${w}` : w;
    if (candidate.length <= max) {
      cur = candidate;
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function makeSvg({ category, title }: OGPage): string {
  const lines = wrap(title);
  const fs = lines.length > 2 ? 60 : lines.length === 2 ? 68 : 72;
  const lineH = fs * 1.18;
  const blockH = fs + (lines.length - 1) * lineH;
  const midY = 315;
  const startY = midY - blockH / 2 + fs;

  const tspans = lines
    .map((l, i) => `<tspan x="88" dy="${i === 0 ? 0 : lineH}">${escXml(l)}</tspan>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="${BG}"/>
  <!-- Decorative circles -->
  <circle cx="1110" cy="270" r="220" fill="${ORANGE}" opacity="0.07"/>
  <circle cx="1110" cy="270" r="140" fill="${ORANGE}" opacity="0.07"/>
  <!-- Orange left bar -->
  <rect x="0" y="0" width="16" height="530" fill="${ORANGE}"/>
  <!-- Orange bottom bar -->
  <rect x="0" y="530" width="1200" height="100" fill="${ORANGE}"/>
  <!-- Category label -->
  <text x="88" y="136"
    font-family="Arial, Helvetica, sans-serif"
    font-size="28" font-weight="600"
    fill="${ORANGE}" letter-spacing="0.5">${escXml(category)}</text>
  <!-- Divider -->
  <rect x="88" y="154" width="300" height="3" fill="${ORANGE}" opacity="0.5"/>
  <!-- Title -->
  <text x="88" y="${startY}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="${fs}" font-weight="700"
    fill="${DARK}">${tspans}</text>
  <!-- Footer text -->
  <text x="88" y="590"
    font-family="Arial, Helvetica, sans-serif"
    font-size="26" font-weight="500"
    fill="${WHITE}">Evan Weber · learncowork.net</text>
</svg>`;
}

const pages: OGPage[] = [
  // Training pages
  {
    filename: "og-claude-cowork-training.png",
    category: "Claude Cowork Training",
    title: "Live 1-on-1 AI Training with an Expert",
  },
  {
    filename: "og-ai-coding-training.png",
    category: "Vibe Coding Training",
    title: "Build Real Software with Claude Code",
  },
  {
    filename: "og-aeo-geo-training.png",
    category: "AEO/GEO Training",
    title: "Get Cited by ChatGPT & Claude",
  },
  // Industry pages
  {
    filename: "og-industry-marketing-agencies.png",
    category: "For Marketing Agencies",
    title: "Claude Cowork for Marketing Teams",
  },
  {
    filename: "og-industry-law-firms.png",
    category: "For Law Firms",
    title: "Claude Cowork for Legal Services",
  },
  {
    filename: "og-industry-real-estate.png",
    category: "For Real Estate",
    title: "Claude Cowork for Real Estate Teams",
  },
  {
    filename: "og-industry-financial-services.png",
    category: "For Financial Services",
    title: "Claude Cowork for Finance Teams",
  },
  {
    filename: "og-industry-healthcare.png",
    category: "For Healthcare",
    title: "Claude Cowork for Medical Practices",
  },
  {
    filename: "og-industry-ecommerce.png",
    category: "For E-Commerce",
    title: "Claude Cowork for Online Retail",
  },
  {
    filename: "og-industry-consulting.png",
    category: "For Consulting Firms",
    title: "Claude Cowork for Consultants",
  },
  {
    filename: "og-industry-hr-recruiting.png",
    category: "For HR & Recruiting",
    title: "Claude Cowork for HR Teams",
  },
  {
    filename: "og-industry-insurance.png",
    category: "For Insurance",
    title: "Claude Cowork for Insurance Agencies",
  },
  {
    filename: "og-industry-nonprofits.png",
    category: "For Nonprofits",
    title: "Claude Cowork for Nonprofits",
  },
  // Role pages
  {
    filename: "og-role-marketing-managers.png",
    category: "AI for Marketing",
    title: "Claude Cowork for Marketing Managers",
  },
  {
    filename: "og-role-sales-teams.png",
    category: "AI for Sales",
    title: "Claude Cowork for Sales Reps & AEs",
  },
  {
    filename: "og-role-recruiters.png",
    category: "AI for Recruiting",
    title: "Claude Cowork for Recruiters",
  },
  {
    filename: "og-role-paralegals.png",
    category: "AI for Legal",
    title: "Claude Cowork for Paralegals",
  },
  {
    filename: "og-role-financial-analysts.png",
    category: "AI for Finance",
    title: "Claude Cowork for Financial Analysts",
  },
  {
    filename: "og-role-executive-assistants.png",
    category: "AI for Executive Assistants",
    title: "Claude Cowork for EAs",
  },
  {
    filename: "og-role-project-managers.png",
    category: "AI for Project Management",
    title: "Claude Cowork for PMs",
  },
  {
    filename: "og-role-customer-support-teams.png",
    category: "AI for Support Teams",
    title: "Claude Cowork for Customer Support",
  },
  {
    filename: "og-role-accountants.png",
    category: "AI for Accounting",
    title: "Claude Cowork for Accountants",
  },
  {
    filename: "og-role-operations-managers.png",
    category: "AI for Operations",
    title: "Claude Cowork for Ops Managers",
  },
  // Blog articles
  {
    filename: "og-blog-what-is-claude-cowork.png",
    category: "Guide · Claude Cowork",
    title: "What Claude Cowork Actually Is",
  },
  {
    filename: "og-blog-what-is-codex-app.png",
    category: "Guide · Codex",
    title: "The Codex Desktop App, Explained",
  },
  {
    filename: "og-blog-claude-cowork-vs-codex.png",
    category: "Comparison",
    title: "Claude Cowork vs. the Codex App",
  },
  {
    filename: "og-blog-ai-time-savings-guide.png",
    category: "Guide · Productivity",
    title: "How Much Time Can AI Save Your Team?",
  },
  {
    filename: "og-blog-can-ai-do-my-job.png",
    category: "Guide · Career",
    title: "Can AI Do My Job?",
  },
  {
    filename: "og-blog-aeo-geo-explained.png",
    category: "Guide · AI Search",
    title: "AEO & GEO Explained",
  },
  // Glossary terms
  { filename: "og-glossary-claude-cowork.png", category: "AI Glossary", title: "Claude Cowork" },
  { filename: "og-glossary-agentic-ai.png", category: "AI Glossary", title: "Agentic AI" },
  { filename: "og-glossary-mcp.png", category: "AI Glossary", title: "MCP (Model Context Protocol)" },
  { filename: "og-glossary-vibe-coding.png", category: "AI Glossary", title: "Vibe Coding" },
  { filename: "og-glossary-claude-code.png", category: "AI Glossary", title: "Claude Code" },
  { filename: "og-glossary-codex-app.png", category: "AI Glossary", title: "OpenAI Codex App" },
  { filename: "og-glossary-computer-use.png", category: "AI Glossary", title: "Computer Use" },
  { filename: "og-glossary-human-in-the-loop.png", category: "AI Glossary", title: "Human-in-the-Loop" },
  { filename: "og-glossary-llm.png", category: "AI Glossary", title: "LLM (Large Language Model)" },
  { filename: "og-glossary-claude.png", category: "AI Glossary", title: "Claude" },
  { filename: "og-glossary-prompt-engineering.png", category: "AI Glossary", title: "Prompt Engineering" },
  { filename: "og-glossary-ai-workflow-automation.png", category: "AI Glossary", title: "AI Workflow Automation" },
  { filename: "og-glossary-aeo.png", category: "AI Glossary", title: "AEO (Answer Engine Optimization)" },
  { filename: "og-glossary-geo.png", category: "AI Glossary", title: "GEO (Generative Engine Optimization)" },
];

for (const page of pages) {
  const svg = makeSvg(page);
  const resvg = new Resvg(svg, {
    font: { loadSystemFonts: true, defaultFontFamily: "Arial" },
    fitTo: { mode: "width" as const, value: 1200 },
  });
  const pngData = resvg.render();
  writeFileSync(join(OUT, page.filename), pngData.asPng());
  console.log(`✓ ${page.filename}`);
}

console.log(`\nGenerated ${pages.length} OG images → ${OUT}`);
