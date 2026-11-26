"use client";

import { useState } from "react";
import Image from "next/image";
import { RollButton, WarmPill } from "./ui";
import { CheckIcon } from "./icons";

// Tab headers follow Promora Home V1 (Campaigns / Insights / Optimization /
// Intelligence); the copy describes what the Creativeklux app actually does.
const TABS = [
  {
    label: "Campaigns",
    blurb: "Launch ad campaigns in minutes with AI",
    title: "Launches campaigns on every network at once",
    body: "Build one campaign for Facebook, Instagram and Google. Pick locations, ages, interests and keywords, set a daily or lifetime budget, and drop in creatives made in Creative Studio. New campaigns wait, paused, until you say go.",
    points: [
      "Facebook, Instagram Feed & Stories and Google",
      "Daily or lifetime budgets with bid caps",
      "Starts paused until you confirm",
    ],
    image: { src: "/images/landing/creative-studio.jpg", w: 2000, h: 1118, alt: "Creative Studio generating ad creatives for a campaign" },
    bg: "linear-gradient(135deg,#cfdcff,#eef2ff 55%,#f3e4ff)",
  },
  {
    label: "Insights",
    blurb: "Track every view, click and conversion",
    title: "Shows what every post and ad really did",
    body: "Spend, reach, clicks, CTR, CPC and conversions for every campaign, compared with the previous 7, 30 or 90 days. Views, likes, comments, shares and link clicks for every post, with the best time to post worked out from your own results.",
    points: [
      "Every campaign against the previous period",
      "Post results per network",
      "Best time to post, from your own data",
    ],
    image: { src: "/images/landing/dashboard-home.jpg", w: 2200, h: 1543, alt: "Home dashboard with engagement, followers and campaign results" },
    bg: "linear-gradient(135deg,#fff0b8,#fff8e0 55%,#ffd6ec)",
  },
  {
    label: "Optimization",
    blurb: "Fix weak ads before they cost you",
    title: "Scores your ads before you spend more",
    body: "Ad Intelligence gives every creative an Ad Score, checks ads against Meta, Google, LinkedIn, TikTok and X ad policies before they go out, and flags live campaigns that aren't getting impressions, so budget goes to what can work.",
    points: [
      "An Ad Score for every creative",
      "Policy checks before you publish",
      "Alerts for campaigns that stall",
    ],
    image: { src: "/images/ad-intelligence-image.webp", w: 1300, h: 1360, alt: "Ad creatives with Ad Scores, engagement rate and key insights" },
    bg: "linear-gradient(135deg,#c9f2de,#ecfbf3 55%,#dbe6ff)",
  },
  {
    label: "Intelligence",
    blurb: "Know the customer behind every DM",
    title: "Turns every conversation into a customer profile",
    body: "Smart Inbox builds a profile for everyone who messages you: what they want, their likely value, where they came from and an AI summary. Tag them, add notes, move them from New to Hot customer to Customer, and see which SmartLinks bring buyers.",
    points: [
      "Wants, likely value and source for every contact",
      "Stages from New to Customer",
      "Customers and value per SmartLink",
    ],
    image: { src: "/images/landing/smart-inbox.jpg", w: 2000, h: 1250, alt: "Smart Inbox conversation with the customer profile panel" },
    bg: "linear-gradient(135deg,#ffd6ec,#fff0f7 55%,#fff0b8)",
  },
];

// The active tab and the panel share this colour, so the tab reads as
// growing out of the panel below it.
const PANEL = "#f8f0e9";

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const last = TABS.length - 1;

  return (
    <section id="features" className="scroll-mt-6 px-[30px] max-sm:px-3">
      <div className="mx-auto max-w-[1376px] rounded-3xl bg-[rgba(252,248,245,.75)] px-[30px] py-[120px] max-lg:py-20 max-sm:px-4 max-sm:py-14">
        <div className="lp-reveal mx-auto flex max-w-[680px] flex-col items-center gap-6 text-center">
          <WarmPill>Benefits</WarmPill>
          <h2 className="font-display text-[clamp(38px,4.6vw,60px)] leading-[1.2] font-semibold">
            AI-powered campaigns that grow with you
          </h2>
          <p className="max-w-[552px] text-[18px] leading-[1.7] text-[#576470]">
            Launch campaigns in minutes, see what every post and ad really did, and know the customer behind every message.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-[1280px] max-lg:mt-12">
          {/* Phones: a swipeable row of pills (titles only) */}
          <div
            role="tablist"
            className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:-mx-4 max-sm:flex max-sm:gap-2 max-sm:overflow-x-auto max-sm:px-4 max-sm:pb-1 max-sm:[scrollbar-width:none]"
          >
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className="flex cursor-pointer flex-col items-start justify-start rounded-t-3xl px-8 pt-8 pb-6 text-left transition-colors duration-300 max-lg:rounded-3xl max-lg:p-6 max-sm:shrink-0 max-sm:rounded-full max-sm:px-5 max-sm:py-2.5"
                style={{ background: i === active ? PANEL : "transparent" }}
              >
                <div className="font-display text-[20px] font-medium tracking-[-.02em] max-sm:text-[16px]">{t.label}</div>
                <div className="mt-2 text-[16px] leading-[1.7] text-[#576470] max-sm:hidden">{t.blurb}</div>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            className={`flex flex-wrap items-center justify-between gap-10 rounded-3xl px-[60px] pt-10 pb-[60px] max-lg:mt-2 max-sm:p-6 ${
              active === 0 ? "lg:rounded-tl-none" : active === last ? "lg:rounded-tr-none" : ""
            }`}
            style={{ background: PANEL }}
          >
            <div key={active} className="lp-in min-w-0 max-w-[480px] flex-[1_1_360px]">
              <h3 className="font-display text-[clamp(32px,3.4vw,48px)] leading-[1.2] font-semibold tracking-[-.02em]">
                {tab.title}
              </h3>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#576470]">{tab.body}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {tab.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-[15px] text-[#576470]">
                    <CheckIcon size={20} />
                    {pt}
                  </li>
                ))}
              </ul>
              <RollButton href="#deal" className="mt-8">
                Get lifetime access
              </RollButton>
            </div>

            <div
              key={`img-${active}`}
              className="lp-in flex aspect-[500/420] min-w-0 max-w-[500px] flex-[1_1_360px] items-center justify-center rounded-2xl p-6"
              style={{ background: tab.bg }}
            >
              <Image
                src={tab.image.src}
                alt={tab.image.alt}
                width={tab.image.w}
                height={tab.image.h}
                sizes="(max-width: 900px) 100vw, 452px"
                className="block w-full rounded-xl shadow-[0_24px_50px_rgba(20,40,90,.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
