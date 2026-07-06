import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function Selling() {
  const { selling, homeValue } = siteConfig;

  return (
    <Section id="sell" labelledBy="selling-title" className="bg-band">
      <SectionHeading
        eyebrow={selling.eyebrow}
        title={selling.title}
        titleId="selling-title"
        lead={selling.lead}
      />
      <ol className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {selling.steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.05} className="border-t border-border pt-5">
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-serif text-xl font-semibold text-primary"
                >
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div
          id="home-value"
          className="mt-16 scroll-mt-24 rounded-xl bg-panel px-7 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12"
        >
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {homeValue.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
              {homeValue.copy}
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-0 lg:shrink-0">
            <Button asChild size="lg">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                {homeValue.callLabel}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#contact">{homeValue.reviewLabel}</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
