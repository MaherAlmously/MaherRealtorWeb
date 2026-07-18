"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, MessageSquareText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import logo from "@/public/maher-logo.png";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="flex min-w-0 shrink items-center gap-2.5 font-serif font-semibold tracking-tight text-foreground"
        >
          <Image
            src={logo}
            alt=""
            aria-hidden="true"
            className="size-9 shrink-0 rounded-full sm:size-10"
            priority
          />
          <span className="hidden min-w-0 truncate text-sm sm:block md:text-base lg:text-lg">
            {siteConfig.brandLine}
          </span>
          <span className="min-w-0 truncate text-base sm:hidden">
            {siteConfig.brandLineShort}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.smsHref}>
              <MessageSquareText className="size-4" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="icon" variant="outline" className="sm:hidden">
            <a
              href={siteConfig.smsHref}
              aria-label={`Text Maher at ${siteConfig.phoneDisplay}`}
            >
              <MessageSquareText className="size-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="overflow-hidden border-t border-border bg-background md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="space-y-1 px-5 py-4">
              {siteConfig.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-2">
                <Button asChild className="flex-1">
                  <a href={siteConfig.smsHref}>
                    <MessageSquareText className="size-4" />
                    Text {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
