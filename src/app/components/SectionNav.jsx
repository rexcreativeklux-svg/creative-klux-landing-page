"use client";

import React, { useEffect, useState } from "react";
import {
  Sparkles,
  LayoutGrid,
  Layers,
  Image,
  Users,
  Bot,
  Tag,
  Plug,
  Images,
  Quote,
} from "lucide-react";

// id must match the wrapper id rendered in page.js
const TABS = [
  { id: "creatives", label: "Creatives", Icon: Sparkles },
  { id: "features", label: "Features", Icon: LayoutGrid },
  { id: "platform", label: "Platform", Icon: Layers },
  { id: "showcase", label: "Showcase", Icon: Image },
  { id: "for-creators", label: "For Creators", Icon: Users },
  { id: "ai-tools", label: "AI Tools", Icon: Bot },
  { id: "pricing", label: "Pricing", Icon: Tag },
  { id: "integrations", label: "Integrations", Icon: Plug },
  { id: "gallery", label: "Gallery", Icon: Images },
  { id: "testimonials", label: "Testimonials", Icon: Quote },
];

// Height of header (64) + this bar — sections scroll to just below both.
const SCROLL_OFFSET = 130;

export default function SectionNav() {
  const [active, setActive] = useState(TABS[0].id);

  // Scroll-spy: the active tab is the last section whose top has passed the bars.
  useEffect(() => {
    const onScroll = () => {
      let current = TABS[0].id;
      for (const { id } of TABS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - SCROLL_OFFSET <= 0) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-16 z-40 bg-[#0b1437]/95 backdrop-blur-md border-y border-white/10">
      <ul className="flex items-center gap-1 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
    </nav>
  );
}
