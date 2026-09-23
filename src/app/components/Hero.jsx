"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CircleCheck, Play } from "lucide-react";

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
//
// A card is a still by default; add `type: "video"` to play a clip in the same
// slot. Video cards take the identical crop/counter-scale treatment — the only
// difference is the element inside the box.
//
// The 47 cards are served from the Klux gallery CDN, so assets.scraive.com has to
// stay in next.config.mjs `images.remotePatterns` or every <Image> here 400s.
//
// Videos are NOT autoplayed and carry preload="none". Every copy of the strip
// mounts its own <video>, so the 19 clips below cost COPIES x 19 = 38 elements;
// letting those all autoplay would mean 38 concurrent downloads and decodes for
// the three or four clips actually on screen. Instead the rAF loop plays a clip
// when its card enters the viewport and pauses it on the way out — see the
// `onScreen` block in frame(). That also means the source list's ordering matters:
// the clips are spread evenly through the stills (no two are ever adjacent), so
// the visible window holds at most two or three at a time rather than a solid
// block of video.
const STRIP = [
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/9dfc83bf-9ebc-4549-9d00-4773d1df26fa.webp",
    alt: "Brewy cold brew coffee can with ice and a coffee splash",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/7640f5b8-bf19-4f25-969c-1c39183152b2.mp4",
    alt: "Orange soda can and orange slices on pink",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/49536051-6bb4-4d61-9316-5d069586f197.webp",
    alt: "Zestivo Orange Delight juice bottle with fresh oranges",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/c0a864d2-7f62-4fc5-9f97-9dc7156ebbc0.webp",
    alt: "Frutiva Berry Blast bottle bursting out of mixed berries",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/b4cd40a5-beb9-4ba0-b384-9b3593a55e5c.mp4",
    alt: "Pale citrus soda can on a yellow set",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/7652dcb7-a601-46fc-9208-4b1b0518d388.webp",
    alt: "Zevina tropical pineapple juice bottle with pineapple and ice",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/755c0967-7d17-49d2-adf0-96e7b210fb02.mp4",
    alt: "Orange soda can in swirling ice water",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/80bd0935-dff6-40e3-9294-c23eeb49780e.webp",
    alt: "Nuvora mixed berry juice bottle on magenta",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/ca347dca-2fde-4289-8ac2-0c0add9c91e6.webp",
    alt: "Mazza mango milkshake can with mango cubes",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/a9895403-5ec4-44c2-b6bf-5057dd5fc786.mp4",
    alt: "Perfume bottle amid a watermelon and kiwi splash",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/952e7ad1-5b77-42c8-8a9e-ab104c98e342.webp",
    alt: "Tropic Burst mango lime can in a citrus splash",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/58f9a6a2-e989-4d4d-a4e3-fe3f8114c33b.mp4",
    alt: "Fresh Juice mango can among mangoes and oranges",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/3aae24b3-c96b-4fde-bc0e-e561b681851b.webp",
    alt: "Mango energy drink can on a split red and yellow backdrop",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/a4c25789-b22c-4159-9b10-590b213dd7b7.webp",
    alt: "Origin Juice lemon drink can with limes and mint",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/fe3b60e9-463a-4819-b8b6-08cd2304123d.mp4",
    alt: "Orange slices in close-up on white",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/c8ca42de-4c04-48ff-9287-2fb203a0bb9c.webp",
    alt: "Popping Boba strawberry drink can with berries",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/3ba89507-b172-43c4-8e06-dead1f8753fa.mp4",
    alt: "Green soda can with a nutrition facts panel",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/92050f04-3fcd-456f-b209-ce613d7e1298.webp",
    alt: "Mango juice bottle against an Energy backdrop",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/29ab3d60-a5db-420c-bf89-143787c32172.webp",
    alt: "Sesla orange soda can with ice and orange slices",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/d6c277f2-2b3d-439d-acec-6a043f9330e0.mp4",
    alt: "Crystal perfume bottle under falling water",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/54a5e06f-d2b7-4957-a8da-0caab1782677.webp",
    alt: "Cranberry fruit drink can in a Fresh Drinks layout",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/db223cf5-eaf8-466a-850d-029903eae3cb.mp4",
    alt: "Amber perfume bottle with peach halves",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/529f885d-c766-449c-b190-c03704c3bc58.webp",
    alt: "Sweet Splash guava juice can with fresh guava",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/35a5581b-baa7-414b-9ee8-7cfe12fa9726.webp",
    alt: "Cold coffee can on a neutral studio set",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/252742e8-d04f-4845-9b84-fb8014263ed5.mp4",
    alt: "Hand reaching for a Pricklee cactus water can",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/cbdd1816-0fab-4073-ad3c-5cdde54c4cac.webp",
    alt: "Verdant niacinamide serum bottle with guava",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/b3b91a62-d985-4b9b-b643-3dbd2309b01d.mp4",
    alt: "Dark perfume bottle lit red on wet black",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/28cd4751-f284-4fd4-b401-be7e55d63b9d.webp",
    alt: "Aquine serum bottle on blue with a water splash",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/359fc047-4cbb-48ae-b0fc-b305713d2814.mp4",
    alt: "Light moving across a deep red backdrop",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/3b45ac8e-28f1-4440-bb7c-d692b6c2d2cc.webp",
    alt: "Mango Bliss protein smoothie glass",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/76efb58b-71d4-4585-abfe-0019dd0b6027.webp",
    alt: "Cica facial serum dropper bottle with limes and mint",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/4999570b-ac06-4b69-ac11-1f6e0aadff3a.mp4",
    alt: "Green olives tumbling on a pale set",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/ca236c16-d322-4d7a-9c43-42d0407e0182.webp",
    alt: "Flying Embers Mango Tango hard kombucha can",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/0e221970-80ef-4684-a424-3be6a5afd46c.mp4",
    alt: "Watermelon-flavoured can with cut-out graphics",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/1e47888d-843e-4da1-8864-885677862d7e.webp",
    alt: "Kinzo can poolside with sunglasses and citrus",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/a8b1bc24-f70b-481d-afda-750aa7f2f46d.webp",
    alt: "Lemon Spritz bottle poolside",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/df7eca10-b666-45ce-81dd-3d45d77ea860.mp4",
    alt: "Minty can on dark green",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/a7c13b1b-e3be-4949-bcc7-ab3824fdb564.webp",
    alt: "Dark berry drink splashing in a glass with strawberries",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/bbdf679e-892d-445e-812f-a8df6dfbaa20.mp4",
    alt: "Frosted can floating on a pale ground",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/ecd48208-91cb-47a1-8121-d5382bf34c7e.webp",
    alt: "Mojo cola can in a strawberry splash",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/22e74033-27e9-474d-86ce-479bbb4bb474.webp",
    alt: "Strawberry soda can with fresh strawberries",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/7d5af05d-7bb3-4e1a-b8d6-15943d441923.mp4",
    alt: "Tropix tropical fruit can",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/30a82ba1-5757-4fc4-a794-128b7d3f7df3.webp",
    alt: "Orange juice can with orange slices on green",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/4ba4938f-8df1-4b8e-ae6b-39b644f29c85.mp4",
    alt: "Close-up of a teal can top",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/45041494-23e5-4cc3-a51d-cf82c1ea3ad9.webp",
    alt: "Grafique can in a swirl of yellow and orange",
  },
  {
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/images/4fa6dcc8-31dc-417a-8be2-2db99dd1924f.webp",
    alt: "Classy Glasses sunglasses campaign",
  },
  {
    type: "video",
    src: "https://assets.scraive.com/scraive/workspaces/36/gallery/videos/44b5f997-67a0-4926-a325-a3e432b88f75.mp4",
    alt: "Hand reaching for a Pricklee cactus water can on yellow",
  },
];

