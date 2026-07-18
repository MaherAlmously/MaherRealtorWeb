# Production Runbook — Maher Almously Website

This is the checklist we go through together when it is time to put the
site live on HostGator with your domain. Nothing in this file is
automatic; each step below is something we will actually do at that
time.

The site builds to a **static export** — plain HTML/CSS/JS files plus one
PHP file for the contact form. There is no Node.js server involved in
production at all, so this works on any standard HostGator shared
hosting plan (no "Node.js Selector" required).

---

## 1. Buy the domain

Register the domain (through HostGator or elsewhere). If it's registered
somewhere other than HostGator, you'll point its nameservers at
HostGator in the next step.

## 2. Point the domain to HostGator

In HostGator's account panel (or your registrar, if the domain lives
elsewhere), set the domain's nameservers to HostGator's, or add the
domain to your HostGator hosting account. HostGator's own setup wizard
walks through this — the exact nameserver values are in your HostGator
welcome email / account panel.

DNS changes can take a few hours to propagate. Nothing else below
depends on this finishing first, so we can prep the build while we wait.

## 3. Build the site with Next.js static export

Already done in the codebase — `next.config.ts` is set to:

```ts
output: "export",
images: { unoptimized: true },
```

This means `npm run build` produces a plain `out/` folder: no server,
no API routes, just files a static host can serve directly.

## 4. Contact form: Web3Forms

The form posts directly from the browser to Web3Forms
(`https://api.web3forms.com/submit`), which relays it by email to
`connect@maherealtor.com`. There is no PHP handler and nothing to
upload for this — it's wired into `components/site/contact.tsx` with
a Web3Forms access key.

We moved off a self-hosted PHP/SMTP script because HostGator's
malware/bot scanner (Imunify360 or similar) flagged the raw-SMTP
mailer file and started returning a 409 "human check" page for every
request to `/contact.php`, silently breaking the form. Web3Forms
avoids that entirely since there's no server-side script for the host
to flag.

If the Web3Forms access key ever needs to change (e.g. rotating it),
get a new one at https://web3forms.com and update
`WEB3FORMS_ACCESS_KEY` in `components/site/contact.tsx`, then rebuild.

## 5. Run `npm run build`

```bash
npm run build
```

This generates (or regenerates) the `out/` folder. Run `npm run preview`
afterward to spot-check it locally before uploading — it serves `out/`
exactly as a static host would.

## 6. Upload `out/` contents to `public_html`

In cPanel → File Manager (or via FTP/SFTP), upload **the contents of**
`out/` — not the `out` folder itself — directly into `public_html`, so
`public_html/index.html`, `public_html/contact.php`,
`public_html/_next/`, etc. sit at the top level.

If there's an existing placeholder `index.html` or default HostGator
page in `public_html`, remove it first so it doesn't conflict.

## 7. Test the live site

- [ ] Load the domain in a browser — confirm it's this site, not a
      HostGator placeholder page or a cached old version.
- [ ] Click through every nav link and section anchor.
- [ ] Check both light and dark mode (toggle in the navbar).
- [ ] Load it on an actual phone and check "Call Maher" / "Text Maher"
      open the right apps with the right number.
- [ ] Confirm the footer's IABS PDF and TREC Consumer Protection Notice
      links open correctly from the live domain.

## 8. Test the contact form

- [ ] Submit the form for real, with a real email address you can check.
- [ ] Confirm the email actually arrives at `connect@maherealtor.com`.
      Check the spam folder too, the first time.
- [ ] If it doesn't arrive, check the Web3Forms dashboard
      (https://web3forms.com) for the submission and confirm the access
      key in `components/site/contact.tsx` is still valid.

## 9. Enable / check SSL

HostGator includes free SSL (AutoSSL / Let's Encrypt) on shared hosting.
In cPanel, check under "SSL/TLS Status" or "AutoSSL" that a certificate
is issued and active for the domain, and that the site loads as
`https://` (not just `http://`) with a padlock in the browser, not just
that the option exists. If it isn't already on, cPanel has a one-click
"Run AutoSSL" action.
