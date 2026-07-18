# Maher Almously | DFW Real Estate

Professional single-page website for Maher Almously, a real estate agent serving DFW and North Texas (Dallas, Plano, Garland, Richardson, Frisco, McKinney, Allen).

Phone: (817) 501-0172

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack), configured for **static export** (`output: "export"`) — no Node server in production
- Tailwind CSS v4
- shadcn/ui (Radix base) for form and UI primitives
- Motion for React for scroll reveals, navbar transition, and the progress bar
- react-hook-form + zod for client-side form validation
- `public/contact.php` for the contact form's email delivery (see below)
- lucide-react icons

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # production build -> generates out/
npm run preview  # serve out/ locally to sanity-check the static build
```

There is no `npm run start` — this app has no Node server to start in production. `npm run build` produces a plain `out/` folder of HTML/CSS/JS that gets uploaded directly to a host's `public_html` (see PRODUCTION.md).

## Editing content

All visible copy lives in one file: `lib/site-config.ts`. Change headlines, steps, areas, phone labels, and form text there without touching components.

Theme colors and radius live in `app/globals.css` (`:root` and `.dark` tokens). The palette is warm paper/charcoal in light mode, near-black/off-white in dark mode, with a deep brick red accent in both. Dark mode is the default; visitors can switch with the toggle in the navbar.

## Content rules baked into the copy

- No fake listings, testimonials, awards, sales numbers, addresses, or maps
- No em or en dashes in visible copy
- No filler realtor phrases

## How the contact form works

The site is a static export — there is no Next.js server in production, so the form can't use a Next.js API route. Instead, on submit it posts to `/contact.php` (a plain PHP file that lives in `public/` and gets copied straight into `out/`), which validates the fields again server-side and emails the lead using PHP's built-in `mail()` function. No library, API key, or npm package required — it works on any standard PHP hosting, including HostGator shared plans.

**Before this works, open `public/contact.php` and set the `CONTACT_TO_EMAIL` constant near the top to the real inbox that should receive leads.** It ships with a placeholder (`maher@example.com`) on purpose so it fails obviously instead of silently emailing the wrong address.

The "Call Maher" and "Text Maher" buttons next to the form are separate, unchanged `tel:` / `sms:` links — those still work exactly as before regardless of the form.

There's also a hidden honeypot field (`company`) for basic bot filtering: real visitors never fill it in; if it arrives non-empty, `contact.php` silently pretends success without sending an email.

If leads land in spam (common with plain `mail()` on shared hosting without SPF/DKIM configured), see the deliverability note in `PRODUCTION.md` for the upgrade path.

## TREC compliance

The footer (visible on the homepage) shows the Metroplex Realty Brokerage Services LLC logo and links to:

- the completed IABS form at `public/iabs-maher-almously.pdf` (replace that file to update it)
- the TREC Consumer Protection Notice page on trec.texas.gov

## Follow-ups for Maher

- Featured listings section ships as an honest "coming soon" state; replace it with real listings when available.
- Set `CONTACT_TO_EMAIL` in `public/contact.php` before going live (see above).
- Deployment: see `PRODUCTION.md` for the full HostGator runbook.
