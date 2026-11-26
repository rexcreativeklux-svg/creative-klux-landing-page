"use client";

import { useState } from "react";
import { Pill } from "./ui";

const FAQS = [
  {
    q: "What does lifetime access mean?",
    a: "You pay once and keep using Klux for as long as it runs, with all future updates to your plan. No monthly bills.",
  },
  {
    q: "Can Klux run my ads too?",
    a: "Yes. Connect Meta, Google or TikTok ad accounts. Klux makes the creatives, launches them with your approval and moves budget to what works, never past the spend limit you set.",
  },
  {
    q: "Will it post without asking me?",
    a: "Only if you let it. By default every post waits for your one-tap approval. Switch any copilot to autopilot when you're ready.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Moving up a plan adds more brand kits, copilots and monthly AI credits.",
  },
  {
    q: "What if the AI can't answer a customer?",
    a: "Money questions, refunds and complaints go to Needs you with a short summary, so you can step in fast.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-6 px-6 pt-10 pb-[50px]">
      <div className="mx-auto max-w-[760px]">
        <div className="lp-reveal text-center">
          <Pill>FAQ</Pill>
          <h2 className="font-display mt-4 text-[clamp(36px,4.4vw,56px)] leading-none font-bold">Frequently asked questions</h2>
          <p className="mx-auto mt-3.5 max-w-[520px] text-[16.5px] leading-[1.6] text-[#475569]">
            Everything about the lifetime deal and how Klux works.
          </p>
        </div>
        <div className="mt-[34px] flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-[18px] bg-[#f7f3ee] px-[22px] py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[#0b1220]"
                >
                  <span className="font-display text-[18px] font-semibold tracking-[-.02em]">{f.q}</span>
                  <span className="w-7 shrink-0 text-center text-[22px]" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="lp-in mt-2.5 text-[15px] leading-[1.65] text-[#475569]">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
