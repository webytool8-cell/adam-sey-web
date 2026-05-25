# Adam Sey Web

Phase 1 + Phase 2 foundation for a premium public studio site and owner-only internal production dashboard.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Setup

1. `npm install`
2. Add `.env.local` with:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Run `npm run dev`

## Supabase tables expected

- `leads` (business_name, website_url, contact_name, contact_email, contact_phone, project_notes, business_category, project_status)
- `templates` (name, slug, theme JSON, content JSON, sections JSON)
- `previews` (slug, business_name, template_slug, logo_url, business_details JSON, theme_override JSON)
