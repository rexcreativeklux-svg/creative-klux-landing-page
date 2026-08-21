"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

// Smooth-scroll to an in-page section, accounting for the fixed header + nav bar.
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─── Creative carousel ────────────────────────────────────────────────────────
// Real Klux output on an endless marquee. Each card is a skewed parallelogram
// whose image is counter-skewed (and over-scaled) so the artwork stays upright.
// Every card keeps the same width and the same horizontal midline; only its
// HEIGHT changes with position — shortest dead centre, tallest at either edge —
// so the row's top edge bows down through the middle while the bottom edge bows
// up: one wide "C" on its side, and its mirror. Height is applied as scaleY on
// the clipping box while the artwork inside is counter-scaled by 1/sy, so the two
// cancel to a plain uniform ZOOM: a shorter card CROPS the picture rather than
// squashing it, and the artwork holds a constant on-screen size throughout.
const STRIP = [
  { src: "/images/nine.png", alt: "Eyewear launch creative" },
  { src: "/images/imagefive.png", alt: "Beauty product ad creative" },
  { src: "/images/imagethree.png", alt: "Fashion restock social creative" },
  { src: "/images/imageone.png", alt: "Bakery promo creative" },
  { src: "/images/imageseven.png", alt: "Skincare testimonial creative" },
  { src: "/images/fifteen.png", alt: "Beverage campaign creative" },
  { src: "/images/seven.png", alt: "Handbag sale creative" },
  { src: "/images/five.png", alt: "Perfume launch creative" },
  { src: "/images/twelve.png", alt: "Consumer electronics creative" },
  { src: "/images/imagetwo.png", alt: "Snack bar campaign creative" },
];

const COPIES = 3; // enough duplicates that the loop never shows a gap
const SPEED = 42; // px per second
const HEIGHT_CENTER = 0.52; // shortest card, dead centre — the depth of the curve
const HEIGHT_EDGE = 1; // full height at either edge of the strip
// A straight V: height falls off linearly with distance from centre, so every card
// differs from its neighbours. Where the falloff TOPS OUT is computed per layout
// rather than fixed — see `reach` in measure().
const CURVE_EASE = 1;
// Gap between cards, as a share of card width. A starting point only: measure()
// nudges it so the pitch divides the strip a whole number of times.
const GAP_RATIO = 0.23;
// NB: the U here is a curve in DEPTH, not in height — the row bends away from the
// viewer, edges nearest and the middle furthest off. The taper alone carries that:
// a card reads as receding because it shrinks. So every card keeps the same
// horizontal midline. Sinking the middle ones would read as a row sagging in a
// bowl, which is the U lying on its back rather than facing out.
// Each card swings to face the centre, under its OWN perspective, so it projects
// as a trapezoid — outer edge tall, inner edge short. Without this the strip's
// outline is a staircase: height is flat across a card, then jumps at the gap.
// With it the top and bottom edges taper continuously and the V has straight sides.
// perspective() is per-card rather than set on the track on purpose — a shared
// vanishing point would also shove the outer cards sideways as they rotate.
const CARD_TURN = 26; // deg of swing at the strip's edge, 0 dead centre
const CARD_DEPTH = 600; // px; lower = stronger taper across each card
const SKEW = 4; // degrees of parallelogram lean, matching the reference
const ZOOM = 1.14; // over-scale that hides the skewed corners

