"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BrandIcon } from "./icons";
import { Pill, SectionTitle } from "./ui";
import { TESTIMONIALS } from "./content";

const FOOTER_ICONS = [
  ["facebook", 24], ["instagram", 24], ["tiktok", 22], ["x", 20], ["youtube", 26], ["pinterest", 24], ["meta", 28],
];

const GAP = 40; // px between cards; matches gap-10 on the track
const AUTOPLAY_MS = 3000;

function LongArrow({ flip }) {
  return (
    <svg width="58" height="18" viewBox="0 0 58 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M2 9h54M48 2l8 7-8 7" />
    </svg>
  );
}

// Photo when we have one, otherwise the person's initials on a soft gradient
function Avatar({ t }) {
  if (t.image) {
    return (
      <Image src={t.image} alt={t.name} width={320} height={320} className="h-[160px] w-[160px] rounded-[20px] object-cover max-sm:h-[96px] max-sm:w-[96px]" />
    );
  }
  const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <span className="font-display flex h-[160px] w-[160px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#1447e6] to-[#7c5cff] text-[56px] font-bold text-white max-sm:h-[96px] max-sm:w-[96px] max-sm:text-[34px]">
      {initials}
    </span>
  );
}

function Card({ t }) {
  return (
    <article className="flex min-h-[640px] w-[min(530px,calc(100vw-80px))] shrink-0 flex-col rounded-[32px] bg-white p-10 max-sm:min-h-[480px] max-sm:p-6">
      <div className="flex items-start justify-between">
        <Avatar t={t} />
        <span className="font-display text-[150px] leading-[.75] font-extrabold text-[#ffc6e3] max-sm:text-[100px]" aria-hidden="true">
          ”
        </span>
      </div>
      <p className="font-display mt-10 text-[36px] leading-[1.3] font-medium tracking-[-.03em] max-sm:mt-6 max-sm:text-[24px]">
        {t.quote}
      </p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-10">
        <div>
          <div className="text-[16px] font-medium">{t.name}</div>
          <div className="mt-1 text-[14px] text-[#64748b]">{t.role}</div>
        </div>
        <div className="text-right">
          <div className="flex justify-end gap-1" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path fill={i < t.rating ? "#0b1220" : "#cbd5e1"} d="M12 2.5l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.5l-6 3.3 1.3-6.7-5-4.6 6.8-.8z" />
              </svg>
            ))}
          </div>
          <div className="mt-2 text-[24px] max-sm:text-[18px]">
            {t.rating.toFixed(1)} <span className="text-[#64748b]">Ratings</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const count = TESTIMONIALS.length;

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  // Slide by one card width plus the gap; re-measure on resize
  useEffect(() => {
    const measure = () => {
      const card = trackRef.current?.firstElementChild;
      setOffset(card ? index * (card.getBoundingClientRect().width + GAP) : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  // Only slide while the section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Advance one card at a time, looping back to the first. Pauses while
  // hovered or focused, stays off for people who prefer reduced motion, and
  // restarts the countdown after every move so an arrow click isn't followed
  // by an immediate auto-slide.
  useEffect(() => {
    if (count < 2 || paused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [count, paused, inView, index, go]);

  return (
    <section ref={sectionRef} className="px-3 pt-5 pb-[50px]">
      <div className="lp-reveal mx-auto max-w-[1380px] overflow-hidden rounded-[32px] bg-[#f8f4ee] py-20 pl-[60px] max-lg:pl-10 max-sm:py-12 max-sm:pl-5">
        <div className="flex flex-wrap items-center gap-x-[60px] gap-y-10">
          <div className="min-w-0 flex-[1_1_360px] pr-5 max-w-[440px]">
            <Pill>Testimonial</Pill>
            <SectionTitle className="mt-4">What our customers say</SectionTitle>
            <p className="mt-6 max-w-[380px] text-[18px] leading-[1.7] text-[#475569]">
              Hear from brands, creators and agencies running social media and ads with Klux.
            </p>
            {count > 1 && (
              <div className="mt-[100px] flex gap-6 max-lg:mt-10">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => go(-1)}
                  className="flex h-16 w-[108px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#b6bfcf] text-[#64748b] transition-colors hover:border-[#0b1220] hover:text-[#0b1220]"
                >
                  <LongArrow flip />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => go(1)}
                  className="flex h-16 w-[108px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#b6bfcf] text-[#64748b] transition-colors hover:border-[#0b1220] hover:text-[#0b1220]"
                >
                  <LongArrow />
                </button>
              </div>
            )}
          </div>

          {/* The track runs off the container's right edge so the next card peeks in */}
          <div
            className="min-w-0 flex-[2_1_560px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carousel"
          >
            <div
              ref={trackRef}
              className="flex gap-10 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} t={t} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 mr-[60px] flex flex-wrap items-center gap-[30px] border-t border-[#e7e0d6] pt-6 max-lg:mr-10 max-sm:mr-5">
          <span className="max-w-[200px] text-[15px] font-semibold">Works with the accounts you already use</span>
          <span className="flex flex-wrap items-center gap-[26px] opacity-75">
            {FOOTER_ICONS.map(([name, size]) => (
              <BrandIcon key={name} name={name} size={size} color="#0b1220" />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
