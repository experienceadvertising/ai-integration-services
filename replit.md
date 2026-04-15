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
- Routes: `/`, `/claude-cowork-training`, `/ai-coding-training`, `/about`, `/success`, `/cancel`
- SEO: react-helmet-async with HelmetProvider wrapping App; reusable `SEO` component in `src/components/seo.tsx`
- Nav: sticky `SiteNav` component in `src/components/site-nav.tsx` with active route highlighting
- Static SEO files in `public/`: `robots.txt` (blocks GPTBot + Google-Extended), `sitemap.xml`, `og-evan.jpg`, `favicon.svg`
- `index.html` has full JSON-LD structured data (Person + Service + WebSite), OG tags, Twitter card, canonical URL
- Domain: `https://learncowork.net` — update across `index.html`, `sitemap.xml`, page canonical props, `seo.tsx`, and `postmark.ts` if domain changes

### api-server
- Preview path: `/api`
- `GET /api/packages` — fetches packages directly from Stripe API
- `POST /api/checkout` — creates a Stripe checkout session
- Uses `getUncachableStripeClient()` from `stripeClient.ts`

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
