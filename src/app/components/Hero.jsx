"use client";

import React from "react";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";

// ─── Fonts via next/font should be in layout.jsx. Add these there:
// import { Instrument_Serif, Geist } from 'next/font/google'
// For now we load via a global stylesheet that should be added to globals.css:
// @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap');

// Smooth-scroll to an in-page section, accounting for the fixed header + nav bar.
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {

  return (
    <>
      {/* ── Background + full page wrapper ── */}
      <div
        className="min-h-screen text-white overflow-hidden rounded-none sm:rounded-[20px] m-0 sm:m-4 lg:m-5"
        style={{
          fontFamily: "Geist, sans-serif",
          background:
            "radial-gradient(ellipse 75% 55% at 50% 120%, rgba(20,71,230,0.40) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% -10%, rgba(20,71,230,0.12) 0%, transparent 55%), #0a0b0f",
        }}
      >
        {/* ══ HERO BODY ════════════════════════════════════════════════ */}
        <div
          data-cursor-zone
          className="relative overflow-hidden min-h-screen flex flex-col"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Top — centered copy */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 lg:pt-32 text-center flex flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] font-medium text-white/70 tracking-[0.06em] uppercase mb-7 px-3.5 py-[6px] border border-white/15 rounded-full bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1447e6] shadow-[0_0_0_3px_rgba(20,71,230,0.35)] animate-pulse" />
              One platform. Every creative you&apos;ll ever need.
            </div>

            {/* Headline */}
            <h1
              data-cursor="title"
              className="text-[clamp(46px,8vw,96px)] font-normal leading-[1.02] tracking-[-0.02em] text-white lg:cursor-none"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              <span className="italic">AI-powered visuals for your </span>
              <span className="italic text-[#5b8cff]">
                ads, social, and brand
              </span>
            </h1>

            {/* Sub */}
            <p className="mt-6 text-[17px] font-light text-white/55 leading-[1.65] max-w-[620px]">
              Creativeklux generates professional-quality creatives in seconds —
              from paid ad graphics to social content and brand visuals. Built
              for business owners, marketers, agencies, and social media managers
              who want great design without the wait.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => scrollToId("pricing")}
                className="group w-full sm:w-auto justify-center flex items-center gap-2 text-[15px] font-semibold text-white bg-[#1447e6] border-none rounded-xl px-6 py-3.5 cursor-pointer transition-all duration-150 hover:bg-[#2a5cff] hover:-translate-y-px"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                Start Creating for Free
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button
                onClick={() => scrollToId("see-in-action")}
                className="group flex items-center gap-3 bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1447e6] text-white transition-transform duration-150 group-hover:scale-105">
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                </span>
                <span className="text-[15px] font-medium text-white">
                  See it in action
                </span>
              </button>
            </div>
          </div>

          {/* Bottom — phone centered, cards anchored to the phone (Appzen-style) */}
          <div className="relative z-10 mt-16 lg:mt-20 w-full flex-1 flex items-end justify-center px-6">
            {/* glow behind phone */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[32rem] rounded-full bg-[#1447e6]/30 blur-[130px] pointer-events-none" />

            {/* Phone + flanking cards (cards positioned relative to the phone) */}
            <div className="relative -mb-16 lg:-mb-32">
              <Image
                src="/images/hero-image.png"
                alt="Creative Klux app preview"
                width={400}
                height={718}
                priority
                className="relative z-10 w-[300px] sm:w-[380px] h-auto drop-shadow-2xl animate-[fadeSlideIn_0.7s_ease_both]"
              />

              {/* Left card — performance graph (top: 30px from phone top) */}
              <div className="hidden xl:flex flex-col absolute top-[120px] right-full mr-12 w-[340px] rounded-2xl border border-white/[0.13] bg-white/[0.06] backdrop-blur-xl p-7 overflow-hidden animate-[fadeSlideIn_0.6s_ease_both]">
                {/* tiny boxes texture */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="relative flex items-center justify-between mb-2">
                  <span className="text-base font-medium text-white/85">
                    Total reach
                  </span>
                  <span className="text-xs text-white/50 border border-white/10 rounded-md px-2.5 py-1">
                    Monthly
                  </span>
                </div>
                <div className="relative flex items-end gap-2">
                  <span
                    className="text-[42px] leading-none font-semibold text-white tracking-tight"
                    style={{ fontFamily: "Instrument Serif, serif" }}
                  >
                    2.4M
                  </span>
                  <span className="mb-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full px-2 py-0.5">
                    +18%
                  </span>
                </div>
                <svg
                  viewBox="0 0 260 120"
                  className="relative w-full h-40 mt-5"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="reach-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1447e6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#1447e6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,95 C36,98 50,52 86,64 C120,76 132,32 168,36 C204,40 224,72 260,46 L260,120 L0,120 Z"
                    fill="url(#reach-fill)"
                  />
                  <path
                    d="M0,95 C36,98 50,52 86,64 C120,76 132,32 168,36 C204,40 224,72 260,46"
                    fill="none"
                    stroke="#5b8cff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="168" cy="36" r="4.5" fill="#fff" />
                </svg>
                <div className="relative flex justify-between text-[11px] text-white/35 mt-3">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                </div>
              </div>

              {/* Right card — feature + ring + rating (top: 30px from phone top) */}
              <div className="hidden xl:flex flex-col absolute top-[120px] left-full ml-12 w-[340px] rounded-2xl border border-white/[0.13] bg-white/[0.06] backdrop-blur-xl p-7 overflow-hidden animate-[fadeSlideIn_0.6s_ease_both]">
                {/* tiny boxes texture */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1447e6]/25 grid place-items-center shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5b8cff"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold text-white leading-snug">
                      Intuitive design
                    </div>
                    <div className="text-sm text-white/55 leading-relaxed mt-1.5">
                      A clean, easy-to-use studio built for everyone.
                    </div>
                  </div>
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-20 h-20">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        fill="none"
                        stroke="#1447e6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${0.8 * 2 * Math.PI * 34} ${2 * Math.PI * 34}`}
                        transform="rotate(-90 40 40)"
                      />
                    </svg>
                    <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-white">
                      80%
                    </span>
                  </div>
                </div>
                <div className="relative flex items-center gap-2.5 mt-6 pt-6 border-t border-white/10">
                  <svg width="26" height="26" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                    />
                  </svg>
                  <span className="text-amber-400 text-lg tracking-tight">
                    ★★★★★
                  </span>
                  <span className="text-xl font-semibold text-white ml-auto">
                    4.8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Keyframe styles (minimal — just what Tailwind can't do) ── */}
      <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
    </>
  );
}