// Enough duplicates that the loop never shows a gap. The track scrolls by one
// full set before repeating, so it has to stay at least a set PLUS a viewport
// wide: (COPIES - 1) * setWidth >= viewport. A set is roughly STRIP.length x the
// ~210px card pitch, so once the strip itself out-measures any real display one
// spare copy covers it — and mounting a third would only add cards that are
// never on screen. Short strips still need three.
const COPIES = STRIP.length * 210 >= 4000 ? 2 : 3;
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
        video: el.querySelector("video"),
        playing: false,
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

    // Reduced motion freezes the strip, so nothing ever scrolls into view and the
    // play-on-enter path below never fires — which would leave every clip a blank
    // grey box. Pull one frame of each instead and stop there: the cards show
    // artwork, and nothing moves.
    if (reduceMotion) {
      for (const v of wrap.querySelectorAll("video")) {
        v.preload = "metadata";
        v.load();
      }
    }

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
        const raw = (card.center - offset - half) / half;

        // Clips load and run only while their card is on screen. This has to sit
        // ABOVE the cull below, or a card that scrolls out never gets the pause and
        // every clip the strip has ever shown keeps decoding forever. Toggling on a
        // stored flag keeps it to one boolean compare per card per frame; play()
        // rejects if the element is torn down mid-promise, hence the empty catch.
        if (card.video && !reduceMotion) {
          const onScreen = raw > -1.1 && raw < 1.1;
          if (onScreen !== card.playing) {
            card.playing = onScreen;
            if (onScreen) card.video.play().catch(() => {});
            else card.video.pause();
          }
        }

        // Anything past the edge is clipped away by the wrapper, and its transform
        // is pinned at the clamp anyway — restyling it every frame buys nothing.
        // The 1.5 margin is half a viewport of slack, comfortably more than a card
        // width, so a card is always restyled well before it scrolls back into view.
        if (raw < -1.5 || raw > 1.5) continue;
        const t = Math.max(-1, Math.min(1, raw));
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
      // The loop is what pauses clips, so on unmount it stops running before the
      // on-screen ones ever get their pause. Left alone they keep downloading.
      for (const card of cards) card.video?.pause();
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
                  className="relative h-full w-full bg-[#23233A]"
                  style={{ transform: `skewX(${SKEW}deg) scale(${ZOOM})` }}
                >
                  {card.type === "video" ? (
                    // muted + playsInline are what keep programmatic play() legal on
                    // iOS. No autoPlay and preload="none" on purpose: the rAF loop
                    // starts each clip as its card scrolls in, so of the 38 <video>
                    // elements the strip mounts only the two or three on screen ever
                    // touch the network. Autoplay here would fetch all 38 at once.
                    <video
                      src={card.src}
                      aria-label={copy === 0 ? card.alt : undefined}
                      aria-hidden={copy > 0 || undefined}
                      muted
                      loop
                      playsInline
                      preload="none"
                      tabIndex={-1}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={card.src}
                      alt={copy === 0 ? card.alt : ""}
                      fill
                      sizes="150px"
                      priority={copy === 0 && i < 6}
                      className="object-cover"
                    />
                  )}
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
  // Chalk on the dark canvas, not pen on paper — the old #26262A ink disappeared
  // once the canvas went to #1a1a2e.
  stroke: "#DCDCEA",
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
    <div className="pointer-events-none absolute bottom-full right-[3%] hidden w-[210px] translate-y-[6px] text-left text-[#E8E8F2] lg:block xl:right-[5%]">
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
      className="pointer-events-none absolute right-full top-[62%] mr-3 hidden h-9 w-[38px] -translate-y-1/2 text-[#E8E8F2] lg:block xl:mr-6"
    >
      {/* Bare arrowhead — two strokes converging up-right, no shaft. The reference
          uses this as a glance-mark next to the headline, not a drawn arrow. */}
      <path d="M3 22C14 20 26 14 36 5" {...ink} />
      <path d="M17 36C22 27 29 15 36 5" {...ink} />
    </svg>
  );
}

