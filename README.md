# Manatee Mobility Web

**Informational go-live v1:** Coming soon note on the live page; waitlist/DB deferred (no DATABASE_URL required). Build succeeds without DATABASE_URL.


Marketing site (informational go-live) for Manatee Mobility — autonomous Tesla Cybercab ride-hail in Naples, Florida.

Stack: Next.js App Router, TypeScript, Tailwind CSS v4, Neon Postgres (@neondatabase/serverless).

Brand: Quiet Horizon (Soft Cloud canvas, Gulf Teal CTAs, Fraunces + Source Sans 3). Locked stacked logo in public/brand/.

## Local development

1. Copy .env.example to .env.local and set DATABASE_URL
2. npm install
3. npm run dev
 4. Open http://localhost:3000

npm run build succeeds without DATABASE_URL. Use npm start after a production build.

## Deferred: Neon waitlist (not required for go-live)

1. Create a project at console.neon.tech
2. Put the connection string in .env.local as DATABASE_URL
3. Run db/schema.sql in the Neon SQL Editor

Schema: waitlist_signups (unique email, optional name/phone, city default Naples, UTM fields, created_at).

## Vercel deploy

1. Import pfoll/manatee-mobility-web in Vercel
2. DATABASE_URL not needed for informational v1
3. Deploy with the Next.js preset
4. Attach custom domain after DNS cleanup below

## Namecheap Advanced DNS

Before adding Vercel records, clean parking leftovers in Namecheap Advanced DNS:

1. Remove parking CNAME www pointing at parkingpage.namecheap.com
2. Remove URL Redirect on @
3. Add Vercel A/CNAME records from the Vercel domain UI

Do not leave parking and Vercel records competing.

## Deferred: Waitlist behavior (code kept in repo)

- Server Action: src/app/actions/waitlist.ts
- Duplicate email: friendly already-on-the-list message
- Captures utm_source, utm_medium, utm_campaign from query string
- Honeypot field: company

## Brand assets

- Logo only: public/brand/manatee-mobility-logo-stacked.png
- Tokens: src/app/color-tokens.css
- Do not use Horizon Line, Quiet M, or alternate silhouette marks
