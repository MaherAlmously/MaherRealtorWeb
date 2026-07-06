import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { footer } = siteConfig;
  const year = new Date().getFullYear();
  const complianceLine = [footer.compliance.brokerage, footer.compliance.license]
    .filter(Boolean)
    .join(" · ");

  return (
    <footer className="bg-panel text-stone-400">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
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
            <p className="mt-4 text-sm leading-relaxed">{footer.serviceLine}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {complianceLine ? <p>{complianceLine}</p> : null}
            <p>{footer.equalHousing}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
