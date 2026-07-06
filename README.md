# Maher Almously | DFW Real Estate

Professional single-page website for Maher Almously, a real estate agent serving DFW and North Texas (Dallas, Plano, Garland, Richardson, Frisco, McKinney, Allen).

Phone: (817) 501-0172

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4
- shadcn/ui (Radix base) for form and UI primitives
- Motion for React for scroll reveals, navbar transition, and the progress bar
- react-hook-form + zod for the contact form
- lucide-react icons

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

All visible copy lives in one file: `lib/site-config.ts`. Change headlines, steps, areas, phone labels, and form text there without touching components.

Theme colors and radius live in `app/globals.css` (`:root` tokens). The palette is white, charcoal, warm stone, and a deep brick red accent.

## Content rules baked into the copy

- No fake listings, testimonials, awards, sales numbers, addresses, or maps
- No em or en dashes in visible copy
- No filler realtor phrases

## How the contact form works

There is no backend. On submit the form validates, composes a text message, and opens the visitor's messaging app addressed to (817) 501-0172 (`sms:` link). Nothing is stored or sent anywhere else. Swap this for an email service or CRM later by replacing `onSubmit` in `components/site/contact.tsx`.

## Follow-ups for Maher

- `lib/site-config.ts` has an empty `footer.compliance` slot (brokerage name and license number). Texas advertising rules generally require the sponsoring broker's info in ads; fill it in and it renders automatically in the footer.
- Featured listings section ships as an honest "coming soon" state; replace it with real listings when available.
- Deployment: any Node host or Vercel works (`npm run build`).
