import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function AreasServed() {
  const { areas } = siteConfig;
  const loop = [...areas.list, ...areas.list];

  return (
    <Section id="areas" labelledBy="areas-title">
      <SectionHeading
        eyebrow={areas.eyebrow}
        title={areas.title}
        titleId="areas-title"
        lead={areas.lead}
      />
      <Reveal delay={0.06}>
        <div
          className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          role="list"
          aria-label="Cities served"
        >
          <div className="flex w-max animate-marquee gap-3">
            {loop.map((area, index) => (
              <span
                key={`${area}-${index}`}
                role="listitem"
                className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <MapPin
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-primary"
                />
                {area}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {areas.closer}{" "}
          <a href="#contact" className="font-medium text-primary underline underline-offset-4">
            Ask Maher
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
