"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Sparkles,
  Zap,
  Rocket,
  Wand2,
  ArrowUpRight,
} from "lucide-react";
import FlipCards from "./FlipCards";

const Loader = () => (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default function CreativekluxHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [loadingButton, setLoadingButton] = useState(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStartFree = () => {
    setLoadingButton("start-free");
    setTimeout(() => {
      document
        .getElementById("pricing")
        ?.scrollIntoView({ behavior: "smooth" });
      setLoadingButton(null);
    }, 300);
  };

  const scrollToVideo = () => {
    document
      .getElementById("see-in-action")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Core feature cards
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "10x Faster Creation",
      desc: "Generate full campaigns in seconds, not hours",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Higher Conversions",
      desc: "AI-optimized visuals proven to outperform templates",
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "One Tool, Everything",
      desc: "Replace Canva, Midjourney, CapCut, D-ID & more",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Brand Perfect",
      desc: "Every asset matches your brand voice & style automatically",
    },
  ];

  const whatYouCanCreate = [
    {
      title: "Ad Creatives",
      desc: "Image ads, video ads, and campaign assets optimized for all platforms",
    },
    {
      title: "Social Media Content",
      desc: "Posts, stories, reels, covers, and platform-specific content at scale",
    },
    {
      title: "Brand Assets",
      desc: "Logos, brand kits, business cards, banners, and complete visual identity",
    },
    {
      title: "AI Magic Studio",
      desc: "Text-to-image, text-to-video, image variations, and script-to-video generation",
    },
    {
      title: "Marketing Automation",
      desc: "Email campaigns, audience management, analytics, and auto-updating media kits",
    },
    {
      title: "Interactive & Playable Ads",
      desc: "Engaging ad formats that drive higher conversion and engagement rates",
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

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-24 px-4"
      style={{ fontFamily: "Geist, sans-serif" }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
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

      <div className="mx-auto max-w-7xl">
        {/* ── Intro ─────────────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <Sparkles className="h-4 w-4" />
            The Complete AI Creative Engine
          </motion.div>

          <motion.h2
            className="mt-7 text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Create High-Converting Ads, Social Content &amp; Brand Designs{" "}
            <span className="bg-gradient-to-r from-[#1447e6] to-[#7c6bff] bg-clip-text text-transparent">
              in Seconds
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
          >
            Creativeklux is the{" "}
            <span className="font-semibold text-[#1447e6]">
              All-in-one AI studio
            </span>{" "}
            for Agencies, Brands, Marketers, Creators, E-commerce &amp; SMMA
            owners.
          </motion.p>

          <motion.p
            className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-500 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15 }}
          >
            Replace{" "}
            <strong className="font-semibold text-gray-700">
              Canva + CapCut + Midjourney + D-ID + Meta Ads Creative Center +
              Playable Studio
            </strong>{" "}
            with one intelligent platform that understands your brand and
            generates good creatives — instantly.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleStartFree}
              disabled={loadingButton === "start-free"}
              className="group flex items-center gap-2.5 rounded-xl bg-[#1447e6] px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a5cff] disabled:opacity-70"
            >
              {loadingButton === "start-free" ? (
                <>
                  <Loader />
                  <span>Redirecting....</span>
                </>
              ) : (
                <>
                  Start Creating
                  <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
            <button
              onClick={scrollToVideo}
              className="flex items-center gap-2.5 rounded-xl border border-gray-300 px-7 py-3.5 font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-[#1447e6]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1447e6] text-white">
                <Play className="h-3 w-3 translate-x-[1px]" fill="currentColor" />
              </span>
              Watch How It Works
            </button>
          </motion.div>
        </div>

        {/* ── Video Demo ────────────────────────────────────────── */}
        <motion.div
          id="see-in-action"
          className="relative mx-auto mt-16 max-w-5xl scroll-mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

          <div className="relative rounded-[28px] bg-gradient-to-br from-[#1447e6] to-[#7c6bff] p-1.5 shadow-2xl shadow-blue-600/20">
            <div className="overflow-hidden rounded-[22px]">
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="/og-image.jpg"
                  playsInline
                  preload="metadata"
                  muted
                  loop
                >
                  <source
                    src="/videos/creativekluxvideo.mp4"
                    type="video/mp4"
                  />
                </video>

                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-black/55 backdrop-blur-[2px]"
                  >
                    <div className="text-center">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform group-hover:scale-105">
                        <Play
                          className="ml-1 h-11 w-11 text-[#1447e6]"
                          fill="currentColor"
                        />
                      </div>
                      <p className="mt-6 text-xl font-bold text-white drop-shadow-2xl">
                        See Creativeklux in Action
                      </p>
                    </div>
                  </div>
                )}

                {isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 cursor-pointer opacity-0 transition-opacity duration-300 hover:opacity-100"
                  >
                    <div className="flex h-full items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur">
                        <Pause
                          className="h-10 w-10 text-gray-900"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Core Features ─────────────────────────────────────── */}
        <motion.div
          className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_24px_50px_-20px_rgba(20,71,230,0.35)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1447e6] to-[#5b8cff] text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Who it's for ──────────────────────────────────────── */}
        <div className="mt-24">
          <FlipCards />
        </div>

        {/* ── What You Can Create ───────────────────────────────── */}
        <div className="relative mt-8 overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-8 md:p-14">
          <motion.h2
            className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Everything You Need to Create, All in One Place
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 mb-12 max-w-3xl text-center text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
          >
            From ad creatives to brand identity, social content to video ads —
            Creative Klux powers your entire creative workflow
          </motion.p>

          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {whatYouCanCreate.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#1447e6]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 transition-colors group-hover:text-[#1447e6]" />
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
        </div>
      </div>
    </section>
  );
}
