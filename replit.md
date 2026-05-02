# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Payments**: Stripe (direct API, no stripe-replit-sync)

## Artifacts

### consulting-site (react-vite)
- Preview path: `/`
- Landing page for AI consulting and training services by Evan Weber
- Uses `useListPackages` and `useCreateCheckoutSession` hooks from `@workspace/api-client-react`
- Routes: `/`, `/claude-cowork-training`, `/ai-coding-training`, `/about`, `/success`, `/cancel`, `/industries/:slug`
- SEO: react-helmet-async with HelmetProvider wrapping App; reusable `SEO` component in `src/components/seo.tsx`
- Nav: sticky `SiteNav` component in `src/components/site-nav.tsx` with active route highlighting
- Static SEO files in `public/`: `robots.txt` (blocks GPTBot + Google-Extended), `sitemap.xml`, `og-evan.jpg`, `favicon.svg`
- `index.html` has full JSON-LD structured data (Person + Service + WebSite), OG tags, Twitter card, canonical URL
- Domain: `https://learncowork.net` — update across `index.html`, `sitemap.xml`, page canonical props, `seo.tsx`, and `postmark.ts` if domain changes

#### Conversion / Lead-Capture Components
- `sticky-mobile-cta.tsx` — fixed-bottom mobile bar (>700px scroll), sessionStorage dismiss, hidden on `/success` and `/cancel`
- `exit-intent-popup.tsx` — desktop only, fires after 20s + mouseleave-top, sessionStorage one-shot, full a11y (role/aria/Escape/focus trap)
- `booking-trust-row.tsx` — 3-column trust row (guarantee / secure / intro call) used on home + industry pricing
- `comparison-table.tsx` — semantic 1hr-vs-4hr comparison table (9 features), under home pricing
- `home-faq.tsx` — 7-Q&A accordion below home pricing
- `recent-bookings-badge.tsx` — fetches `/api/stats/recent-bookings`, only renders when count >= 3
- `cowork-analyzer.tsx` — accepts `defaultUserType`, `defaultIndustry`, `headline`, `subheadline`, `variant: "section"|"embedded"` props
- `lib/booking-links.ts` — `CALENDLY_INTRO` is a placeholder URL — set to a real 15-min Calendly event before launch
- Home page reads `?industry=<slug>` URL param to pre-fill the analyzer + show a welcome banner
- `/success` page uses a 3-step progressive intake form (about → work → goals) with progress bar

#### Industry Pages
- `pages/industry.tsx` rendered at `/industries/:slug`; data in `src/data/industries.ts`
- Inline `CoworkAnalyzer` between use cases and quick win section, pre-filled with industry name

### api-server
- Preview path: `/api`
- `GET /api/packages` — fetches packages directly from Stripe API
- `POST /api/checkout` — creates a Stripe checkout session
- `GET /api/stats/recent-bookings` — count of paid Stripe sessions in the last 30 days; in-memory 5-min cache; paginates Stripe `has_more` (50-page safety cap)
- `POST /api/intake` — receives 3-step intake form from `/success` page and emails Evan
- `POST /api/analyze` — streams the AI cowork analyzer report
- `POST /api/leads` — captures email leads (used by analyzer + lead magnets)
- Uses `getUncachableStripeClient()` from `stripeClient.ts`

#### Email Drip / Reminders (`lib/drip-scheduler.ts`)
- Hourly cron starts on server boot
- `runDrip()` — sends day-3 and day-7 follow-ups to leads in `leadsTable`
- `runSessionReminders()` — sends a "session prep guide" email 2 hours after a Stripe `paid` checkout session (gives buyer time to schedule Calendly first); paginates Stripe with 50-page cap
- Dedup is in-memory (`reminderSent` Set) — acceptable for single-instance deployment; persist to DB if scaling horizontally
- Email templates in `lib/postmark.ts`: `sendIntakeEmail`, `sendDrip3`, `sendDrip7`, `sendSessionPrepReminder`

## Stripe Setup

- Stripe integration connected via Replit connector (no API keys in env)
- Products seeded via `scripts/src/seed-products.ts`
- Run seed: `pnpm --filter @workspace/scripts exec tsx src/seed-products.ts`
- Two packages:
  - **1-Hour Training Session** — $300 (one-time payment)
  - **4-Hour Deep Dive Workshop** — $1,000 (one-time payment)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/scripts exec tsx src/seed-products.ts` — seed Stripe products

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
