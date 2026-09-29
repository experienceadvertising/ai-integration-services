---
name: Static routing requires explicit rewrites
description: Why adding new pages to the consulting site requires artifact.toml rewrite entries, not just prerendering them.
---

The consulting site artifact uses `serve = "static"` in production. Replit's static router handles all routes using the explicit `[[services.production.rewrites]]` entries in `artifact.toml` — the API server's `serve-site.ts` middleware is NOT involved in production routing.

**Rule:** Every new prerendered page that needs to be served at a clean URL (without `.html` extension) must have an explicit rewrite pair in `artifacts/consulting-site/.replit-artifact/artifact.toml`:

```toml
[[services.production.rewrites]]
from = "/new-page"
to = "/new-page.html"

[[services.production.rewrites]]
from = "/new-page/"
to = "/new-page.html"
```

Without these entries, a clean URL is not guaranteed to serve its prerendered page.

**Why:** A former `/* → /index.html` fallback returned homepage metadata and HTTP 200 for unknown routes. It was removed to avoid soft 404s. Client-only checkout and shared-report URLs now have their own explicit HTML rewrites and noindex pages.

**How to apply:** Any time a new page is added to the consulting site and added to the prerender list, also add its rewrite pair to artifact.toml using `verifyAndReplaceArtifactToml`, add its canonical URL to the sitemap, and run the static route check. The API server's `servePrerenderedRoute` middleware does not serve production site routes.

**Diagnostic:** Check the live clean URL's initial HTML title, canonical, and HTTP status; checking only its `.html` URL does not verify the rewrite.
