import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export function QuickActions() {
  return (
    <Section labelledBy="quick-actions-title">
      <SectionHeading
        eyebrow="Quick actions"
        title="Four ways to start"
        titleId="quick-actions-title"
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.quickActions.map((action, index) => (
          <Reveal key={action.title} delay={index * 0.07} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                <action.icon className="size-[18px]" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {action.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {action.description}
              </p>
              <a
                href={action.href}
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                {action.ctaLabel}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
