"use client";

import React, { useState, useEffect, useRef } from "react";
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
        className="min-h-screen text-[#111]"
        style={{
          fontFamily: "Geist, sans-serif",
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(20,184,166,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 15% 70%, rgba(245,158,11,0.06) 0%, transparent 55%), #f7f7f5",
        }}
      >
        {/* ══ HERO BODY ════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Floating analytics cards — pinned to the screen edges on laptops+.
              Top & bottom sit flush; only the middle card is pushed past the edge
              and clipped by the hero's overflow-hidden. */}
          <div className="hidden xl:flex flex-col gap-4 items-start absolute left-10 top-1/2 -translate-y-1/2 text-left pointer-events-none z-10">
            {FLOATING_CARDS.filter((c) => c.side === "left").map(
              (card, i, arr) => {
                const isMiddle = i === Math.floor(arr.length / 2);
                return (
                  <div
                    key={i}
                    className={isMiddle ? "my-6" : ""}
                    style={{
                      transform: isMiddle
                        ? "translateX(-48px)"
                        : "translateX(48px)",
                    }}
                  >
                    <div
                      className="animate-[fadeSlideIn_0.6s_ease_both]"
                      style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                    >
                      <FloatingCard
                        card={card}
                        large={isMiddle}
                        widthClass={isMiddle ? "w-64" : "w-52"}
                        extraClass={
                          isMiddle
                            ? "min-h-[210px] flex flex-col justify-center"
                            : ""
                        }
                      />
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <div className="hidden xl:flex flex-col gap-4 items-end absolute right-10 top-1/2 -translate-y-1/2 text-left pointer-events-none z-10">
            {FLOATING_CARDS.filter((c) => c.side === "right").map(
              (card, i, arr) => {
                const isMiddle = i === Math.floor(arr.length / 2);
                return (
                  <div
                    key={i}
                    className={isMiddle ? "my-6" : ""}
                    style={{
                      transform: isMiddle
                        ? "translateX(48px)"
                        : "translateX(-48px)",
                    }}
                  >
                    <div
                      className="animate-[fadeSlideIn_0.6s_ease_both]"
                      style={{ animationDelay: `${0.55 + i * 0.15}s` }}
                    >
                      <FloatingCard
                        card={card}
                        large={isMiddle}
                        widthClass={isMiddle ? "w-64" : "w-52"}
                        extraClass={
                          isMiddle
                            ? "min-h-[210px] flex flex-col justify-center"
                            : ""
                        }
                      />
                    </div>
                  </div>
                );
              },
            )}
          </div>

          {/* Center content */}
          <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-[740px] lg:max-w-[900px] mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[#888] tracking-[0.06em] uppercase mb-7 px-3.5 py-[5px] border border-black/10 rounded-full bg-white/80 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_0_3px_rgba(34,197,94,0.2)] animate-pulse" />
              One platform. Every creative you&apos;ll ever need.
            </div>

            {/* Headline */}
            <h1
              className="text-[clamp(40px,5vw,60px)] font-normal leading-[1.08] tracking-[-0.02em] text-[#0f0f0f]"
              style={{
                fontFamily: "Instrument Serif, serif",
                minHeight: "3em",
              }}
            >
              <span className="block italic">AI-powered visuals for your</span>
              <span className="block relative min-h-[1.06em]">
                ads, social, <span className="text-[#1447e6]">and brand</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="text-[17px] font-light text-[#777] leading-[1.65] max-w-[440px] lg:max-w-[560px] mb-10">
              Creativeklux generates professional-quality creatives in seconds —
              from paid ad graphics to social content and brand visuals. Built
              for business owners, marketers, agencies, and social media
              managers who want great design without the wait.
            </p>

            {/* Join with Google and Get Started button */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => handleLogin("login")}
                disabled={loadingBtn === "login"}
                className="w-full sm:w-auto justify-center flex items-center gap-1.5 text-[13.5px] font-medium text-[#555] bg-[#f0f0ec] border border-[#e0e0da] rounded-lg px-4 py-[7px] cursor-pointer transition-all duration-150 hover:border-[#bbb] hover:text-[#111] hover:bg-[#e8e8e4] disabled:opacity-65"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {loadingBtn === "login" && <Spinner />}
                Start Creating for Free
              </button>
              <button
                onClick={() => handleLogin("see-action")}
                disabled={loadingBtn === "see-action"}
                className="w-full sm:w-auto justify-center flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-[#1447e6] border-none rounded-lg px-[18px] py-[7px] cursor-pointer transition-all duration-150 hover:bg-[#0f3bbf] hover:-translate-y-px disabled:opacity-65"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {loadingBtn === "see-action" && <Spinner />}
                See it in action
              </button>
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