// Hung off the LEFT EDGE of the primary CTA (right-full on a wrapper that hugs
// the button), not off a fixed offset from the CTA cluster's centre. That centre
// moves with the second button and with the row/column switch at sm, which is how
// the arrow ended up striking through "Get Started" at tablet widths.
function FreeNote() {
  return (
    <div className="pointer-events-none absolute -bottom-3 right-full hidden w-[114px] translate-x-[10px] text-left text-[#E8E8F2] sm:block">
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

// ─── "Create for" platform row ────────────────────────────────────────────────
// The surfaces Klux exports to, sat under the CTA. Each glyph keeps its own brand
// colour where that colour is what the mark actually is (YouTube red, Instagram
// magenta, Facebook blue) and goes white where the real mark IS white (TikTok,
// Threads, X). Flat brand colour rather than the full gradient lockups: six
// gradients here would out-shout the coral CTA sitting directly above them.
// `href` is deliberately empty for now. An <a> with no href still matches the
// `a` selector CursorFollower tests against, so the trailing dot merges away over
// a tile exactly as it does over the CTAs — filling these in later changes
// nothing else about the row.
const PLATFORMS = [
  {
    name: "YouTube",
    href: "",
    tint: "#FF0000",
    glyph: (
      <>
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        />
        <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "",
    tint: "#FFFFFF",
    glyph: (
      <path
        fill="currentColor"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
      />
    ),
  },
  {
    name: "Instagram",
    href: "",
    tint: "#E1306C",
    glyph: (
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    ),
  },
  {
    name: "Facebook",
    href: "",
    tint: "#1877F2",
    glyph: (
      // The mark's "f" is a knockout in the path, so it takes whatever is painted
      // UNDER it. On this tile that would be near-black; the white disc behind
      // gives the letter back its own colour.
      <>
        <circle cx="12" cy="12" r="11.5" fill="#fff" />
        <path
          fill="currentColor"
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </>
    ),
  },
  {
    name: "Threads",
    href: "",
    tint: "#FFFFFF",
    glyph: (
      <path
        fill="currentColor"
        d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.36-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.242 7.828c.98-1.454 2.568-2.256 4.474-2.256h.043c3.187.02 5.084 1.973 5.273 5.376.108.046.216.094.32.143 1.474.693 2.552 1.744 3.118 3.04.79 1.808.863 4.755-1.535 7.103-1.836 1.794-4.06 2.604-7.11 2.626h-.011zm1.844-11.51c-.284 0-.57.007-.862.023-1.835.104-2.98.946-2.914 2.15.069 1.26 1.459 1.845 2.795 1.774 1.228-.067 2.83-.545 3.098-3.722a10.913 10.913 0 0 0-2.117-.224z"
      />
    ),
  },
  {
    name: "X",
    href: "",
    tint: "#FFFFFF",
    glyph: (
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    ),
  },
];

function CreateForRow() {
  return (
    <div className="mt-7 flex animate-[fadeRise_0.6s_ease_0.22s_both] flex-wrap items-center justify-center gap-x-3.5 gap-y-3 sm:mt-8">
      <p className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A8A8C0]">
        <CircleCheck size={17} className="shrink-0 text-[#22C55E]" />
        Create for
      </p>
      <ul className="flex list-none items-center gap-2">
        {PLATFORMS.map((p) => (
          <li key={p.name}>
            {/* `--tint` carries the brand colour into the hover border and glow;
                writing those as Tailwind classes off `p.tint` would mean building
                class names at runtime, which the compiler never sees. */}
            <a
              href={p.href || undefined}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              title={p.name}
              aria-label={`Create for ${p.name}`}
              style={{ color: p.tint, "--tint": p.tint }}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-[11px] border border-white/10 bg-white/6 transition-all duration-150 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--tint)_55%,transparent)] hover:bg-white/10 hover:shadow-[0_10px_20px_-12px_var(--tint)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
                {p.glyph}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      {/* Frame — traced off cr.png, which stacks four layers between the page edge
          and the card rather than one flat margin. Reading a pixel column down
          through its top edge: a flat field, a soft dark halo, a ~6px band of the
          SAME hue but deeper, a ~3px near-white hairline, then the card. That's what
          the three nested boxes below rebuild, in Klux colours.
            FIELD  soft tints of the palette — the airy outer wash
            RING   the same gradient at full strength, ~6px
            HAIR   a white ring that lifts the ring off the card
          The stops trace the live site's own frame, sampled off "klux like this":
          deep brand blue at the top-left (#1340D3/#1447E6 — the identity colour),
          lightening across the top, then violet → mauve → pink → orange → peach down
          the right-hand side. One SATURATED band, not the pale-field-plus-ring
          arrangement cr.png uses: at this width there is no room for two tones, and
          the sampled pixels show a single strength throughout.
          Widths per side, band + 3px hairline: 9/13px, sm 12/18px — sides thinner
          than top and bottom, exactly as measured (11 vs 17-19). The canvas
          min-height is derived from the vertical pair. */}
      <section
        className="px-[7px] py-[11px] sm:px-[9px] sm:py-[15px]"
        style={{
          background:
            "linear-gradient(135deg, #1340D3 0%, #1A4CE8 12%, #4F7DF2 26%, #7D73D4 42%, #B27DAB 58%, #CE8090 68%, #E59272 82%, #E6B594 100%)",
        }}
      >
          {/* Hairline. Translucent white rather than solid: it lets the band's
              gradient through at ~30% and lands as a pale tint of whatever hue is
              behind it — the same ~3px light edge the reference has between band
              and card, and against the dark canvas it reads as a clean separator. */}
          <div className="rounded-[15px] bg-white/70 p-0.5 sm:rounded-[19px] sm:p-[3px]">
            {/* Canvas — the same ink as the pain cards in CreativeTaxSection, so the
                hero and the section below it read as one surface. */}
            <div
              data-cursor-zone
              className="relative flex min-h-[calc(100vh-26px)] flex-col overflow-hidden rounded-[13px] bg-[#1a1a2e] sm:min-h-[calc(100vh-36px)] sm:rounded-2xl"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
          {/* Barely-there brand bloom behind the copy — enough to keep the canvas
              from reading as a flat block, faint enough that it still reads as the
              card ink. Brand blue rather than amber: a warm wash on this navy goes
              muddy, where the blue just lifts the top of the canvas. */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(91,140,255,0.14) 0%, transparent 65%)",
            }}
          />

          {/* ── Copy block ── */}
          {/* 108px puts the amber pill exactly where the reference has it — measured
              at 108px below the canvas's top edge, clearing the nav by ~15px.
              The phone value is 84 rather than a scaled-down 96: narrow viewports
              wrap the headline to a fourth line, and that padding is the slack
              that keeps the platform row from dropping further below the fold.
              It still clears the mobile nav, which is the only thing above it. */}
          <div className="relative z-10 flex flex-col items-center px-5 pt-[84px] text-center sm:px-8 sm:pt-[104px] lg:pt-[108px]">
            {/* Amber pill */}
            <div className="inline-flex max-w-full animate-[fadeRise_0.6s_ease_both] items-center gap-2 rounded-full bg-[#F2C77E] px-3.5 py-[7px] text-[11.5px] font-medium text-[#3B2A11] sm:px-4 sm:text-[13px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B2A11]/60" />
              One platform. Every creative you&apos;ll ever need.
            </div>

            {/* Headline — locked to two lines from sm up. The wrapper hugs the
                h1, giving the tick a real left edge to hang off.
                The clamp tops out lower than a short headline could carry: this
                one runs ~35 characters on its longest line, so 80px would push
                past the canvas at anything under a very wide display. The 26px
                FLOOR is the other end of the same problem: the phone layout has
                no <br /> to lean on, and anything larger wraps this sentence to
                four lines, which pushes the platform row a further 30px below
                the fold. 26px is the size at which "social posts on autopilot"
                still fits one line inside the 336px phone canvas. */}
            <div className="relative mt-6">
              <h1
                className="animate-[fadeRise_0.6s_ease_0.05s_both] text-[clamp(26px,4vw,62px)] font-bold leading-[1.08] tracking-[-0.035em] text-[#F7F7FB]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Create, publish and manage your ads
                <br className="hidden sm:block" />{" "}
                <span className="sm:whitespace-nowrap">
                  and social posts on autopilot
                </span>
              </h1>
              <HeadlineTick />
            </div>

            {/* Sub */}
            {/* #C2C2D8 — the same body grey the pain cards use, and 9.7:1 against
                the #1a1a2e canvas. The card section's dimmer #6b6b8a only clears
                3.5:1 here, which is why the sub does not borrow that one. */}
            <p className="mt-5 max-w-[600px] animate-[fadeRise_0.6s_ease_0.12s_both] text-[14.5px] font-normal leading-[1.68] text-[#C2C2D8] sm:text-[15.5px]">
              Brand-aware AI designs, writes and publishes across every channel
              you connect — brief to live post in minutes, no designer needed.
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
            <div className="flex flex-col items-center">
              {/* The buttons and their two annotations are their own relative box:
                  FreeNote hangs off the BOTTOM of whatever contains it, so with the
                  platform row inside as well its arrow would drop past the buttons
                  it is pointing at. */}
              <div className="relative flex flex-col items-center">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                  {/* Wrapper exists so FreeNote has the button's own edges to hang
                      off, rather than the cluster's shifting centre. */}
                  <div className="relative">
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
                    <FreeNote />
                  </div>

                  <button
                    onClick={() => scrollToId("see-in-action")}
                    className="group inline-flex cursor-pointer items-center gap-2.5 bg-transparent text-[14px] font-medium text-[#C2C2D8] transition-colors hover:text-white"
                  >
                    {/* A lifted tint of the canvas rather than a solid fill — enough
                        to read as a disc without stamping a bright dot next to the
                        coral CTA. The glyph rides on currentColor, so it tracks the
                        label's 9.7:1. */}
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/8 transition-transform duration-150 group-hover:scale-105">
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
              </div>

              <CreateForRow />
            </div>
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
