import Image from "next/image";
import { BrandIcon } from "./icons";
import { RollButton, WarmPill, WindowDots } from "./ui";
import ScrollLetters from "./ScrollLetters";
import PopIn from "./PopIn";

// Layout after Promora Home V1's "Manage your campaigns" block: a 600×536
// lavender panel with a faded dot grid, a stack of white cards stepping up
// behind the front card, and the copy on the right.
export function OneDashboard() {
  return (
    <section className="px-6 pt-[100px] pb-[120px] max-sm:pt-16 max-sm:pb-20">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-20 gap-y-10">
        <div className="lp-reveal relative aspect-[600/536] min-w-0 max-w-[600px] flex-[1_1_460px] overflow-hidden rounded-3xl bg-[#a99cf2]">
          <div
            aria-hidden="true"
            className="absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000_30%,transparent_100%)]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.45) 1.2px,transparent 1.2px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Stacked cards bobbing slightly out of phase */}
          <div className="absolute top-1/2 left-1/2 w-[430px] max-w-[82%] -translate-x-1/2 -translate-y-[30%]">
            <div
              className="lp-bob absolute -top-[54px] right-[44px] left-[44px] h-[160px] rounded-[20px] border border-[#ecebf5] bg-white shadow-[0_-2px_10px_rgba(40,20,120,.06)]"
              style={{ animationDelay: ".4s" }}
            />
            <div
              className="lp-bob absolute -top-[27px] right-[22px] left-[22px] h-[160px] rounded-[20px] border border-[#ecebf5] bg-white shadow-[0_-2px_10px_rgba(40,20,120,.06)]"
              style={{ animationDelay: ".2s" }}
            />
            <div className="lp-bob relative rounded-[22px] border-4 border-white/60 bg-clip-padding">
              <div className="rounded-[18px] bg-white px-6 pt-6 pb-7 max-sm:px-4 max-sm:pt-4 max-sm:pb-5">
                <div className="flex justify-between text-[16px] font-medium">
                  <span>Ad spend this month</span>
                  <span className="text-[14px] font-semibold text-[#1447e6]">Limit on</span>
                </div>
                <div className="mt-7 flex items-end justify-between gap-3 max-sm:mt-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-[36px] leading-none font-medium tracking-[-.03em] max-sm:text-[28px]">$310</span>
                    <span className="text-[14px] font-medium">of $500</span>
                  </div>
                  <div className="text-right text-[13px] leading-[1.5] text-[#576470]">
                    Return on ad spend
                    <div className="font-semibold text-[#16a34a]">3.4x</div>
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-[#eef1f7]">
                  <div className="lp-grow h-2 w-[62%] rounded-full bg-[#1447e6]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lp-reveal min-w-0 max-w-[520px] flex-[1_1_420px]">
          <h2 className="font-display text-[clamp(38px,4.4vw,60px)] leading-[1.2] font-semibold">
            Run social and ads from one dashboard
          </h2>
          <p className="mt-6 text-[18px] leading-[1.7] text-[#576470]">
            Posts, comments, DMs, followers, ad spend and results sit side by side, so you always know
            what&apos;s working and where every dollar goes.
          </p>
          <RollButton href="#deal" className="mt-10">
            Learn more
          </RollButton>
        </div>
      </div>
    </section>
  );
}

const AD_ROWS = [
  { img: "creative-boots.jpg", name: "Black Friday boots", stat: "4.1% CTR · $0.42 CPC", width: "90%", bar: "#1447e6" },
  { img: "creative-glasses.jpg", name: "Classy glasses", stat: "2.8% CTR · $0.61 CPC", width: "62%", bar: "#5b82f0" },
  { img: "creative-supplement.jpg", name: "Supplement launch", stat: "Paused by Klux", width: "30%", bar: "#cbd5e1", muted: true },
];

// Promora Home V1 feature card: full-width pastel panel, copy on one side and
// a 506×474 visual on the other, alternating from card to card.
function StackCard({ bg, children }) {
  return (
    <div
      className="lp-reveal flex flex-wrap items-center justify-between gap-[60px] rounded-3xl pt-[60px] pr-[60px] pb-20 pl-20 max-lg:p-10 max-sm:gap-8 max-sm:p-6"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

function StackText({ icon, title, body }) {
  return (
    <div className="flex min-w-0 max-w-[550px] flex-[1_1_380px] flex-col gap-4">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white max-sm:h-16 max-sm:w-16">{icon}</span>
      <ScrollLetters
        as="h3"
        className="font-display text-[clamp(32px,3.4vw,48px)] leading-[1.2] font-semibold tracking-[-.02em]"
        text={title}
      />
      <p className="max-w-[431px] text-[16px] leading-[1.7]">{body}</p>
    </div>
  );
}

// The visual: our mock-up in a 506px column, with a smaller card over its right
// edge (588px total, like Promora's image + overlay card). The small card pops
// in when scrolled into view, then glides diagonally back and forth.
function StackVisual({ overlay, overlayClassName = "", children }) {
  return (
    <div className="relative flex min-h-[474px] min-w-0 max-w-[588px] flex-[1_1_440px] items-center max-sm:min-h-0 max-sm:pb-16">
      <div className="w-full max-w-[506px]">{children}</div>
      {overlay && (
        <PopIn className={`absolute right-0 z-[1] max-sm:right-2 ${overlayClassName}`}>
          <div className="lp-drift">{overlay}</div>
        </PopIn>
      )}
    </div>
  );
}

const smallCard = "rounded-2xl bg-white shadow-[0_24px_50px_rgba(20,40,90,.18)]";

// Pink card overlay: where the budget went this week
function BudgetChartCard() {
  return (
    <div className={`${smallCard} w-[288px] p-4 max-sm:w-[240px]`}>
      <div className="flex items-baseline justify-between">
        <span className="text-[14px] font-semibold">Budget moved</span>
        <span className="text-[12px] font-semibold text-[#16a34a]">+$120 to boots</span>
      </div>
      <div className="relative mt-3">
        <svg viewBox="0 0 240 80" preserveAspectRatio="none" className="block h-[78px] w-full" fill="none" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1={i * 40} x2={i * 40} y1="0" y2="80" stroke="#f1f3f5" />
          ))}
          <path d="M0 62 C20 58 34 22 60 26 S96 58 122 50 S170 18 200 30 S228 48 240 44 L240 80 L0 80Z" fill="#fbd5ef" opacity=".5" />
          <path d="M0 62 C20 58 34 22 60 26 S96 58 122 50 S170 18 200 30 S228 48 240 44" stroke="#f3a7dd" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          <path d="M0 70 C24 66 40 48 70 44 S110 30 140 34 S180 56 206 52 S232 40 240 38" stroke="#a78bfa" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="absolute top-[18px] left-[57%] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#a78bfa] shadow" />
        <span className="absolute top-0 right-0 rounded-[4px] bg-[#0b1220] px-1.5 py-0.5 text-[8px] font-medium text-white">ROAS 3.4x</span>
      </div>
      <div className="mt-1.5 flex justify-between text-[9px] text-[#576470]">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

// Yellow card overlay: the brand kit every creative is built from
function BrandKitCard() {
  return (
    <div className={`${smallCard} w-[210px] p-4 text-center`}>
      <div className="text-[15px] font-semibold">Brand kit ready</div>
      <p className="mt-1 text-[11px] leading-[1.5] text-[#576470]">Logo, colors and fonts pulled from your website.</p>
      <div className="mt-3 flex justify-center gap-1.5">
        {["#1447e6", "#0b1220", "#ffd23f", "#ff6bb5", "#f7f3ee"].map((c) => (
          <span key={c} className="h-6 w-6 rounded-full border border-black/5" style={{ background: c }} />
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-[#f7f8fc] px-2.5 py-2 text-left text-[10.5px] text-[#576470]">
        <div className="flex justify-between"><span>Heading</span><span className="font-semibold text-[#0b1220]">Inter Tight</span></div>
        <div className="mt-1 flex justify-between"><span>Body</span><span className="font-semibold text-[#0b1220]">Inter</span></div>
      </div>
      <div className="mt-3 rounded-full bg-[#0b1220] py-2 text-[11px] font-medium text-white">Generate 12 more</div>
    </div>
  );
}

// Mint card overlay: the campaign the copilot just launched
function CampaignLiveCard() {
  return (
    <div className={`${smallCard} w-[250px] p-4`}>
      <div className="flex items-center gap-2 text-[14px] font-semibold">
        <span className="relative flex h-2.5 w-2.5">
          <span className="lp-ring absolute inset-0 rounded-full bg-[#22c55e]" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
        </span>
        Campaign live
      </div>
      <div className="mt-1 text-[12px] text-[#576470]">Boots · 3 ads · $20/day · ends Sunday</div>
      <div className="mt-3 flex justify-between text-[11px] font-medium">
        <span>Spent $0</span>
        <span className="text-[#576470]">Limit $100</span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-[#eef1f7]">
        <div className="h-2 w-[6%] rounded-full bg-[#22c55e]" />
      </div>
    </div>
  );
}

const featureIcon = { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "#0b1220", strokeWidth: 1.8, "aria-hidden": true };

export function FeatureStack() {
  return (
    <section className="px-[30px] pb-[120px] max-sm:px-3 max-sm:pb-20">
      <div className="mx-auto max-w-[1376px]">
        <div className="lp-reveal mx-auto mb-20 flex max-w-[680px] flex-col items-center gap-4 text-center max-sm:mb-12">
          <WarmPill>Features</WarmPill>
          <ScrollLetters
            as="h2"
            className="font-display text-[clamp(38px,4.6vw,60px)] leading-[1.2] font-semibold"
            text="Klux gives you the marketing edge"
          />
          <p className="max-w-[556px] text-[18px] leading-[1.7] text-[#576470]">
            Creatives, posts, replies and ads, made and run by AI that learns what works for your brand.
          </p>
        </div>

        <div className="flex flex-col gap-8">
        <StackCard bg="#fed3f1">
          <StackText
            icon={
              <svg {...featureIcon}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v10M9 9.5c0-1.4 1.3-2 3-2s3 .8 3 2-1.3 1.8-3 2.3-3 1-3 2.4 1.3 2.3 3 2.3 3-.8 3-2" />
              </svg>
            }
            title="Puts your ad budget where it performs"
            body="Push creatives to Meta, Google and TikTok, read results back creative by creative, and move spend to the winners, always inside the limit you set."
          />
          <StackVisual overlay={<BudgetChartCard />} overlayClassName="-bottom-8 max-sm:bottom-0">
          <div className="rounded-2xl bg-white p-5 pb-7 shadow-[0_24px_50px_rgba(120,20,70,.12)] max-sm:p-4">
            <WindowDots size={10} />
            <div className="mt-1 mb-5 flex items-baseline justify-between px-1">
              <span className="font-display text-[20px] font-semibold tracking-[-.02em]">Ad performance</span>
              <span className="text-[13px] text-[#576470]">This week</span>
            </div>
            <div className="flex flex-col gap-6 px-1">
              {AD_ROWS.map((r) => (
                <div key={r.name} className="flex items-center gap-4">
                  <Image
                    src={`/images/landing/${r.img}`}
                    alt=""
                    width={128}
                    height={160}
                    className="h-20 w-16 shrink-0 rounded-[10px] object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold">{r.name}</div>
                    <div className={`mt-0.5 text-[13px] font-medium ${r.muted ? "text-[#94a3b8]" : "text-[#1447e6]"}`}>{r.stat}</div>
                    <div className="mt-2.5 h-2.5 rounded-full bg-[#eef1f7]">
                      <div className="lp-grow h-2.5 rounded-full" style={{ width: r.width, background: r.bar }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </StackVisual>
        </StackCard>

        <StackCard bg="#f7fe8e">
          <StackVisual overlay={<BrandKitCard />} overlayClassName="top-1/2 -translate-y-[40%] max-sm:top-auto max-sm:bottom-0 max-sm:translate-y-0">
          <div className="rounded-2xl bg-white p-4 shadow-[0_24px_50px_rgba(110,90,0,.12)]">
            <WindowDots size={10} />
            <div className="grid grid-cols-3 gap-2.5">
              {[
                ["creative-handbag.jpg", "Handbag sale creative"],
                ["creative-smoothie.jpg", "Smoothie creative"],
                ["creative-perfume.jpg", "Perfume creative"],
                ["creative-01.jpg", "Headphones sale creative"],
                ["creative-03.jpg", "Skincare testimonial creative"],
                ["creative-04.jpg", "Career coaching creative"],
              ].map(([img, alt]) => (
                <Image
                  key={img}
                  src={`/images/landing/${img}`}
                  alt={alt}
                  width={556}
                  height={695}
                  sizes="160px"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
          </StackVisual>
          <StackText
            icon={
              <svg {...featureIcon}>
                <path d="M5 19c3-1 4-3 5-6l4-8 3 3-8 4c-3 1-5 2-6 5z" />
                <path d="M14 5l5 5" />
              </svg>
            }
            title="On-brand creatives, product photos and videos"
            body="Paste your website once. Klux pulls your logo, colors, fonts and products into a brand kit, then makes every ad, post, story, product shot and short video to match, with captions included."
          />
        </StackCard>

        <StackCard bg="#c1efdc">
          <StackText
            icon={
              <svg {...featureIcon}>
                <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
              </svg>
            }
            title="A copilot you brief in plain language"
            body="Tell it what you want, in the app, on WhatsApp or on Telegram. It knows your offers, prices and tone, and it hands money questions and complaints back to you."
          />
          <StackVisual overlay={<CampaignLiveCard />} overlayClassName="-bottom-6 max-sm:bottom-0">
          <div className="rounded-2xl bg-white p-6 shadow-[0_24px_50px_rgba(20,90,50,.12)] max-sm:p-4">
            <div className="flex items-center gap-3.5">
              <Image
                src="/images/landing/copilot-sarah.jpg"
                alt=""
                width={100}
                height={100}
                className="h-[60px] w-[60px] rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="text-[17px] font-semibold">Sarah · Copilot</div>
                <div className="text-[13.5px] text-[#576470]">In charge of Smart Inbox · Autopilot on</div>
              </div>
              <span className="rounded-full bg-[#dcfce7] px-3 py-1.5 text-[13px] font-bold text-[#15803d]">Trained</span>
            </div>
            <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-[#f7f8fc] p-5 max-sm:p-3.5">
              <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#64748b]">
                <BrandIcon name="whatsapp" size={16} /> WhatsApp · 8:02 AM
              </div>
              <div className="max-w-[85%] self-end rounded-[16px_16px_4px_16px] bg-[#1447e6] px-4 py-3 text-[15px] text-white">
                Run a $20/day Meta ad for the boots till Sunday
              </div>
              <div className="max-w-[85%] self-start rounded-[16px_16px_16px_4px] bg-white px-4 py-3 text-[15px] shadow-[0_0_0_1px_#e6eaf3]">
                Done. 3 creatives are ready for your OK. Spend stops at $100.
              </div>
              <div className="max-w-[85%] self-end rounded-[16px_16px_4px_16px] bg-[#1447e6] px-4 py-3 text-[15px] text-white">
                Approve all 3
              </div>
              <div className="max-w-[85%] self-start rounded-[16px_16px_16px_4px] bg-white px-4 py-3 text-[15px] shadow-[0_0_0_1px_#e6eaf3]">
                Live on Facebook and Instagram. I&apos;ll send results tonight.
              </div>
            </div>
          </div>
          </StackVisual>
        </StackCard>
        </div>
      </div>
    </section>
  );
}
