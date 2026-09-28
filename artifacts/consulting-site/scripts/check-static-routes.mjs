import { access, readdir, readFile } from "node:fs/promises";
import { resolve, relative } from "node:path";

const root = resolve(import.meta.dirname, "..");
const publicDir = resolve(root, "dist/public");
const config = await readFile(resolve(root, ".replit-artifact/artifact.toml"), "utf8");
const sitemap = await readFile(resolve(root, "public/sitemap.xml"), "utf8");

const rewrites = new Map();
for (const match of config.matchAll(/\[\[services\.production\.rewrites\]\]\s*from = "([^"]+)"\s*to = "([^"]+)"/g)) {
  if (rewrites.has(match[1])) throw new Error(`Duplicate static rewrite: ${match[1]}`);
  rewrites.set(match[1], match[2]);
}
if (rewrites.has("/*")) throw new Error("The homepage catch-all would hide unknown routes and prerendered pages");

async function htmlFiles(dir) {
  const output = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) output.push(...await htmlFiles(path));
    else if (entry.name.endsWith(".html")) output.push(path);
  }
  return output;
}

let checked = 0;
for (const file of await htmlFiles(publicDir)) {
  const path = `/${relative(publicDir, file).replaceAll("\\", "/").replace(/\.html$/, "")}`;
  if (path === "/index" || path.endsWith("/index") || ["/success", "/cancel", "/report"].includes(path)) continue;
  const target = `${path}.html`;
  for (const from of [path, `${path}/`]) {
    if (rewrites.get(from) !== target) throw new Error(`Missing or wrong static rewrite: ${from} -> ${target}`);
  }
  if (!sitemap.includes(`<loc>https://learncowork.net${path}/</loc>`)) {
    throw new Error(`Prerendered route missing from sitemap: ${path}`);
  }
  checked++;
}
for (const name of ["success", "cancel"]) {
  for (const path of [`/${name}`, `/${name}/`]) {
    if (rewrites.get(path) !== `/${name}.html`) throw new Error(`Missing checkout return route: ${path}`);
  }
}
if (rewrites.get("/report/*") !== "/report.html") throw new Error("Missing shared report route");
for (const name of ["success", "cancel", "report"]) {
  const html = await readFile(resolve(publicDir, `${name}.html`), "utf8");
  if (!html.includes('name="robots" content="noindex, nofollow"')) {
    throw new Error(`Client-only route lacks noindex in initial HTML: ${name}`);
  }
}
for (const match of sitemap.matchAll(/<loc>https:\/\/learncowork\.net(\/[^<]*)<\/loc>/g)) {
  const route = match[1].replace(/\/$/, "");
  const file = route ? resolve(publicDir, `${route.slice(1)}.html`) : resolve(publicDir, "index.html");
  try { await access(file); }
  catch { throw new Error(`Sitemap URL has no prerendered page: ${match[1]}`); }
}
console.log(`Static route check passed for ${checked} prerendered pages`);
