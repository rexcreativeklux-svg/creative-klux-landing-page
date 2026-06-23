"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";

// ─── Pain card data ────────────────────────────────────────────────────────────
const PAIN_CARDS = [
  {
    title: "Creatives take days to produce",
    body: "You brief a designer. They come back 3 days later with something that's wrong. You revise. Then revise again. By the time you launch, your moment is gone.",
    target: 3,
    label: "days avg. turnaround per ad creative from a freelancer",
    icon: (
      <svg
        className="w-[22px] h-[22px] block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#5b8cff" }}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Agency bills are eating your margins",
    body: "$500 for a logo. $1,200 for a campaign set. $300 for a single social post. And when results disappoint, you start over and pay again.",
    target: 1800,
    prefix: "$",
    label: "per month average SMB spend on creative work",
    icon: (
      <svg
        className="w-[22px] h-[22px] block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#5b8cff" }}
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Your brand looks different everywhere",
    body: "The ad doesn't match the landing page. The social post clashes with the proposal. Customers don't trust what they can't recognize — inconsistency silently kills conversion.",
    target: 23,
    label: "% avg. revenue lift from consistent brand presentation",
    icon: (
      <svg
        className="w-[22px] h-[22px] block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#5b8cff" }}
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Revision loops drain your team",
    body: '"Make it pop." "Can we try a darker version?" "What if the logo was bigger?" Every revision costs 45 minutes. Your team ends up doing design work instead of growth work.',
    target: 6,
    label: "revision rounds per project on average before approval",
    icon: (
      <svg
        className="w-[22px] h-[22px] block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#5b8cff" }}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Tools made for designers, not businesses",
    body: "Canva is fine — until it isn't. The templates look like everyone else's. The AI features are shallow. And the moment you need something specific to your brand, you're on your own.",
    target: 72,
    label:
      "% of SMBs say they can't produce professional creatives independently",
    icon: (
      <svg
        className="w-[22px] h-[22px] block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#5b8cff" }}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Slow creative = missed windows",
    body: "A trend peaks. A news hook opens. A competitor stumbles. You have 6 hours to react — and your creative pipeline takes 3 days. You watch the moment pass, again.",
    target: 4,
    label: "hours is the average window before a trending moment dies",
    icon: (
      <svg
        className="w-[22px] h-[22px] block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "#5b8cff" }}
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const BEFORE_ITEMS = [
  "Wait 3–5 days for a designer to respond",
  "Pay $500–$2,000/month for agency retainers",
  "Endless revisions with no guarantee of results",
  "Brand looks inconsistent across every channel",
  "Miss trend windows because production is too slow",
  "Generic Canva templates that look like your competitors",
];

const AFTER_ITEMS = [
  "Ad creatives, social posts & brand assets in seconds",
  "One flat subscription — no per-asset fees",
  "AI that understands your brand, not generic templates",
  "Consistent brand identity across every creative",
  "React to trends in minutes, not days",
  "Built for businesses — no design skills needed",
];

// Smooth-scroll to an in-page section, accounting for the fixed header + nav bar.
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─── Section ────────────────────────────────────────────────────────────────────
export default function CreativeTaxSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Scroll reveal for pain cards (staggered)
    const cards = Array.from(root.querySelectorAll(".ctax-card"));
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target);
            setTimeout(
              () => entry.target.classList.add("is-visible"),
              idx * 80,
            );
            cardObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    cards.forEach((c) => cardObs.observe(c));

    // Count-up for stat numbers
    const countUp = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const prefix = el.dataset.prefix || "";
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(eased * target);
        el.textContent = prefix + val.toLocaleString();
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const stats = Array.from(root.querySelectorAll(".ctax-stat[data-target]"));
    const statObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            statObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    stats.forEach((s) => statObs.observe(s));

    return () => {
      cardObs.disconnect();
      statObs.disconnect();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="text-[#0b0b14]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 pt-[100px] pb-[120px]">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#1447e6] mb-6">
          <span className="ctax-dot w-1.5 h-1.5 rounded-full bg-[#1447e6]" />
          The hidden cost of bad creatives
        </p>

        {/* Headline */}
        <h2
          className="text-[clamp(36px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0b0b14] mb-5"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          You&apos;re losing deals before
          <br />
          anyone reads your{" "}
          <span className="relative not-italic text-[#1447e6] after:content-[''] after:absolute after:bottom-1 after:inset-x-0 after:h-[3px] after:bg-[#1447e6] after:opacity-50 after:rounded-[2px]">
            copy
          </span>
          .
        </h2>

        <p className="text-[18px] text-[#6b6b8a] max-w-[600px] leading-[1.7] mb-16">
          Poor visuals kill campaigns before they start. Most businesses know it
          — and still burn hours, money, and momentum trying to fix it without
          the right tool.
        </p>

        {/* Pain grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-0.5 bg-white/[0.07] rounded-[20px] overflow-hidden mb-16">
          {PAIN_CARDS.map((card) => (
            <div
              key={card.title}
              className="ctax-card group relative overflow-hidden bg-[#1a1a2e] p-[36px_32px] hover:bg-[#1e1e36]"
            >
              {/* left accent bar on hover */}
              <span className="absolute top-0 left-0 w-[3px] h-full bg-[#1447e6] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <div className="w-11 h-11 rounded-xl bg-[#1447e6]/10 flex items-center justify-center mb-5">
                {card.icon}
              </div>

              <h3
                className="text-[18px] font-bold text-white mb-2.5 leading-[1.25]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {card.title}
              </h3>

              <p className="text-sm text-[#6b6b8a] leading-[1.65] mb-6">
                {card.body}
              </p>

              <div className="flex items-baseline gap-1.5">
                <span
                  className="ctax-stat text-[28px] font-extrabold text-[#5b8cff]"
                  data-target={card.target}
                  data-prefix={card.prefix}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  0
                </span>
                <span className="text-xs text-[#6b6b8a] leading-[1.35] max-w-[160px]">
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pivot divider */}
        <div className="flex items-center gap-5 mb-16">
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span
            className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#2e2e42] whitespace-nowrap"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            There is a better way
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] rounded-[20px] overflow-hidden bg-white/[0.07]">
          {/* Without */}
          <div className="bg-[#130e0e] p-[40px_36px]">
            <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-7 bg-[#1447e6]/12 text-[#5b8cff]">
              Without Creativeklux
            </span>
            <ul className="flex flex-col gap-3.5 list-none">
              {BEFORE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-[#c2c2d8] leading-[1.5]"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] mt-0.5 bg-[#1447e6]/15 text-[#1447e6]">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="bg-[#0b1318] p-[40px_36px]">
            <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-7 bg-[#22c55e]/[0.12] text-[#22c55e]">
              With Creativeklux
            </span>
            <ul className="flex flex-col gap-3.5 list-none">
              {AFTER_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-[#c2c2d8] leading-[1.5]"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] mt-0.5 bg-[#22c55e]/[0.15] text-[#22c55e]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-20">
          <h2
            className="text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0b0b14] mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Stop paying the creative tax.
          </h2>
          <p className="text-[17px] text-[#6b6b8a] mb-9">
            Join 1,000+ businesses creating faster, cheaper, and better.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <button
              onClick={() => scrollToId("pricing")}
              className="group inline-flex cursor-pointer items-center gap-2 text-[15px] font-semibold text-white bg-[#1447e6] rounded-xl px-8 py-3.5 transition-all duration-200 hover:bg-[#2a5cff] hover:-translate-y-px"
            >
              Start free today
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              onClick={() => scrollToId("see-in-action")}
              className="group inline-flex cursor-pointer items-center gap-3 bg-transparent border-none"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1447e6] text-white transition-transform duration-200 group-hover:scale-105">
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </span>
              <span className="text-[15px] font-medium text-[#0b0b14]">
                See it in action
              </span>
            </button>
          </div>
          <p className="flex justify-center items-center gap-5 flex-wrap text-[13px] text-[#2e2e42] mt-5">
            <span className="flex items-center gap-1.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              No credit card required
            </span>
            <span className="w-1 h-1 rounded-full bg-[#2e2e42]" />
            <span className="flex items-center gap-1.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Free forever plan
            </span>
            <span className="w-1 h-1 rounded-full bg-[#2e2e42]" />
            <span className="flex items-center gap-1.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Up and running in 2 minutes
            </span>
          </p>
        </div>
      </div>

      {/* Scoped styles for things Tailwind can't express inline */}
      <style>{`
        .ctax-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease, background 0.25s ease;
        }
        .ctax-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes ctaxPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.4; transform: scale(0.7); }
        }
        .ctax-dot { animation: ctaxPulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
