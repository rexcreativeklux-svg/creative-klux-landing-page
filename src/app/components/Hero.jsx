"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CreativeSelectionModal from "./CreativeSelectionModal";

// ─── Fonts via next/font should be in layout.jsx. Add these there:
// import { Instrument_Serif, Geist } from 'next/font/google'
// For now we load via <link> in a useEffect-free way using a global stylesheet
// that should be added to your globals.css:
// @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap');

// ─── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(
  phrases,
  {
    typeSpeed = 60,
    deleteSpeed = 35,
    pauseAfterType = 1800,
    pauseAfterDelete = 400,
  } = {},
) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIndex];
    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(
          () => {
            setDisplayed(current.slice(0, displayed.length + 1));
          },
          typeSpeed + Math.random() * 30,
        );
      } else {
        timeout.current = setTimeout(() => setPhase("pausing"), pauseAfterType);
      }
    } else if (phase === "pausing") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout.current = setTimeout(
          () => {
            setDisplayed((d) => d.slice(0, -1));
          },
          deleteSpeed + Math.random() * 15,
        );
      } else {
        timeout.current = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setPhase("typing");
        }, pauseAfterDelete);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [
    displayed,
    phase,
    phraseIndex,
    phrases,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
  ]);

  return displayed;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PHRASES = [
  "ads that stop the scroll.",
  "social posts in seconds.",
  "brand visuals that convert.",
  "campaigns at machine speed.",
];

const PILLS = [
  { icon: "✦", bg: "#111", color: "#fff", label: "AI Ad Generation" },
  { icon: "◈", bg: "#6366f1", color: "#fff", label: "Social Content" },
  { icon: "▲", bg: "#f59e0b", color: "#fff", label: "Brand Design" },
  { icon: "⬡", bg: "#10b981", color: "#fff", label: "Email Campaigns" },
  { icon: "◉", bg: "#ef4444", color: "#fff", label: "Video Scripts" },
  { icon: "⬧", bg: "#8b5cf6", color: "#fff", label: "Analytics" },
];

const AVATARS = [
  { bg: "#6366f1", letter: "A" },
  { bg: "#10b981", letter: "B" },
  { bg: "#f59e0b", letter: "C" },
  { bg: "#ef4444", letter: "D" },
];

// ─── Floating card data (decorative side cards) ───────────────────────────────
const FLOATING_CARDS = [
  {
    side: "left",
    top: "18%",
    content: {
      type: "revenue",
      label: "Ad revenue · 30d",
      delta: "+340%",
      value: "$48.2K",
      color: "#10b981",
    },
  },
  {
    side: "left",
    top: "52%",
    content: {
      type: "donut",
      label: "Creative win rate",
      percent: 68,
      color: "#1447e6",
      legend: [
        { label: "Winning", color: "#1447e6" },
        { label: "Testing", color: "#c7d2fe" },
        { label: "Paused", color: "#e5e7eb" },
      ],
    },
  },
  {
    side: "left",
    top: "84%",
    content: {
      type: "channels",
      label: "Top channels",
      color: "#1447e6",
      items: [
        { label: "Instagram", pct: 72, color: "#e1306c" },
        { label: "Facebook", pct: 58, color: "#1447e6" },
        { label: "TikTok", pct: 41, color: "#0f0f0f" },
      ],
    },
  },
  {
    side: "right",
    top: "14%",
    content: {
      type: "bars",
      label: "Weekly performance",
      bars: [40, 65, 50, 80, 70, 100],
      highlight: 5,
      color: "#1447e6",
      caption: "ROAS up 6 weeks straight",
    },
  },
  {
    side: "right",
    top: "50%",
    content: {
      type: "kpis",
      label: "Reach this week",
      value: "2.4M",
      color: "#10b981",
      stats: [
        { value: "12.8%", label: "CTR" },
        { value: "FB · IG · TT", label: "3 platforms" },
      ],
    },
  },
  {
    side: "right",
    top: "86%",
    content: {
      type: "donut",
      label: "Budget used",
      percent: 42,
      color: "#10b981",
      legend: [
        { label: "Spent", color: "#10b981" },
        { label: "Remaining", color: "#e5e7eb" },
      ],
    },
  },
];

// ─── Spinner ──────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.25"
      />
      <path
        fill="currentColor"
        opacity="0.8"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ─── Floating decorative cards ────────────────────────────────────────────────
