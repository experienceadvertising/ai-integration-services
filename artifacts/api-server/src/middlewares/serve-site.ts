import express, { type Express, type RequestHandler } from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { logger } from "../lib/logger";

const here = path.dirname(fileURLToPath(import.meta.url));

function resolveSiteDir(): string | null {
  const env = process.env["CONSULTING_SITE_DIST"];
  const candidates = [
    env,
    // bundled api-server runs from artifacts/api-server/dist/index.mjs
    path.resolve(here, "../../consulting-site/dist/public"),
    // dev (tsx) runs from artifacts/api-server/src/middlewares/serve-site.ts
    path.resolve(here, "../../../consulting-site/dist/public"),
    // CWD fallback
    path.resolve(process.cwd(), "artifacts/consulting-site/dist/public"),
  ].filter((p): p is string => Boolean(p));

  for (const c of candidates) {
    if (fs.existsSync(path.join(c, "index.html"))) return c;
  }
  return null;
}

export function mountSite(app: Express): void {
  const siteDir = resolveSiteDir();
  if (!siteDir) {
    logger.warn(
      "consulting-site dist not found; static site serving disabled. " +
        "Run `pnpm --filter @workspace/consulting-site run build` or set CONSULTING_SITE_DIST.",
    );
    return;
  }

  logger.info({ siteDir }, "Serving consulting-site from disk");

  const setHeaders = (res: express.Response, file: string): void => {
    if (file.endsWith(".html")) {
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    } else if (/\.(js|css|woff2?|png|jpe?g|svg|webp|avif|ico|gif)$/i.test(file)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  };

  // Resolve clean URLs to their prerendered HTML files explicitly. Replit's
  // production router can otherwise fall through to the SPA shell even when
  // express.static is configured with the html extension fallback.
  const servePrerenderedRoute: RequestHandler = (req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    if (req.path === "/" || path.extname(req.path)) return next();

    const relativePath = req.path.replace(/^\/+/, "");
    const htmlFile = path.resolve(siteDir, `${relativePath}.html`);
    const siteRoot = `${path.resolve(siteDir)}${path.sep}`;

    if (!htmlFile.startsWith(siteRoot) || !fs.existsSync(htmlFile)) return next();

    res
      .status(200)
      .type("html")
      .setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    res.sendFile(htmlFile);
  };

  app.use(servePrerenderedRoute);

  app.use(
    express.static(siteDir, {
      extensions: ["html"],
      index: "index.html",
      fallthrough: true,
      setHeaders,
    }),
  );

  // Routes that intentionally require SPA shell delivery (not prerendered).
  // /success and /cancel are post-Stripe redirect targets blocked in robots.txt;
  // success.tsx reads window.location at render time so they cannot be prerendered.
  const CLIENT_ONLY_PATHS = new Set(["/success", "/cancel"]);

  const spaFallback: RequestHandler = (req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    if (req.path.startsWith("/api/")) return next();
    const indexHtml = path.join(siteDir, "index.html");
    const isClientOnly = CLIENT_ONLY_PATHS.has(req.path);
    // Serve the SPA shell with a real 404 status for unknown paths so that
    // crawlers and bots receive the correct HTTP response code. Client-only
    // routes that intentionally skip prerendering still get a 200.
    res
      .status(isClientOnly ? 200 : 404)
      .type("html")
      .setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    res.sendFile(indexHtml);
  };
  app.use(spaFallback);
}
