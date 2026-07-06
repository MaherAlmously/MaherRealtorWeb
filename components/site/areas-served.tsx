import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function AreasServed() {
  const { areas } = siteConfig;

  return (
    <Section id="areas" labelledBy="areas-title">
      <SectionHeading
        eyebrow={areas.eyebrow}
        title={areas.title}
        titleId="areas-title"
        lead={areas.lead}
      />
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {areas.list.map((area, index) => (
          <li key={area}>
            <Reveal
              delay={index * 0.04}
              className="flex h-full items-center gap-3 rounded-md border border-border bg-card px-4 py-3.5"
            >
              <MapPin aria-hidden="true" className="size-4 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{area}</span>
            </Reveal>
          </li>
        ))}
        <li>
          <Reveal
            delay={areas.list.length * 0.04}
            className="h-full"
          >
            <a
              href="#contact"
              className="group flex h-full items-center gap-3 rounded-md border border-dashed border-border bg-transparent px-4 py-3.5 transition-colors hover:border-primary/50"
            >
              <ArrowRight
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary"
              />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                Somewhere else? Ask Maher.
              </span>
            </a>
          </Reveal>
        </li>
      </ul>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {areas.closer}
        </p>
      </Reveal>
    </Section>
  );
}
