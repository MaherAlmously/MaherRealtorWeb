"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_DELETE = 300;

type TypewriterProps = {
  words: readonly string[];
  className?: string;
};

/**
 * Cycles through `words`, typing and deleting each in turn, forever.
 * Starts already showing the first word in full so both the initial
 * server-rendered markup and no-JS visitors get a complete sentence;
 * the animation is a purely additive enhancement after mount, and is
 * skipped entirely for prefers-reduced-motion (first word stays put).
 */
export function Typewriter({ words, className }: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (reduceMotion) return;
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPING_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words, reduceMotion]);

  return (
    <span className={cn(className)}>
      {text}
      {!reduceMotion ? (
        <span aria-hidden="true" className="ml-0.5 animate-pulse">
          |
        </span>
      ) : null}
    </span>
  );
}
