"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  CalendarClock,
  CarFront,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
  Phone,
  Ruler,
  SquareArrowOutUpRight,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Listing = (typeof siteConfig.listings.items)[number];

const FACT_ICONS = {
  Beds: BedDouble,
  Baths: Bath,
  "Sq Ft": Ruler,
  Garage: CarFront,
} as const;

function PhotoCarousel({ listing }: { listing: Listing }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = listing.photos.length;
  const indexRef = useRef(index);
  indexRef.current = index;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const timer = setInterval(() => goTo(indexRef.current + 1), 4500);
    return () => clearInterval(timer);
  }, [paused, reduceMotion, count, goTo]);

  const photo = listing.photos[index];

  return (
    <div
      className="group relative h-64 overflow-hidden sm:h-80"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent"
      />

      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-800 shadow-sm backdrop-blur">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        {listing.status}
      </span>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/55 focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/55 focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight className="size-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {listing.photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                aria-label={`Photo ${i + 1} of ${count}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/55 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  const { listings } = siteConfig;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
    >
      <PhotoCarousel listing={listing} />

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {listing.address}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {listing.cityStateZip}
            </p>
          </div>
          <p className="font-serif text-2xl font-semibold tracking-tight text-primary">
            {listing.price}
            <span className="text-sm font-medium text-muted-foreground">
              {listing.priceSuffix}
            </span>
          </p>
        </div>

        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <CalendarClock className="size-3.5 text-primary" aria-hidden="true" />
          {listing.availability}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-y border-border py-3.5">
          {listing.facts.map((fact) => {
            const Icon = FACT_ICONS[fact.label as keyof typeof FACT_ICONS];
            return (
              <li key={fact.label} className="flex items-center gap-2 text-sm">
                {Icon ? (
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                ) : null}
                <span className="font-semibold text-foreground">{fact.value}</span>
                <span className="text-muted-foreground">{fact.label}</span>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {listing.description}
        </p>

        <dl className="mt-5 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
          {listing.details.map((detail) => (
            <div
              key={detail.label}
              className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-1.5 text-sm"
            >
              <dt className="text-muted-foreground">{detail.label}</dt>
              <dd className="text-right font-medium text-foreground">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={siteConfig.smsHref}>
              <MessageSquareText className="size-4" />
              {listings.textLabel}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" />
              {listings.callLabel}
            </a>
          </Button>
          {listing.externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              {link.label}
              <SquareArrowOutUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">{listing.ctaNote}</p>
      </div>
    </motion.article>
  );
}

export function FeaturedListing() {
  const { listings } = siteConfig;

  return (
    <Section id="listing" labelledBy="listings-title">
      <SectionHeading
        eyebrow={listings.eyebrow}
        title={listings.title}
        titleId="listings-title"
        lead={listings.lead}
      />

      <div
        className={cn(
          "mt-10 grid items-start gap-8",
          listings.items.length > 1
            ? "lg:grid-cols-2"
            : "mx-auto max-w-3xl"
        )}
      >
        {listings.items.map((listing, index) => (
          <Reveal key={listing.slug} delay={index * 0.08}>
            <ListingCard listing={listing} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href={listings.openSlot.href}
          className="group mx-auto mt-8 flex max-w-3xl flex-col items-start justify-between gap-2 rounded-lg border border-border/70 bg-band px-6 py-4 transition-colors hover:border-primary/40 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {listings.openSlot.title}.
            </span>{" "}
            {listings.openSlot.copy}
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary">
            {listings.openSlot.ctaLabel}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
