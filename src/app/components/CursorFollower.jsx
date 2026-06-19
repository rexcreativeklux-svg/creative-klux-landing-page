"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Global custom cursor follower.
 * - Shows a white trailing dot only inside "cursor zones" (elements marked
 *   with `data-cursor-zone`) — i.e. the dark header + hero.
 * - Hides over clickable elements (links / buttons / inputs).
 * - Morphs into a clear ring "lens" over elements marked `data-cursor="title"`
 *   (no blur, so the characters behind stay visible).
 */
export default function CursorFollower() {
  const ref = useRef(null);
  const [mode, setMode] = useState("hidden"); // "hidden" | "dot" | "lens"

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target;
      if (!t || !t.closest) {
        setMode("hidden");
        return;
      }
      if (
        t.closest("a, button, [role='button'], input, textarea, select, label")
      ) {
        setMode("hidden");
      } else if (t.closest('[data-cursor="title"]')) {
        setMode("lens");
      } else if (t.closest("[data-cursor-zone]")) {
        setMode("dot");
      } else {
        setMode("hidden");
      }
    };

    const onLeave = () => setMode("hidden");

    const tick = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[60] hidden rounded-full transition-[width,height,background-color,border-color,box-shadow,opacity] duration-200 ease-out lg:block ${
        mode === "hidden" ? "opacity-0" : "opacity-100"
      } ${
        mode === "lens"
          ? "h-16 w-16 bg-white mix-blend-difference"
          : "h-3.5 w-3.5 border border-transparent bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.55)]"
      }`}
    />
  );
}
