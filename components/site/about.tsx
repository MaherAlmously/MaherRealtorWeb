import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function About() {
  const { about } = siteConfig;

  return (
    <Section id="about" labelledBy="about-title" className="bg-band">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              titleId="about-title"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <Card className="gap-3 rounded-lg shadow-sm">
            <CardHeader>
              <CardTitle className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                At a glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="divide-y divide-border">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {fact.label === "Phone" ? (
                      <a
                        href={siteConfig.phoneHref}
                        className="text-primary transition-colors hover:text-foreground"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="font-normal">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
