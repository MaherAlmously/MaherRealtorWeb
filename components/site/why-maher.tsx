import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function WhyMaher() {
  const { why } = siteConfig;

  return (
    <Section id="why" labelledBy="why-title">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow={why.eyebrow}
            title={why.title}
            titleId="why-title"
            lead="These are the working habits clients actually notice."
          />
        </div>
        <ul className="divide-y divide-border">
          {why.points.map((point, index) => (
            <li key={point.title} className="py-6 first:pt-0 last:pb-0">
              <Reveal
                delay={index * 0.05}
                className="group -mx-3 flex gap-5 rounded-lg px-3 py-1 transition-colors duration-300 hover:bg-secondary/50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <point.icon aria-hidden="true" className="size-[18px]" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
