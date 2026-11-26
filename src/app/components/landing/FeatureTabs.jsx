"use client";

import { useState } from "react";
import Image from "next/image";
import { RollButton, WarmPill } from "./ui";
import { CheckIcon } from "./icons";

const TABS = [
  {
    label: "Create",
    blurb: "On-brand creatives from one prompt",
    title: "Creates ad creatives in seconds",
    body: "Tell Creative Studio what you need, or paste your website. You get Envato-quality ads, posts, stories and thumbnails in your brand's colors and photos, each with its own caption, hashtags and copy.",
    points: [
      "Studio Designs you can edit by hand or with AI",
      "Magic Designs made fully by AI",
      "Every size: posts, stories, banners, thumbnails",
    ],
    image: { src: "/images/landing/creative-studio.jpg", w: 2000, h: 1118, alt: "Creative Studio chat with 21 generated designs" },
    bg: "linear-gradient(135deg,#cfdcff,#eef2ff 55%,#f3e4ff)",
  },
  {
    label: "Publish",
    blurb: "A week of posts, planned for you",
    title: "Plans and posts your week on autopilot",
    body: "Your copilot picks the days and times, designs each post and puts it in Waiting for approval. Approve in one tap, or let it post on its own.",
    points: [
      "Facebook, Instagram, TikTok, LinkedIn, X, YouTube, Pinterest",
      "Approve-first or fully automatic",
      "Followers, reach and engagement on one dashboard",
    ],
    image: { src: "/images/landing/dashboard-home.jpg", w: 2200, h: 1543, alt: "Home dashboard with Waiting for approval and campaigns" },
    bg: "linear-gradient(135deg,#fff0b8,#fff8e0 55%,#ffd6ec)",
  },
  {
    label: "Reply",
    blurb: "Every DM and comment, answered",
    title: "Answers every DM and comment",
    body: "Smart Inbox pulls Facebook and Instagram messages and comments into one place. Your trained copilot replies in seconds, in your voice, and hands anything about money or complaints to you.",
    points: [
      "All, Needs you, DM and Comment tabs",
      "One copilot in charge, one voice",
      "Customer notes, tags and value on every chat",
    ],
    image: { src: "/images/landing/smart-inbox.jpg", w: 2000, h: 1250, alt: "Smart Inbox with AI replies" },
    bg: "linear-gradient(135deg,#c9f2de,#ecfbf3 55%,#dbe6ff)",
  },
  {
    label: "Convert",
    blurb: "Turn followers into customers",
    title: "Sends followers where you get paid",
    body: "SmartLinks give you a link-in-bio page, QR code and button links in a minute. See which button brings customers and how much they are worth.",
    points: [
      "Bio, flyer and QR code links",
      "Booking, shop and message buttons",
      "Visits, clicks and customers per link",
    ],
    image: { src: "/images/landing/smartlinks.jpg", w: 2000, h: 1250, alt: "SmartLinks pages with visits, clicks and customers" },
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
            One app runs your social media and ads
          </h2>
          <p className="max-w-[552px] text-[18px] leading-[1.7] text-[#576470]">
            No designer, no scheduler, no inbox tool. Pick a job and watch Creativeklux do it.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-[1280px] max-lg:mt-12">
          <div role="tablist" className="grid grid-cols-4 max-lg:grid-cols-2">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className="flex cursor-pointer flex-col items-start justify-start rounded-t-3xl px-8 pt-10 pb-[60px] text-left transition-colors duration-300 max-lg:rounded-3xl max-lg:p-6"
                style={{ background: i === active ? PANEL : "transparent" }}
              >
                <div className="font-display text-[20px] font-medium tracking-[-.02em]">{t.label}</div>
                <div className="mt-2 text-[16px] leading-[1.7] text-[#576470]">{t.blurb}</div>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            className={`flex flex-wrap items-center justify-between gap-10 rounded-3xl p-[60px] max-lg:mt-2 max-sm:p-6 ${
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
