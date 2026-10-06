"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Wand2,
  ShieldCheck,
  Eye,
  ArrowUp,
  Check,
  CalendarClock,
  Smartphone,
  UserCheck,
  Plug,
  Rocket,
} from "lucide-react";

// Copy mirrors the Copilot feature in the app (Make / Check / Watch pitch,
// workflow ideas, slash-command skills, WhatsApp & Telegram channels).
const pillars = [
  {
    icon: <Wand2 className="h-5 w-5" />,
    title: "Make",
    desc: "Designs, posts, ads, product shots and videos — all in your brand's colors, fonts and voice.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Check",
    desc: "Brand consistency, ad policy and a creative score on every piece before anything goes live.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Watch",
    desc: "Your competitors, your trends and how your creative is performing — plus what to make next.",
  },
];

const workflows = [
  "Weekly content calendar",
  "Every-platform resize",
  "Pre-launch policy check",
  "Weekly competitor briefing",
  "Daily ad fatigue alerts",
  "Product photo cleanup",
];

const skills = [
  "/brand-audit",
  "/resize-everywhere",
  "/week-of-posts",
  "/ad-variants",
  "/policy-check",
  "/creative-score",
];

const extras = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "On WhatsApp & Telegram",
    desc: "Scan a QR code and chat with your copilot from your phone, wherever you are.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "Your approval first",
    desc: "Work comes back for your review — never straight out the door. Edits and deletes need your permission.",
  },
  {
    icon: <Plug className="h-5 w-5" />,
    title: "Connected to your accounts",
    desc: "Uses the social and ad accounts you've already connected to publish, then reports back on how it did.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

function ChatMock() {
  return (
    <div className="relative">
      <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />

      <div className="relative rounded-[28px] bg-gradient-to-br from-[#1447e6] to-[#7c6bff] p-1.5 shadow-2xl shadow-blue-600/20">
        <div className="overflow-hidden rounded-[22px] bg-white">
          {/* Window header */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1447e6] to-[#5b8cff] text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-gray-900">
                Brand assistant
              </p>
              <p className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Copilot
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 bg-gray-50/60 px-5 py-6">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#1447e6] px-4 py-3 text-sm leading-relaxed text-white">
              Make a week of Instagram posts for our summer launch.
            </div>

            <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-3 text-sm leading-relaxed text-gray-700">
              On it — here are 7 drafts in your brand&apos;s colors and fonts,
              sized for feed and stories.
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-[#1447e6] to-[#7c6bff]" />
                <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-300 to-rose-400" />
                <div className="aspect-square rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <Check className="h-3 w-3" /> Brand kit
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <Check className="h-3 w-3" /> Brand voice
                </span>
              </div>
              <p className="mt-3 text-gray-500">
                Review them and I&apos;ll load the approved ones into your
                calendar.
              </p>
            </div>
          </div>

          {/* Composer */}
          <div className="border-t border-gray-100 px-4 py-4">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
              <span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-xs font-semibold text-[#1447e6]">
                /ad-variants
              </span>
              <span className="flex-1 truncate text-sm text-gray-400">
                Tell Brand assistant what you want to do
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1447e6] text-white">
                <ArrowUp className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CopilotSection() {
  const handleStartFree = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 px-4"
      style={{ fontFamily: "Geist, sans-serif" }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#1447e6]/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(20,71,230,0.07) 1px, transparent 0)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ── Intro ─────────────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <Sparkles className="h-4 w-4" />
            Meet Copilot
          </motion.div>

          <motion.h2
            className="mt-7 text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Hand off the whole job,{" "}
            <span className="bg-gradient-to-r from-[#1447e6] to-[#7c6bff] bg-clip-text text-transparent">
              not just the question
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
          >
            Copilot is your AI teammate across Creative Klux. Tell it the
            outcome — it handles the steps across your brand kit, social, ads
            and studios.
          </motion.p>
        </div>

        {/* ── Pillars + chat mock ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                className="group flex gap-5 rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_50px_-20px_rgba(20,71,230,0.35)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1447e6] to-[#5b8cff] text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <ChatMock />
          </motion.div>
        </div>

        {/* ── Workflows & skills ────────────────────────────────── */}
        <div className="relative mt-24 overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-8 md:p-14">
          <motion.h3
            className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Ask once, or set it to run every week
          </motion.h3>
          <motion.p
            className="mx-auto mt-4 mb-12 max-w-3xl text-center text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
          >
            Start from ready-made ideas for the work you repeat, or type a slash
            command to kick off a skill in one line.
          </motion.p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gray-500">
                <CalendarClock className="h-4 w-4 text-[#1447e6]" />
                Workflow ideas
              </p>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {workflows.map((item) => (
                  <motion.span
                    key={item}
                    variants={fadeInUp}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-blue-300 hover:text-[#1447e6]"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gray-500">
                <Sparkles className="h-4 w-4 text-[#1447e6]" />
                Skills
              </p>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {skills.map((item) => (
                  <motion.span
                    key={item}
                    variants={fadeInUp}
                    className="rounded-full border border-blue-200 bg-white px-4 py-2 font-mono text-sm font-semibold text-[#1447e6] transition-colors hover:bg-blue-50"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Extras ────────────────────────────────────────────── */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {extras.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_24px_50px_-20px_rgba(20,71,230,0.35)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1447e6] transition-transform group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <motion.div
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <button
            onClick={handleStartFree}
            className="group flex items-center gap-2.5 rounded-xl bg-[#1447e6] px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a5cff]"
          >
            Give Copilot its first task
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