function FloatingCard({
  card,
  widthClass = "w-64",
  extraClass = "",
  large = false,
}) {
  const { content } = card;

  const donutDim = large ? 124 : 70;
  const donutC = donutDim / 2;
  const donutR = large ? 46 : 26;
  const circumference = 2 * Math.PI * donutR;

  return (
    <div
      className={`bg-white/90 backdrop-blur-md border border-black/[0.07] rounded-2xl shadow-xl shadow-black/10 p-4 select-none ${widthClass} ${extraClass}`}
    >
      {/* Revenue + trend-line sparkline */}
      {content.type === "revenue" && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">{content.label}</span>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full px-1.5 py-0.5">
              {content.delta}
            </span>
          </div>
          <div
            className="text-2xl font-semibold tracking-tight text-[#0f0f0f]"
            style={{ fontFamily: "Instrument Serif, serif" }}
          >
            {content.value}
          </div>
          <svg
            viewBox="0 0 160 44"
            className="w-full h-16 mt-2"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={content.color}
                  stopOpacity="0.25"
                />
                <stop offset="100%" stopColor={content.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,38 L20,33 L40,35 L60,26 L80,28 L100,18 L120,15 L140,8 L160,4 L160,44 L0,44 Z"
              fill="url(#rev-fill)"
            />
            <path
              d="M0,38 L20,33 L40,35 L60,26 L80,28 L100,18 L120,15 L140,8 L160,4"
              fill="none"
              stroke={content.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Donut + legend */}
      {content.type === "donut" && (
        <div className={`flex items-center ${large ? "gap-5" : "gap-3"}`}>
          <svg
            width={donutDim}
            height={donutDim}
            viewBox={`0 0 ${donutDim} ${donutDim}`}
            className="shrink-0"
          >
            <circle
              cx={donutC}
              cy={donutC}
              r={donutR}
              fill="none"
              stroke="#eef0f2"
              strokeWidth={large ? 13 : 8}
            />
            <circle
              cx={donutC}
              cy={donutC}
              r={donutR}
              fill="none"
              stroke={content.color}
              strokeWidth={large ? 13 : 8}
              strokeLinecap="round"
              strokeDasharray={`${(content.percent / 100) * circumference} ${circumference}`}
              transform={`rotate(-90 ${donutC} ${donutC})`}
            />
            <text
              x={donutC}
              y={donutC + (large ? 9 : 5)}
              textAnchor="middle"
              className="fill-gray-900"
              style={{ fontSize: large ? "27px" : "15px", fontWeight: 600 }}
            >
              {content.percent}%
            </text>
          </svg>
          <div>
            <div
              className={`font-medium text-gray-700 ${large ? "text-base mb-2.5" : "text-xs mb-1.5"}`}
            >
              {content.label}
            </div>
            <div className={large ? "space-y-2" : "space-y-1"}>
              {content.legend.map((l, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`rounded-full shrink-0 ${large ? "w-2.5 h-2.5" : "w-1.5 h-1.5"}`}
                    style={{ background: l.color }}
                  />
                  <span
                    className={`text-gray-500 ${large ? "text-sm" : "text-[10px]"}`}
                  >
                    {l.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Channel breakdown — horizontal progress bars */}
      {content.type === "channels" && (
        <div>
          <div className="text-xs text-gray-500 mb-2.5">{content.label}</div>
          <div className="space-y-2.5">
            {content.items.map((it, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-gray-600">{it.label}</span>
                  <span className="text-[11px] font-semibold text-gray-800">
                    {it.pct}%
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${it.pct}%`,
                      background: it.color || content.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bar chart */}
      {content.type === "bars" && (
        <div>
          <div className="text-xs text-gray-500 mb-2">{content.label}</div>
          <div className="flex items-end gap-1.5 h-16">
            {content.bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i === content.highlight ? content.color : "#e5e7eb",
                }}
              />
            ))}
          </div>
          <div className="text-[10px] text-gray-400 mt-1.5">
            {content.caption}
          </div>
        </div>
      )}

      {/* KPI tile + sparkline */}
      {content.type === "kpis" && (
        <div>
          <div
            className={`text-gray-500 ${large ? "text-base mb-3" : "text-xs mb-1"}`}
          >
            {content.label}
          </div>
          <div className="flex items-end justify-between">
            <div
              className={`font-semibold tracking-tight text-[#0f0f0f] ${large ? "text-5xl" : "text-2xl"}`}
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              {content.value}
            </div>
            <svg
              viewBox="0 0 60 24"
              className={large ? "w-28 h-14" : "w-20 h-8"}
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 L12,14 L24,16 L36,9 L48,11 L60,3"
                fill="none"
                stroke={content.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`flex items-center gap-4 border-t border-black/5 ${large ? "mt-5 pt-4" : "mt-2 pt-2"}`}
          >
            {content.stats.map((s, i) => (
              <div key={i}>
                <div
                  className={`font-semibold text-gray-800 ${large ? "text-lg" : "text-[11px]"}`}
                >
                  {s.value}
                </div>
                <div
                  className={`text-gray-400 ${large ? "text-xs" : "text-[9px]"}`}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCreative, setSelectedCreative] = useState(null);
  const [loadingBtn, setLoadingBtn] = useState(null);

  const typedText = useTypewriter(PHRASES, {
    typeSpeed: 55,
    deleteSpeed: 32,
    pauseAfterType: 2000,
    pauseAfterDelete: 380,
  });

  const handleLogin = (key) => {
    setLoadingBtn(key);
    window.location.href = "https://app.creativeklux.com/";
  };

  const isEmpty = url.trim() === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsLoading(false);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* ── Background + full page wrapper ── */}
      <div
        className="min-h-screen text-white overflow-hidden rounded-none sm:rounded-[20px] m-0 sm:m-4 lg:m-5"
        style={{
          fontFamily: "Geist, sans-serif",
          background:
            "linear-gradient(180deg, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.80) 100%), url('/images/bg-image.png') center bottom / cover no-repeat",
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
                onClick={() => handleLogin("login")}
                disabled={loadingBtn === "login"}
                className="w-full sm:w-auto justify-center flex items-center gap-2 text-[15px] font-semibold text-white bg-[#1447e6] border-none rounded-xl px-6 py-3.5 cursor-pointer transition-all duration-150 hover:bg-[#2a5cff] hover:-translate-y-px disabled:opacity-65"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {loadingBtn === "login" && <Spinner />}
                Start Creating for Free
              </button>
              <button
                onClick={() => handleLogin("see-action")}
                disabled={loadingBtn === "see-action"}
                className="w-full sm:w-auto justify-center flex items-center gap-2 text-[15px] font-medium text-white/90 bg-white/5 border border-white/15 rounded-xl px-6 py-3.5 cursor-pointer transition-all duration-150 hover:bg-white/10 hover:border-white/25 disabled:opacity-65"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {loadingBtn === "see-action" && <Spinner />}
                See it in action
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
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

      <CreativeSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCreative={selectedCreative}
        setSelectedCreative={setSelectedCreative}
      />
    </>
  );
}
