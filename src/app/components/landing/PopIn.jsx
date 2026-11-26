"use client";

import { useEffect, useRef } from "react";

// Grows from nothing to full size with a slight overshoot the first time it
// scrolls into the lower-middle of the screen, like the small overlay cards in
// Promora Home V1's feature section. Styles live in globals.css (.lp-pop).
export default function PopIn({ className = "", style, delay = 0, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = "";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -25% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lp-pop ${className}`} style={{ ...style, transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
