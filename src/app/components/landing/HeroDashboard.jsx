"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BrandIcon } from "./icons";

// Scroll-linked dashboard, after Promora's Home V1 hero: it sits at 68% scale
// with the page at the top and grows to full size over the first 400px of
// scroll, easing toward its target each frame rather than snapping. The tiles
// ride its top corners and spread outward as it grows.
const MIN_SCALE = 0.68;
const SCROLL_RANGE = 400;
const EASE = 0.12;
const ORIGIN_Y = 190; // px; the centre of the 380px visible window

// dx/dy: tile centre relative to the dashboard's left or right edge and top
const TILES = [
  { icon: "instagram", side: "left", dx: 0, dy: -18, rotate: -16, iconSize: 30 },
  { icon: "linkedin", side: "left", dx: 17, dy: 58, rotate: 12, iconSize: 26 },
  { icon: "x", side: "left", dx: -6, dy: 140, rotate: -8, iconSize: 22 },
  { icon: "facebook", side: "right", dx: -66, dy: -46, rotate: 12, iconSize: 30 },
  { icon: "tiktok", side: "right", dx: -28, dy: 68, rotate: -17, iconSize: 26 },
  { icon: "youtube", side: "right", dx: -2, dy: 150, rotate: 8, iconSize: 28 },
];

export default function HeroDashboard() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--s", "1");
      return;
    }

    const target = () => MIN_SCALE + (1 - MIN_SCALE) * Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE));
    let current = MIN_SCALE * 0.88; // starts a touch smaller and settles in on load
    let frame = null;

    const tick = () => {
      const goal = target();
      current += (goal - current) * EASE;
      if (Math.abs(goal - current) < 0.0005) current = goal;
      el.style.setProperty("--s", current.toFixed(4));
      frame = current === goal ? null : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    kick();
    window.addEventListener("scroll", kick, { passive: true });
    return () => {
      window.removeEventListener("scroll", kick);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="relative z-[2] mx-auto max-w-[1180px]" style={{ "--s": MIN_SCALE }}>
      <div className="h-[380px] overflow-hidden max-sm:h-[220px]">
        <div
          className="rounded-t-[22px] border border-white/90 bg-white/60 px-2.5 pt-2.5 shadow-[0_-20px_80px_rgba(20,71,230,.2)] will-change-transform"
          style={{ transform: "scale(var(--s))", transformOrigin: `50% ${ORIGIN_Y}px` }}
        >
          <div className="flex gap-1.5 px-1 pt-0.5 pb-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]" />
          </div>
          <Image
            src="/images/landing/dashboard-home.jpg"
            alt="Creativeklux Home dashboard with followers, engagement, campaigns and Waiting for approval"
            width={2200}
            height={1543}
            priority
            sizes="(max-width: 1200px) 100vw, 1180px"
            className="block w-full rounded-t-xl"
          />
        </div>
      </div>

      {TILES.map((t) => {
        const edge = t.side === "left" ? "50% - 50% * var(--s)" : "50% + 50% * var(--s)";
        return (
          <span
            key={t.icon}
            className="absolute flex h-16 w-16 items-center justify-center rounded-[18px] bg-white shadow-[0_18px_40px_rgba(20,40,90,.16)] max-[860px]:hidden"
            style={{
              left: `calc(${edge} + ${t.dx}px)`,
              top: `calc(${ORIGIN_Y}px * (1 - var(--s)) + ${t.dy}px)`,
              translate: "-50% -50%",
              rotate: `${t.rotate}deg`,
            }}
          >
            <BrandIcon name={t.icon} size={t.iconSize} />
          </span>
        );
      })}
    </div>
  );
}
