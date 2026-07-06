import { ArrowRight, Building2, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function FeaturedListings() {
  const { listings } = siteConfig;

  return (
    <Section id="listings" labelledBy="listings-title" className="bg-band">
      <SectionHeading
        eyebrow={listings.eyebrow}
        title={listings.title}
        titleId="listings-title"
      />
      <Reveal delay={0.08}>
        <div className="mt-10 rounded-lg border border-dashed border-border bg-card px-6 py-14 text-center sm:py-16">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground">
            <Building2 aria-hidden="true" className="size-5" />
          </span>
          <Badge className="mt-5 border-transparent bg-primary/10 text-primary hover:bg-primary/10">
            {listings.badge}
          </Badge>
          <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
            {listings.panelTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {listings.copy}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                {listings.callLabel}
              </a>
            </Button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              {listings.altLabel}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
