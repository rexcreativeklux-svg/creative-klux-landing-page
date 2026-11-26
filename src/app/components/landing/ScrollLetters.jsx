"use client";

import { useEffect, useRef } from "react";

// Letters fade from invisible to solid, left to right, as the text scrolls up
// the screen: it starts when the text's top reaches 95% of the viewport height
// and finishes at 35%. Mirrors Promora Home V1's "About" reveal.
const START = 0.95;
const END = 0.35;
const SOFTNESS = 8; // letters fading at once along the leading edge

export default function ScrollLetters({ text, as: Tag = "p", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = [...el.querySelectorAll("[data-l]")];
    const n = letters.length;
    let frame = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, (vh * START - top) / (vh * (START - END))));
      const head = p * (n + SOFTNESS);
      letters.forEach((l, i) => {
        l.style.opacity = Math.min(1, Math.max(0, (head - i) / SOFTNESS)).toFixed(2);
      });
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const words = text.split(" ");
  return (
    <Tag ref={ref} aria-label={text} className={className}>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">
              {[...word].map((ch, c) => (
                <span key={c} data-l="">
                  {ch}
                </span>
              ))}
            </span>
            {w < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </Tag>
  );
}
