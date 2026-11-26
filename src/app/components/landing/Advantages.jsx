import Image from "next/image";
import { ButtonLink, LogoMark, Pill, SectionTitle } from "./ui";

function Card({ title, body, children }) {
  return (
    <article className="lp-reveal lp-lift rounded-[26px] bg-[#f7f3ee] px-[22px] pt-[22px] pb-7">
      <div className="h-[250px] rounded-[20px] bg-white p-5">{children}</div>
      <h3 className="font-display mt-6 text-[24px] font-bold">{title}</h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-[#475569]">{body}</p>
    </article>
  );
}

const CHAT = [
  { from: "customer", text: "Is the yellow set in stock?" },
  { from: "klux", text: "Yes! Sizes S to L. Want the link?" },
  { from: "customer", text: "How do I get a refund?" },
  { from: "klux", text: "I've passed this to the team." },
];

const REACH = [
  { channel: "Facebook", value: "120K", height: 70, bg: "#dbe4ff", color: "#0b1220" },
  { channel: "Instagram", value: "520K", height: 150, bg: "#1447e6", color: "#fff", delay: ".15s" },
  { channel: "TikTok", value: "160K", height: 100, bg: "#a9bff7", color: "#0b1220", delay: ".3s" },
];

export function RealResults() {
  return (
    <section className="px-6 pt-[60px] pb-[50px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="lp-reveal flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <Pill>Benefit</Pill>
            <SectionTitle className="mt-4 max-w-[640px]">Designed to deliver real results</SectionTitle>
          </div>
          <p className="max-w-[380px] text-[16.5px] leading-[1.6] text-[#475569]">
            No design, copywriting or ads skills needed. Tell Klux what you want and it gets to work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
          <Card title="Replies that sound like you" body="Every DM and comment answered in seconds. Money questions go to you.">
            <div className="flex h-full flex-col justify-center gap-3">
              {CHAT.map((m) =>
                m.from === "customer" ? (
                  <div key={m.text} className="flex items-center justify-end gap-2">
                    <span className="rounded-[14px] bg-[#f7f3ee] px-[13px] py-[9px] text-[13.5px]">{m.text}</span>
                    <Image src="/images/landing/avatar-customer.jpg" alt="" width={68} height={68} className="h-[34px] w-[34px] rounded-full" />
                  </div>
                ) : (
                  <div key={m.text} className="flex items-center gap-2">
                    <LogoMark size={34} radius="50%" />
                    <span className="rounded-[14px] bg-[#eef3ff] px-[13px] py-[9px] text-[13.5px]">{m.text}</span>
                  </div>
                )
              )}
            </div>
          </Card>

          <Card title="Creatives in seconds" body="Ads, posts, stories and videos with headlines, captions and hashtags written.">
            <div className="flex h-full flex-col items-center justify-center gap-3.5">
              <span className="lp-orb flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[conic-gradient(from_0deg,#1447e6,#7c5cff,#ff6bb5,#1447e6)]">
                <Image src="/images/landing/klux-mark.png" alt="" width={158} height={166} className="h-auto w-[30px]" />
              </span>
              <div className="text-center text-[13.5px] text-[#64748b]">Your creative is being generated…</div>
              <div className="flex w-full items-center rounded-full border border-[#e6eaf3] py-1 pr-1 pl-3.5">
                <span className="flex-1 text-[13px] text-[#334155]">Black Friday ad for boots</span>
                <span className="rounded-full bg-[#0b1220] px-3.5 py-2 text-[12.5px] font-semibold text-white">Generate</span>
              </div>
              <div className="flex gap-1.5 text-[11.5px] text-[#64748b]">
                {["Ad", "Post", "Story", "Video"].map((t) => (
                  <span key={t} className="rounded-full border border-[#e6eaf3] px-[9px] py-[3px]">{t}</span>
                ))}
              </div>
            </div>
          </Card>

          <Card title="Ad results you can read" body="Reach, clicks and sales per channel and per creative, in plain numbers.">
            <div className="flex h-full flex-col">
              <div className="flex justify-between text-[14px] font-semibold">
                <span>Ad reach by channel</span>
                <span className="text-[#94a3b8]">⋮</span>
              </div>
              <div className="flex flex-1 items-end gap-3.5 pt-3.5">
                {REACH.map((r) => (
                  <div key={r.channel} className="flex flex-1 flex-col items-center gap-1.5">
                    <div
                      className="lp-bar flex w-full items-start justify-center rounded-xl pt-2 text-[12.5px] font-bold"
                      style={{ height: r.height, background: r.bg, color: r.color, animationDelay: r.delay }}
                    >
                      {r.value}
                    </div>
                    <span className="text-[12px] text-[#64748b]">{r.channel}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function FloatingStatement() {
  return (
    <section className="px-6 pt-[70px] pb-20">
      <div className="relative mx-auto max-w-[1180px] py-5 text-center">
        <div className="lp-float absolute top-0 left-0 w-[212px] rotate-[-4deg] rounded-[18px] bg-[#d9d0ff] p-4 text-left max-[860px]:hidden">
          <div className="text-[13px] font-bold text-[#4c3a99]">Ad performance</div>
          <svg width="148" height="54" viewBox="0 0 148 54" fill="none" aria-hidden="true" className="mt-2">
            <path d="M2 46 L26 38 L48 42 L72 24 L96 28 L120 10 L146 6" stroke="#5b3cc4" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div
          className="lp-float absolute right-0 bottom-0 w-[202px] rotate-[4deg] rounded-[18px] bg-[#ffd6ec] p-4 text-left max-[860px]:hidden"
          style={{ animationDelay: "-3s" }}
        >
          <div className="text-[13px] font-bold text-[#9d174d]">Answered by AI</div>
          <div className="font-display mt-1 text-[40px] font-bold text-[#be185d]">94%</div>
          <div className="text-[12px] text-[#9d174d]">Median reply 14s</div>
        </div>
        <p className="font-display lp-fill relative mx-auto max-w-[700px] text-[clamp(30px,3.4vw,46px)] leading-[1.15] font-semibold text-[#0b1220]">
          Reach the right people, answer them in seconds, and turn followers into paying customers.
        </p>
        <ButtonLink href="#deal" className="relative mt-[30px] px-6 py-3.5 text-[15px]">
          See how Klux works
        </ButtonLink>
      </div>
    </section>
  );
}
