# SEO Strategy

## In scope
- Public marketing pages on `learncowork.net`
- Service pages (`/`, `/claude-cowork-training`, `/ai-coding-training`, `/about`, `/ai-report`)
- Industry landing pages (`/industries/:slug`)
- Role landing pages (`/roles/:slug`) — 10 job functions with gated prompt playbooks
- Free tool pages (`/job-description-analyzer`, `/ai-time-savings-calculator`, `/ai-readiness-quiz`)
- Crawlability assets and hosting behavior (`robots.txt`, `sitemap.xml`, `llms.txt`, static hosting)

## Out of scope
- API routes under `/api/**`
- Internal build tooling and mockup sandbox artifacts
- Post-checkout utility routes (`/success`, `/cancel`) except where their implementation affects crawlability or indexation
- Shared report pages (`/report/:id`) — noindex + robots-disallowed; they exist for sharing, not search

## Target audience
- Business teams evaluating AI productivity training
- Teams interested in Claude Cowork, Claude Code, Replit, and AI workflow training
- Industry-specific service buyers for marketing, legal, real estate, finance, healthcare, ecommerce, consulting, HR, insurance, and nonprofits
- Role-based searchers: marketing managers, sales reps, recruiters, paralegals, financial analysts, EAs, PMs, support teams, accountants, ops managers

## Primary keywords
- Claude Cowork training
- AI productivity training
- AI coding training
- Vibe coding training
- Claude Code training
- Replit training
- AI training for teams
- Claude Cowork for [role] (e.g. "Claude for recruiters", "AI for paralegals")
- Job description analyzer / can AI do my job
- AI time savings calculator / AI ROI calculator
- AI readiness assessment / quiz

## Rendering notes
- Public marketing routes are statically prerendered during build.
- `/success` and `/cancel` are client-routed utility pages and are not primary SEO targets.

## Dismissed categories
- (None yet)
