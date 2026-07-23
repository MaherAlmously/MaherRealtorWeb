import Image from "next/image";
import { DecorativeBackdrop } from "@/components/site/decorative-backdrop";
import { siteConfig } from "@/lib/site-config";
import brokerLogo from "@/public/metroplex-realty-logo.png";

export function Footer() {
  const { footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-panel text-stone-400">
      <DecorativeBackdrop variant="dark" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed">
              {footer.tagline}
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-5 inline-block font-serif text-2xl font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Service area
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              Most DFW and North Texas areas.{" "}
              <a
                href="#areas"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                See the full list
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex shrink-0 items-center rounded-md bg-white px-3 py-2">
              <Image
                src={brokerLogo}
                alt={footer.brokerage.name}
                className="h-10 w-auto"
              />
            </span>
            <p className="max-w-56 text-sm leading-snug text-stone-300">
              {footer.brokerage.line}
            </p>
          </div>
          <ul className="space-y-2">
            {footer.legal.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-300 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{footer.equalHousing}</p>
        </div>

        <div className="mt-3 text-xs text-stone-500">
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
