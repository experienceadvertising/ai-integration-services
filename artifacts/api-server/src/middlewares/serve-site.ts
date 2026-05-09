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

  app.use(
    express.static(siteDir, {
      extensions: ["html"],
      index: "index.html",
      fallthrough: true,
      setHeaders,
    }),
  );

  const spaFallback: RequestHandler = (req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    if (req.path.startsWith("/api/")) return next();
    const indexHtml = path.join(siteDir, "index.html");
    res
      .status(200)
      .type("html")
      .setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    res.sendFile(indexHtml);
  };
  app.use(spaFallback);
}
