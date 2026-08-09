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

Without these entries, the catch-all `/* → /index.html` fires and serves the SPA shell with the homepage title.

**Why:** The catch-all rewrite is intentional (SPA fallback for client-only routes like /success and /cancel). Explicit rewrites above it take priority.

**How to apply:** Any time a new page is added to the consulting site and added to the prerender list, also add its rewrite pair to artifact.toml using `verifyAndReplaceArtifactToml`. The API server's `servePrerenderedRoute` middleware only affects the dev workflow — it has no effect in production.

**Diagnostic signature of missing rewrite:** Live route returns 98,511 bytes (index.html size) with the homepage title; the `.html`-suffixed URL (e.g. `/new-page.html`) returns the correct byte count and title.
