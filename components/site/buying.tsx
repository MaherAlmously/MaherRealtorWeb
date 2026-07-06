import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function Buying() {
  const { buying } = siteConfig;

  return (
    <Section id="buy" labelledBy="buying-title">
      <SectionHeading
        eyebrow={buying.eyebrow}
        title={buying.title}
        titleId="buying-title"
        lead={buying.lead}
      />
      <ol className="mt-12 max-w-3xl">
        {buying.steps.map((step, index) => {
          const isLast = index === buying.steps.length - 1;
          return (
            <li key={step.title}>
              <Reveal
                delay={index * 0.05}
                className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 sm:gap-x-7"
              >
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-5 top-11 w-px bg-border"
                  />
                ) : null}
                <span className="flex size-10 items-center justify-center rounded-full border border-border bg-card font-serif text-base font-semibold text-foreground">
                  {index + 1}
                </span>
                <div className={isLast ? "pb-0 pt-1.5" : "pb-10 pt-1.5"}>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-lg border border-border bg-band p-6 sm:flex-row sm:items-center sm:p-7">
          <p className="max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base">
            {buying.cta.note}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                {buying.cta.callLabel}
              </a>
            </Button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              {buying.cta.formLabel}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
