import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist", "public");
const SRC_INDEX = resolve(DIST, "index.html");

const SITE = "https://learncowork.net";

const routes = [
  {
    path: "ai-report",
    title:
      "Free AI Opportunity Report — See exactly how Claude Cowork could save your team 10+ hours a week",
    description:
      "Get a personalized, AI-generated report in 30 seconds. We analyze your actual website and show you 5 high-leverage Claude Cowork workflows specific to your business — with realistic time-saved estimates. Free, no credit card.",
    ogTitle:
      "Free AI Opportunity Report — by Evan Weber",
    ogDescription:
      "Drop in your website. In 30 seconds get a personalized report with 5 specific Claude Cowork workflows tailored to your business and realistic time-saved estimates. Free.",
    image: `${SITE}/og-ai-report.png`,
    imageAlt:
      "Free AI Opportunity Report — see how Claude Cowork could save your team 10+ hours a week",
  },
  {
    path: "claude-cowork-training",
    title:
      "Claude Cowork Training for Business Teams | Evan Weber",
    description:
      "Live 1-on-1 Claude Cowork training. Learn to automate real workflows with Anthropic's agentic AI. 1-hour ($300) or 4-hour ($1,000) sessions with Evan Weber.",
    ogTitle: "Claude Cowork Training for Teams | Evan Weber",
    ogDescription:
      "Live Claude Cowork training built around your actual workflows. 25-year digital marketing veteran. Book a session today.",
    image: `${SITE}/og-image.png`,
    imageAlt: "Claude Cowork Training by Evan Weber",
  },
  {
    path: "ai-coding-training",
    title:
      "Vibe Coding & AI Coding Training | Evan Weber",
    description:
      "Live training on Claude Code, Replit, Cursor, and the AI coding stack. Ship working software with AI as your pair programmer. 1-hour or 4-hour sessions.",
    ogTitle: "Vibe Coding Training with Evan Weber",
    ogDescription:
      "Learn to ship working software with Claude Code, Replit, and Cursor. Live, 1-on-1, built around what you actually want to build.",
    image: `${SITE}/og-image.png`,
    imageAlt: "Vibe Coding Training by Evan Weber",
  },
  {
    path: "about",
    title: "About Evan Weber — AI Productivity Trainer",
    description:
      "25-year digital marketing veteran, founder of Experience Advertising, daily Claude Cowork user. 400+ companies helped. 100+ LinkedIn recommendations.",
    ogTitle: "About Evan Weber — AI Productivity Trainer",
    ogDescription:
      "25-year digital marketing veteran. Founder of Experience Advertising. Daily Claude Cowork power user.",
    image: `${SITE}/og-evan.jpg`,
    imageAlt: "Evan Weber — AI Productivity Trainer",
  },
];

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function patch(html, route) {
  const url = `${SITE}/${route.path}`;
  const title = escapeAttr(route.title);
  const ogTitle = escapeAttr(route.ogTitle);
  const desc = escapeAttr(route.description);
  const ogDesc = escapeAttr(route.ogDescription);
  const img = escapeAttr(route.image);
  const imgAlt = escapeAttr(route.imageAlt);
  const isJpg = route.image.toLowerCase().endsWith(".jpg") || route.image.toLowerCase().endsWith(".jpeg");
  const imgType = isJpg ? "image/jpeg" : "image/png";

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${desc}" />`
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${ogTitle}" />`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${ogDesc}" />`
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  out = out.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${img}" />`
  );
  out = out.replace(
    /<meta property="og:image:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:type" content="${imgType}" />`
  );
  out = out.replace(
    /<meta property="og:image:alt" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:alt" content="${imgAlt}" />`
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${ogTitle}" />`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${ogDesc}" />`
  );
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${img}" />`
  );
  return out;
}

async function main() {
  const html = await readFile(SRC_INDEX, "utf8");
  for (const route of routes) {
    const outDir = resolve(DIST, route.path);
    await mkdir(outDir, { recursive: true });
    const outFile = resolve(outDir, "index.html");
    const patched = patch(html, route);
    await writeFile(outFile, patched, "utf8");
    console.log(`prerender-meta: wrote ${route.path}/index.html`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
