import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-20 py-20 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId?: string;
  lead?: string;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  lead,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
          dark ? "text-stone-400" : "text-muted-foreground"
        )}
      >
        <span aria-hidden="true" className="h-0.5 w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={cn(
          "mt-4 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-stone-300" : "text-muted-foreground")}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
