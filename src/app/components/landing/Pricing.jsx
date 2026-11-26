"use client";

import { useState } from "react";
import { BILLING_CYCLES, TIERS, getFeatures } from "@/app/pricing";
import { ButtonLink, RollButton, WarmPill } from "./ui";
import { CheckIcon } from "./icons";
import { APPSUMO_URL } from "./content";

const TAGLINES = {
  starter: "For one brand doing it all.",
  growth: "For growing brands and freelancers.",
  agency: "For agencies running client brands.",
};

const PERIOD_LABEL = { monthly: "/month", annual: "/year", lifetime: "one-time" };

function Plan({ tier, cycleId, className = "" }) {
  const pkg = tier.packages[cycleId];
  const isLifetime = cycleId === "lifetime";
  const href = isLifetime && APPSUMO_URL ? APPSUMO_URL : `/pages/checkout?plan=${tier.id}&billing=${cycleId}`;

  return (
    <div className={`flex min-w-0 flex-col px-[30px] max-sm:px-0 ${className}`}>
      <div className="px-8 pt-8 pb-6 max-sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-[24px] font-medium tracking-[-.02em]">{tier.name} plan</h3>
          {tier.popular && (
            <span className="rounded-full bg-[#1447e6] px-2.5 py-1 text-[11.5px] font-bold text-white">Best value</span>
          )}
        </div>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span key={cycleId} className="font-display lp-in text-[48px] leading-[50px] font-semibold tracking-[-.03em]">
            ${pkg.price}
          </span>
          <span className="text-[16px] font-medium">{PERIOD_LABEL[cycleId]}</span>
        </div>
        <p className="mt-2 text-[16px] leading-[1.7] text-[#576470]">{TAGLINES[tier.id] ?? tier.description}</p>
      </div>

      <div className="border-b border-[#ededed] px-8 py-5 max-sm:px-6">
        <RollButton href={href} className="w-full">{isLifetime ? "Get lifetime access" : "Start Free Trial"}</RollButton>
      </div>

      <div className="p-8 max-sm:p-6">
        <div className="text-[16px] font-medium">FEATURES:</div>
        <ul className="mt-6 flex flex-col gap-4">
          {getFeatures(tier, cycleId).map((f) => (
            <li key={f} className="flex items-center gap-3 text-[16px] text-[#576470]">
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [cycleId, setCycleId] = useState("lifetime");
  const [first, ...rest] = TIERS;

  return (
    <section id="deal" className="scroll-mt-6 px-6 py-[50px] max-sm:px-3">
      <div className="lp-reveal mx-auto flex max-w-[600px] flex-col items-center gap-8 text-center">
        <WarmPill>{APPSUMO_URL ? "AppSumo lifetime deal" : "Lifetime deal"}</WarmPill>
        <div>
          <h2 className="font-display text-[clamp(36px,4.6vw,60px)] leading-[1.2] font-semibold">
            Choose the right plan for your journey
          </h2>
          <p className="mx-auto mt-6 max-w-[500px] text-[18px] leading-[1.7]">
            Pay once and keep Klux forever, or go monthly or annual. Tokens and creatives refresh every month.
          </p>
        </div>

        <div role="tablist" aria-label="Billing cycle" className="inline-flex gap-1 rounded-full bg-[#faf4ef] p-2">
          {BILLING_CYCLES.map((c) => {
            const active = c.id === cycleId;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCycleId(c.id)}
                className={`cursor-pointer rounded-full px-7 py-4 text-[18px] font-medium transition-colors duration-300 max-sm:px-4 max-sm:py-3 max-sm:text-[15px] ${
                  active ? "bg-[#0b1220] text-white" : "text-[#0b1220] hover:bg-white/70"
                }`}
              >
                {c.label}
                {c.note && (
                  <span className={`ml-2 text-[12px] font-semibold max-sm:hidden ${active ? "text-[#ffc6e3]" : "text-[#be185d]"}`}>
                    {c.note}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* The first plan sits on the gradient; the other two share a white card */}
      <div className="lp-reveal mx-auto mt-[60px] max-w-[1376px] rounded-3xl bg-[linear-gradient(90deg,#fed3f1,#ffe9cc_22%,#fff2bd_50%,#f4f8b5_69%,#f7fe8e)] px-[30px] py-10 max-sm:px-3 max-sm:py-3">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[387fr_854fr]">
          <Plan tier={first} cycleId={cycleId} className="lg:px-0" />
          <div className="grid grid-cols-1 rounded-3xl bg-white md:grid-cols-2">
            {rest.map((tier) => (
              <Plan key={tier.id} tier={tier} cycleId={cycleId} />
            ))}
          </div>
        </div>
      </div>

      <div className="lp-reveal mx-auto mt-4 flex max-w-[1376px] flex-wrap items-center justify-between gap-4 rounded-[22px] bg-[#f7f3ee] px-6 py-5">
        <div className="flex items-center gap-3.5">
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#0b1220] text-[15px] font-extrabold text-[#ffd23f]">
            60
          </span>
          <div>
            <div className="font-display text-[18px] font-bold">60-day money-back guarantee</div>
            <div className="text-[14px] text-[#475569]">Try everything. Not for you? Get a full refund within 60 days.</div>
          </div>
        </div>
        <ButtonLink href="/pages/refund" className="px-[22px] py-[13px] text-[14.5px] font-bold">
          Read the refund policy
        </ButtonLink>
      </div>
    </section>
  );
}
