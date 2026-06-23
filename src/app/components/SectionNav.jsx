"use client";

import React, { useEffect, useRef, useState } from "react";
import { Megaphone, Share2, Palette, Wand2 } from "lucide-react";

// id must match an element id rendered on the page (see CreativesSection / page.js)
const TABS = [
  { id: "ad-creatives", label: "Ad Creation", Icon: Megaphone },
  { id: "social-content", label: "Social Content Creation", Icon: Share2 },
  { id: "brand-design", label: "Brand Design", Icon: Palette },
  { id: "magic-studio", label: "Ai Tools", Icon: Wand2 },
];

// Height of header (64) + this bar — sections scroll to just below both.
const SCROLL_OFFSET = 130;

// True document Y of an element via offsetTop (layout position). Unlike
// getBoundingClientRect, this is NOT distorted when the element is a pinned
// `position: sticky` card — which the creative feature cards are. Using the
// clamped rect is what made clicking a tab feel "stuck".
function getDocTop(el) {
  let y = 0;
  let node = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent;
  }
  return y;
}

export default function SectionNav() {
  const [active, setActive] = useState(TABS[0].id);
  const animRef = useRef(0);

  // Scroll-spy: the active tab is the last section whose top has passed the bars.
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + SCROLL_OFFSET + 1;
      let current = TABS[0].id;
      for (const { id } of TABS) {
        const el = document.getElementById(id);
        if (el && getDocTop(el) <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Custom rAF scroll. Re-reads the target every frame so it survives the
  // layout shifts / sticky re-pinning that were interrupting the native smooth
  // scroll (the "have to click multiple times" bug), and drives the scroll
  // itself so it always reaches the destination.
  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    cancelAnimationFrame(animRef.current);
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 500;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const target = getDocTop(el) - SCROLL_OFFSET; // recomputed each frame
      const t = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, start + (target - start) * easeOutCubic(t));
      if (t < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        window.scrollTo(0, getDocTop(el) - SCROLL_OFFSET); // exact final snap
      }
    };
    animRef.current = requestAnimationFrame(step);
  };

  return (
    <nav className="sticky top-[92px] lg:top-[120px] z-40 bg-[#0b1437]/95 backdrop-blur-md border-y border-white/10">
      <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex items-center gap-1 px-4 w-max mx-auto">
        {TABS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id} className="shrink-0">
              <button
                onClick={() => go(id)}
                className={`relative flex items-center gap-2 px-4 py-4 text-sm whitespace-nowrap transition-colors duration-150 ${
                  isActive
                    ? "text-white"
                    : "text-white/55 hover:text-white/90"
                }`}
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-blue-400" : "text-white/45"}
                />
                {label}
                {isActive && (
                  <span className="absolute left-3 right-3 bottom-0 h-0.5 rounded-full bg-blue-500" />
                )}
              </button>
            </li>
          );
        })}
        </ul>
      </div>
    </nav>
  );
}
