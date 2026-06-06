# SEO Strategy

## In scope
- Public marketing pages on `learncowork.net`
- Service pages (`/`, `/claude-cowork-training`, `/ai-coding-training`, `/about`, `/ai-report`)
- Industry landing pages (`/industries/:slug`)
- Crawlability assets and hosting behavior (`robots.txt`, `sitemap.xml`, `llms.txt`, static hosting)

## Out of scope
- API routes under `/api/**`
- Internal build tooling and mockup sandbox artifacts
- Post-checkout utility routes (`/success`, `/cancel`) except where their implementation affects crawlability or indexation

## Target audience
- Business teams evaluating AI productivity training
- Teams interested in Claude Cowork, Claude Code, Replit, and AI workflow training
- Industry-specific service buyers for marketing, legal, real estate, finance, healthcare, ecommerce, consulting, HR, insurance, and nonprofits

## Primary keywords
- Claude Cowork training
- AI productivity training
- AI coding training
- Vibe coding training
- Claude Code training
- Replit training
- AI training for teams

## Rendering notes
- Public marketing routes are statically prerendered during build.
- `/success` and `/cancel` are client-routed utility pages and are not primary SEO targets.

## Dismissed categories
- (None yet)
