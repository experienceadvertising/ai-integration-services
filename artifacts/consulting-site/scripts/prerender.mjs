import { build as viteBuild } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist", "public");
const SSR_DIST = resolve(ROOT, "dist", "server");

const SITE = "https://learncowork.net";

// 1. Build the SSR bundle with the same vite.config.ts but in SSR mode.
await viteBuild({
  configFile: resolve(ROOT, "vite.config.ts"),
  root: ROOT,
  build: {
    ssr: resolve(ROOT, "src/entry-server.tsx"),
    outDir: SSR_DIST,
    emptyOutDir: true,
    ssrEmitAssets: false,
    rollupOptions: {
      output: { format: "esm", entryFileNames: "entry-server.mjs" },
    },
  },
});

// 2. Load the compiled SSR module.
const ssrModuleUrl = pathToFileURL(
  resolve(SSR_DIST, "entry-server.mjs"),
).href;
const { render, industries } = await import(ssrModuleUrl);

if (typeof render !== "function") {
  throw new Error("entry-server.mjs did not export a render() function");
}
if (!Array.isArray(industries)) {
  throw new Error("entry-server.mjs did not export an industries[] array");
}

// 3. Routes to prerender. Skip /success and /cancel — both are post-Stripe
//    redirect targets, blocked in robots.txt, and success.tsx reads
//    window.location at render time. The api-server SPA fallback returns
//    index.html for them so the SPA still works after Stripe redirects.
const routes = [
  "/",
  "/claude-cowork-training",
  "/ai-coding-training",
  "/about",
  "/ai-report",
  ...industries.map((i) => `/industries/${i.slug}`),
];

// 4. Read the built shell once.
const shellPath = resolve(DIST, "index.html");
const shell = await readFile(shellPath, "utf8");

// react-helmet-async v3 is a passthrough on React 19, and React 19's metadata
// hoisting doesn't move tags to <head> when using renderToString. So we scan
// the rendered HTML for <title>, <meta>, <link>, <script type="application/ld+json">
// emitted at the start of the component tree (by <SEO>) and lift them into <head>.
const HOIST_RE = new RegExp(
  "^(" +
    "<title[^>]*>[\\s\\S]*?</title>" +
    "|<meta\\s[^>]*?/?>" +
    "|<link\\s[^>]*?/?>" +
    '|<script\\s[^>]*?type=["\']application/ld\\+json["\'][^>]*>[\\s\\S]*?</script>' +
  ")",
  "i",
);

function hoistHeadTags(html) {
  const hoisted = [];
  let body = html;
  // Strip leading hoistable tags (and whitespace between them) from the body.
  while (true) {
    const trimmed = body.replace(/^\s+/, "");
    const m = trimmed.match(HOIST_RE);
    if (!m) {
      body = trimmed;
      break;
    }
    hoisted.push(m[1]);
    body = trimmed.slice(m[1].length);
  }
  return { head: hoisted.join("\n    "), body };
}

function outputPath(url) {
  if (url === "/") return resolve(DIST, "index.html");
  return resolve(DIST, `${url.replace(/^\//, "")}.html`);
}

let wrote = 0;
for (const url of routes) {
  let rendered;
  try {
    rendered = render(url);
  } catch (err) {
    console.error(`prerender: render() threw for ${url}`);
    throw err;
  }

  const { head: headInjection, body } = hoistHeadTags(rendered.html);
  const out = shell
    .replace("<!--ssr-helmet-->", headInjection)
    .replace("<!--ssr-outlet-->", body);

  if (out === shell) {
    throw new Error(
      `prerender: shell placeholders missing — check index.html for <!--ssr-helmet--> and <!--ssr-outlet--> (route=${url})`,
    );
  }

  const outFile = outputPath(url);
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, out, "utf8");
  console.log(`prerender: ${url}  ->  ${outFile.replace(DIST + "/", "")}`);
  wrote += 1;
}

console.log(`prerender: wrote ${wrote} files; site=${SITE}`);
