# SoFiCo Services Limited (Placeholder)

Production-ready, compliance-oriented corporate B2B website built with Next.js App Router (TypeScript) and Tailwind CSS.

## Requirements

- Node.js 18+ recommended
- pnpm (project uses `pnpm-lock.yaml`)

## Setup

1. Install dependencies

```bash
pnpm install
```

2. Configure environment variables

Copy `.env.example` to `.env.local` and fill placeholders:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_DEPLOY_ENV` (`preview` | `production`)
- `CATALOG_ACCESS_KEY`
- `ADMIN_PASSWORD`

3. Run locally

```bash
pnpm dev
```

## Build / Run

```bash
pnpm build
pnpm start
```

## Preview vs Production

The site supports two deploy modes controlled by `NEXT_PUBLIC_DEPLOY_ENV`:

- `preview`: global `robots` defaults to `noindex,nofollow`
- `production`: public pages are indexable (restricted areas remain `noindex`)

## Restricted areas

### Catalog

- Route: `/catalog` and `/catalog/[sku]`
- Soft gate via query key: `?k=CATALOG_ACCESS_KEY`
- Always `noindex,nofollow`
- Excluded from sitemap
- Disallowed in `robots.txt`

### Admin

- Route: `/admin` (and subpaths)
- Protected by middleware Basic Auth
- Username: `admin`
- Password: `ADMIN_PASSWORD`
- Secure default: if `ADMIN_PASSWORD` is missing, middleware returns `403`

## Compliance notes

- No analytics
- No trackers
- No phone numbers
- No bank account details
- No testimonials
