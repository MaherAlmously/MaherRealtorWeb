"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DecorativeBackdrop } from "@/components/site/decorative-backdrop";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Tab = "buy" | "sell" | "rent" | "lease";

const tabLabels: Record<Tab, string> = {
  buy: "Buying",
  sell: "Selling",
  rent: "Renting",
  lease: "Leasing",
};

export function BuySell() {
  const { buying, selling, renting, leasing } = siteConfig;
  const [tab, setTab] = useState<Tab>("buy");

  useEffect(() => {
    const applyHash = () => {
      if (window.location.hash === "#sell") setTab("sell");
      else if (window.location.hash === "#buy") setTab("buy");
      else if (window.location.hash === "#rent") setTab("rent");
      else if (window.location.hash === "#lease") setTab("lease");
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const active =
    tab === "buy" ? buying : tab === "sell" ? selling : tab === "rent" ? renting : leasing;
  const activePanel = tab === "lease" ? leasing.panel : renting.panel;

  return (
    <Section
      id="buy"
      labelledBy="buy-sell-title"
      className="bg-band"
      backdrop={<DecorativeBackdrop />}
    >
      <span id="sell" className="absolute -mt-24" aria-hidden="true" />
      <span id="rent" className="absolute -mt-24" aria-hidden="true" />
      <span id="lease" className="absolute -mt-24" aria-hidden="true" />
      <SectionHeading
        eyebrow="Buy, sell, rent, or lease"
        title="Work With Me"
        titleId="buy-sell-title"
        lead="Whichever side of the table you're on, here's how the process runs."
      />

      <div
        role="tablist"
        aria-label="Buying, selling, renting, or leasing"
        className="mt-9 inline-flex flex-wrap rounded-lg border border-border bg-secondary/40 p-1"
      >
        {(["buy", "sell", "rent", "lease"] as const).map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => setTab(value)}
            className={cn(
              "rounded-md px-5 py-2 text-sm font-semibold transition-colors",
              tab === value
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tabLabels[value]}
          </button>
        ))}
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {active.lead}
      </p>

      <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {active.steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.05} className="border-t border-border pt-5">
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-serif text-lg font-semibold text-primary"
                >
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      {tab === "buy" ? (
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-lg border border-border bg-band p-6 sm:flex-row sm:items-center sm:p-7">
            <p className="max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base">
              {buying.cta.note}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={siteConfig.smsHref}>
                  <MessageSquareText className="size-4" />
                  {buying.cta.textLabel}
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
      ) : null}

      {tab === "rent" || tab === "lease" ? (
        <Reveal delay={0.1}>
          <div
            id="rent-info"
            className="relative mt-12 scroll-mt-24 overflow-hidden rounded-xl bg-panel px-7 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12"
          >
            <DecorativeBackdrop variant="dark" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {activePanel.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
                {activePanel.copy}
              </p>
            </div>
            <div className="relative z-10 mt-7 flex flex-wrap items-center gap-3 lg:mt-0 lg:shrink-0">
              <Button asChild size="lg">
                <a href={siteConfig.smsHref}>
                  <MessageSquareText className="size-4" />
                  {activePanel.textLabel}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10 hover:text-white"
              >
                <a href="#contact">{activePanel.reviewLabel}</a>
              </Button>
            </div>
          </div>
        </Reveal>
      ) : null}
    </Section>
  );
}