function CreativeCarousel() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const pausedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let wrapWidth = 0;
    let setWidth = 0;
    let reach = 1;
    let cards = [];

    // Layout positions only — offsetLeft/offsetWidth ignore transforms, so these
    // stay valid no matter how the cards are currently scaled.
    const measure = () => {
      const els = cardRefs.current.filter(Boolean);
      if (!els.length) return;
      wrapWidth = wrap.clientWidth;

      // Tune the gap so the pitch divides the strip a WHOLE number of times. The
      // row repeats every pitch, so once the width is an exact multiple of it, the
      // left and right edges always sit at the same point in that repeat: a card
      // leaves on one side exactly as its twin arrives on the other, and a sliver
      // of background at one edge is matched by an identical one at the other.
      const cardW = els[0].offsetWidth;
      const steps = Math.max(1, Math.round(wrapWidth / (cardW * (1 + GAP_RATIO))));
      const pitch = wrapWidth / steps;
      track.style.columnGap = `${(pitch - cardW).toFixed(3)}px`;

      // Where the taper tops out. The outermost card on a side is never nearer the
      // middle than this, so clamping here means both edges always hold a
      // full-height card — the two are level however the strip happens to sit.
      const half = wrapWidth / 2 || 1;
      reach = Math.min(1, Math.max(0.45, 1 + (cardW / 2 - pitch) / half));

      // Read positions only AFTER the gap lands, or they describe the old layout.
      cards = els.map((el) => ({
        el,
        inner: el.firstElementChild,
        center: el.offsetLeft + el.offsetWidth / 2,
      }));
      setWidth = STRIP.length * pitch;
    };

    // Width changes only — measure() writes the track's gap, and reacting to the
    // relayout that causes would chase its own tail.
    let lastWidth = -1;
    const sync = () => {
      if (wrap.clientWidth === lastWidth) return;
      lastWidth = wrap.clientWidth;
      measure();
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(wrap);

    let offset = 0;
    let last = performance.now();
    let raf = 0;

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (!reduceMotion && !pausedRef.current && setWidth > 0) {
        offset = (offset + SPEED * dt) % setWidth;
      }
      track.style.transform = `translate3d(${-offset}px,0,0)`;

      const half = wrapWidth / 2 || 1;
      for (const card of cards) {
        // -1 at the left edge of the strip, 0 dead centre, 1 at the right edge.
        const t = Math.max(-1, Math.min(1, (card.center - offset - half) / half));
        // 0 dead centre → 1 at the edge, straight-line in between: every card is a
        // visibly different height from its neighbours, right out to the first one.
        const bow = Math.min(1, Math.abs(t) / reach) ** CURVE_EASE;
        const sy = HEIGHT_CENTER + (HEIGHT_EDGE - HEIGHT_CENTER) * bow;
        // scaleY about the box's centre, with no vertical offset, so the card
        // closes in evenly from top and bottom and its midline never moves. The
        // artwork inside is stretched back by the same factor, so overflow-hidden
        // CROPS it rather than squashing it — and because both scales are centred,
        // what survives the crop is the middle of the picture at every height.
        // Swing toward the centre: 0 dead centre, CARD_TURN at either edge, and
        // opposite signs either side so both halves present their outer edge.
        const turn = -CARD_TURN * t;
        card.el.style.transform =
          `perspective(${CARD_DEPTH}px) rotateY(${turn.toFixed(2)}deg) ` +
          `scaleY(${sy.toFixed(4)}) skewX(${-SKEW}deg)`;
        if (card.inner) {
          card.inner.style.transform =
            `skewX(${SKEW}deg) scaleY(${(1 / sy).toFixed(4)}) scale(${ZOOM})`;
        }
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden py-1"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-[30px] will-change-transform sm:gap-[34px] lg:gap-10"
      >
        {Array.from({ length: COPIES }).flatMap((_, copy) =>
          STRIP.map((card, i) => {
            const index = copy * STRIP.length + i;
            return (
              <div
                key={`${copy}-${card.src}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                aria-hidden={copy > 0}
                className="h-[256px] w-[130px] shrink-0 overflow-hidden rounded-[9px] sm:h-[282px] sm:w-[144px] sm:rounded-[10px] lg:h-[306px] lg:w-[158px] lg:rounded-[11px] xl:h-[328px] xl:w-[171px] xl:rounded-xl"
                style={{ transform: `skewX(${-SKEW}deg)` }}
              >
                <div
                  className="relative h-full w-full"
                  style={{ transform: `skewX(${SKEW}deg) scale(${ZOOM})` }}
                >
                  <Image
                    src={card.src}
                    alt={copy === 0 ? card.alt : ""}
                    fill
                    sizes="150px"
                    priority={copy === 0 && i < 6}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// ─── Hand-drawn annotations ───────────────────────────────────────────────────
const ink = {
  stroke: "#26262A",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
};

// Text, then arrow, then card — a stack, hung off the TOP of the carousel rather
// than positioned in the copy block above it. A percentage offset there resolves
// against the copy block's own height, which leaves the arrow floating in space;
// anchoring to the strip is what actually lets the tip land on a card.
function ElevateNote() {
  return (
    <div className="pointer-events-none absolute bottom-full right-[3%] hidden w-[210px] translate-y-[6px] text-left text-[#26262A] lg:block xl:right-[5%]">
      {/* Slanted to match the arrow's run beneath it (~11 deg down to the right),
          so the words read as resting on the line rather than crossing it. */}
      <p
        className="relative z-10 origin-left rotate-[11deg] pl-8 text-[22px] leading-[1.15]"
        style={{ fontFamily: "var(--font-caveat), cursive" }}
      >
        <span className="ml-4">Elevate</span>
        <br />
        your brand
      </p>
      {/* Traced off the reference: a fish-hook, not an L or a C. A flat run enters
          from the LEFT of the text and passes underneath it, then a rounded hairpin
          under "brand" turns the stroke back on itself and drops down-left onto the
          strip. The two curves join at (114,48) with both handles vertical, which
          is what makes the turn-back a smooth hook rather than a corner. */}
      <svg viewBox="0 0 120 96" className="mt-1 h-[94px] w-[118px]">
        <path d="M8 6C60 10 114 24 114 48C114 66 99 76 90 84" {...ink} />
        <path d="M107 81L90 84L95 68" {...ink} />
      </svg>
    </div>
  );
}

// Anchored to the headline's own left edge (right-full on a box that hugs the
// h1), not to a percentage of the copy block — the headline is centred, so a
// fixed percentage strands the tick further away the wider the viewport gets.
function HeadlineTick() {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      className="pointer-events-none absolute right-full top-[62%] mr-3 hidden h-9 w-[38px] -translate-y-1/2 text-[#26262A] lg:block xl:mr-6"
    >
      {/* Bare arrowhead — two strokes converging up-right, no shaft. The reference
          uses this as a glance-mark next to the headline, not a drawn arrow. */}
      <path d="M3 22C14 20 26 14 36 5" {...ink} />
      <path d="M17 36C22 27 29 15 36 5" {...ink} />
    </svg>
  );
}

function FreeNote() {
  return (
    <div className="pointer-events-none absolute bottom-0.5 left-1/2 hidden w-[150px] -translate-x-[236px] text-left text-[#26262A] sm:block lg:-translate-x-[282px]">
      {/* A soft L: drops down, sweeps through a wide rounded bend, then arrives
          flat at the button's left edge. The control points sit directly below the
          start and directly left of the tip, which is what keeps the turn a smooth
          arc instead of a corner. */}
      <svg viewBox="0 0 120 70" className="ml-2 h-[62px] w-[106px]">
        <path d="M12 4C6 40 55 57 100 57" {...ink} />
        <path d="M85 48L103 57L85 66" {...ink} />
      </svg>
      <p
        className="ml-1 mt-1 rotate-[20deg] text-[23px] leading-none"
        style={{ fontFamily: "var(--font-caveat), cursive" }}
      >
        It&apos;s free
      </p>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      {/* Gradient frame — warm amber falling into fresh green */}
      <section
        className="p-[10.5px] sm:p-[18.5px] lg:p-[22.5px]"
        style={{
          background:
            "linear-gradient(172deg, #EFBE74 0%, #EDC97F 14%, #DCDD8B 34%, #B6E795 56%, #96EA84 82%, #8AE97C 100%)",
        }}
      >
        {/* Cream canvas */}
        <div
          data-cursor-zone
          className="relative flex min-h-[calc(100vh-21px)] flex-col overflow-hidden rounded-[20px] bg-[#FAF6EE] sm:min-h-[calc(100vh-37px)] sm:rounded-[28px] lg:min-h-[calc(100vh-45px)] lg:rounded-[34px]"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          {/* Soft warm bloom behind the copy */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(240,196,120,0.16) 0%, transparent 65%)",
            }}
          />

          {/* ── Copy block ── */}
          <div className="relative z-10 flex flex-col items-center px-5 pt-[104px] text-center sm:px-8 sm:pt-[110px] lg:pt-[116px]">
            {/* Amber pill */}
            <div className="inline-flex max-w-full animate-[fadeRise_0.6s_ease_both] items-center gap-2 rounded-full bg-[#F2C77E] px-3.5 py-[7px] text-[11.5px] font-medium text-[#3B2A11] sm:px-4 sm:text-[13px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B2A11]/60" />
              One platform. Every creative you&apos;ll ever need.
            </div>

            {/* Headline — locked to two lines from sm up. The wrapper hugs the
                h1, giving the tick a real left edge to hang off. */}
            <div className="relative mt-6">
              <h1
                className="animate-[fadeRise_0.6s_ease_0.05s_both] text-[clamp(31px,5vw,80px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#17171B]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                AI-Powered Visuals for
                <br className="hidden sm:block" />{" "}
                <span className="sm:whitespace-nowrap">
                  Ads, Social &amp; Brand
                </span>
              </h1>
              <HeadlineTick />
            </div>

            {/* Sub */}
            <p className="mt-5 max-w-[560px] animate-[fadeRise_0.6s_ease_0.12s_both] text-[14.5px] font-normal leading-[1.68] text-[#6E6A63] sm:text-[15.5px]">
              Generate professional-quality creatives in seconds — ad graphics,
              social content, and brand visuals, without the designer wait.
            </p>

          </div>

          {/* ── Creative carousel ── */}
          {/* z-20 so the note, which hangs above this box, clears the copy block;
              it renders after the strip so its arrow paints over the cards. */}
          <div className="relative z-20 mt-2 sm:mt-3 lg:mt-4">
            <CreativeCarousel />
            <ElevateNote />
          </div>

          {/* ── CTA ── */}
          {/* items-start, not items-center: this block soaks up whatever slack the
              min-h-screen canvas has left, and centring parks the CTA in the middle
              of it — leaving the button adrift below the strip. Anchoring to the top
              keeps it a fixed gap under the cards and lets the slack fall below. */}
          <div className="relative z-10 flex flex-1 items-start justify-center px-5 pb-6 pt-5 sm:pt-6 lg:pt-6">
            <div className="relative flex flex-col items-center">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <button
                  onClick={() => scrollToId("pricing")}
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#EF6D57] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(239,109,87,0.9)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#E85E46]"
                >
                  Get Started
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>

                <button
                  onClick={() => scrollToId("see-in-action")}
                  className="group inline-flex cursor-pointer items-center gap-2.5 bg-transparent text-[14px] font-medium text-[#4B4842] transition-colors hover:text-[#17171B]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#17171B]/15 bg-white transition-transform duration-150 group-hover:scale-105">
                    <Play size={13} fill="currentColor" className="ml-0.5" />
                  </span>
                  See it in action
                </button>
              </div>

              {/* dashed hand-drawn underline beneath the primary CTA */}
              <svg
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                className="pointer-events-none mt-2 hidden h-[7px] w-[164px] sm:block sm:self-start"
              >
                <path
                  d="M2 5C34 1 70 7 104 3C138 -1 170 6 198 3"
                  fill="none"
                  stroke="#EF6D57"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeDasharray="7 7"
                  opacity="0.75"
                />
              </svg>

              <FreeNote />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
