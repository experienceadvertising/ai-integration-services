# SEO Strategy

## In scope
- Public marketing pages on `learncowork.net`
- Service pages (`/`, `/claude-cowork-training`, `/ai-coding-training`, `/aeo-geo-training`, `/about`, `/ai-report`)
- Industry landing pages (`/industries/:slug`)
- Role landing pages (`/roles/:slug`) — 10 job functions with gated prompt playbooks
- Free tool pages (`/job-description-analyzer`, `/ai-time-savings-calculator`, `/ai-readiness-quiz`)
- Blog (`/blog`, `/blog/:slug`) — author-bylined, first-hand guides for E-E-A-T and LLM/AI-answer citation
- Glossary (`/glossary`, `/glossary/:slug`) — standalone definitions for featured snippets and LLM citation
- AEO/GEO (Answer Engine Optimization / Generative Engine Optimization) execution on this site itself: FAQPage/Service/Article schema that matches visible content exactly, `llms.txt`, AI-crawler-friendly `robots.txt`, direct-answer content structure
- Crawlability assets and hosting behavior (`robots.txt`, `sitemap.xml`, `llms.txt`, static hosting)

## Out of scope
- API routes under `/api/**`
- Internal build tooling and mockup sandbox artifacts
- Post-checkout utility routes (`/success`, `/cancel`) except where their implementation affects crawlability or indexation
- Shared report pages (`/report/:id`) — noindex + robots-disallowed; they exist for sharing, not search

## Target audience
- Business teams evaluating AI productivity training
- Teams interested in Claude Cowork, Claude Code, Replit, the Codex app (including its agentic/Cowork-like features — multi-agent orchestration, computer use, Automations), and AI workflow training
- Industry-specific service buyers for marketing, legal, real estate, finance, healthcare, ecommerce, consulting, HR, insurance, and nonprofits
- Role-based searchers: marketing managers, sales reps, recruiters, paralegals, financial analysts, EAs, PMs, support teams, accountants, ops managers
- Marketing/SEO teams and agencies evaluating AEO/GEO (AI search optimization) training or execution

## Primary keywords
- Claude Cowork training
- AI productivity training
- AI coding training
- Vibe coding training
- Claude Code training
- Replit training
- Codex app training / agentic Codex features
- AI training for teams
- Claude Cowork for [role] (e.g. "Claude for recruiters", "AI for paralegals")
- Job description analyzer / can AI do my job
- AI time savings calculator / AI ROI calculator
- AI readiness assessment / quiz
- AEO training / Answer Engine Optimization
- GEO training / Generative Engine Optimization
- AI search optimization / get cited by ChatGPT or Claude
- llms.txt setup

## Rendering notes
- Public marketing routes are statically prerendered during build.
- `/success` and `/cancel` are client-routed utility pages and are not primary SEO targets.

## AEO/GEO execution checklist (for this site)
- FAQPage/Service/Article JSON-LD on every page that has a visible FAQ or service description — schema content must mirror visible content exactly, not just approximate it
- `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and other AI crawlers
- `llms.txt` kept current with every new page/article/glossary term
- Every blog post and glossary term leads with a direct, quotable answer before going into nuance
- New content is cross-linked into the glossary/blog web, not published as an orphan page

## Dismissed categories
- (None yet)
