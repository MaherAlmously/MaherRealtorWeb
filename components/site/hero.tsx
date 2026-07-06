import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/site/reveal";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" aria-label="Introduction" className="-mt-16 bg-band pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span aria-hidden="true" className="h-0.5 w-8 bg-primary" />
                {hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {hero.support}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href={hero.ctaPrimary.href}>
                    <Phone className="size-4" />
                    {hero.ctaPrimary.label}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
                </Button>
                <a
                  href={hero.ctaTertiary.href}
                  className="group inline-flex h-10 items-center gap-1.5 px-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {hero.ctaTertiary.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="bg-foreground px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background">
                {hero.panel.title}
              </div>
              <div className="divide-y divide-border">
                {hero.panel.rows.map((row) => (
                  <a
                    key={row.href}
                    href={row.href}
                    className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-secondary/60"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                      <row.icon className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-foreground">
                        {row.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">
                        {row.description}
                      </span>
                    </span>
                    <ChevronRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                ))}
              </div>
              <Separator />
              <div className="bg-secondary/50 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {hero.panel.callLabel}
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-1 block font-serif text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
