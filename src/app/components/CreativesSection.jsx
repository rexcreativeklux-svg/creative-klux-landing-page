"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  Search,
  Shield,
  Star,
  Columns2,
  Wand2,
  Palette,
  Layers,
  Sparkles,
  Camera,
  Video,
  Mic,
  User,
  ImageIcon,
} from "lucide-react";

export default function CreativeSection() {
  const creatives = [
    {
      id: "creative-studio",
      badge: "🚀 One Studio, Every Format",
      badgeColor: "bg-blue-200 text-blue-900",
      title: "Creative Studio",
      description:
        "Launch scroll-stopping ads, viral social content, and on-brand designer assets from a single studio. AI handles layout and copy variations while your brand kit keeps everything consistent—every platform, every format, in minutes.",
      image: "/images/ads-creative-image.png",
      features: [
        {
          Icon: Layers,
          iconBg: "#eff6ff",
          iconColor: "#1264ff",
          title: "Ads Creatives",
          description:
            "Image, video, and interactive ad formats built for Meta, Google, and TikTok",
        },
        {
          Icon: Sparkles,
          iconBg: "#fff7ed",
          iconColor: "#c2410c",
          title: "Social Creatives",
          description:
            "Posts, reels, stories, and banners sized and captioned for every platform",
        },
        {
          Icon: Palette,
          iconBg: "#f0fdf4",
          iconColor: "#15803d",
          title: "Designer Creatives",
          description:
            "Logos, business cards, banners, and brand assets that look agency-made",
        },
        {
          Icon: Wand2,
          iconBg: "#f5f3ff",
          iconColor: "#7c3aed",
          title: "Brand Kits",
          description:
            "Colors, fonts, and logos applied automatically so every output stays on-brand",
        },
      ],
    },
    {
      id: "product-studio",
      badge: "📸 Product Photography",
      badgeColor: "bg-orange-200 text-orange-900",
      title: "Product Studio",
      description:
        "Turn a single product photo into a full catalog shoot. Swap backgrounds, drop products onto AI models, or generate ghost mannequin shots—no camera, studio, or model required.",
      image: "/images/product-studio-image.webp",
      bg: "bg-gray-50",
      features: [
        {
          Icon: Camera,
          iconBg: "#eff6ff",
          iconColor: "#1264ff",
          title: "Background Remover",
          description:
            "Clean cutouts in seconds, ready for white, transparent, or studio backgrounds",
        },
        {
          Icon: User,
          iconBg: "#fdf4ff",
          iconColor: "#a21caf",
          title: "Virtual Model",
          description:
            "Place products on AI-generated models without a photoshoot",
        },
        {
          Icon: ImageIcon,
          iconBg: "#f0fdf4",
          iconColor: "#15803d",
          title: "Ghost Mannequin",
          description:
            "Invisible-mannequin apparel shots straight from a flat lay photo",
        },
        {
          Icon: Video,
          iconBg: "#fff7ed",
          iconColor: "#c2410c",
          title: "Video Generator",
          description:
            "Turn static product shots into motion for ads and listings",
        },
      ],
    },
    {
      id: "magic-studio",
      badge: "✨ Prompt to Creative",
      badgeColor: "bg-green-200 text-green-900",
      title: "Magic Studio",
      description:
        "Type a prompt, get a finished asset. Generate images, video, voiceovers, and on-brand variations from scratch—Magic Studio handles the heavy lifting so you go from idea to output fast.",
      image: "/images/magic-studio-image.png",
      features: [
        {
          Icon: ImageIcon,
          iconBg: "#eff6ff",
          iconColor: "#1264ff",
          title: "Text to Image",
          description:
            "Describe it and get a polished, on-brand image in seconds",
        },
        {
          Icon: Video,
          iconBg: "#fdf4ff",
          iconColor: "#a21caf",
          title: "Text to Video",
          description:
            "Prompt-driven video generation for ads, reels, and stories",
        },
        {
          Icon: Mic,
          iconBg: "#fff7ed",
          iconColor: "#c2410c",
          title: "Script to Voiceover to Video",
          description:
            "Turn a script into a fully voiced, edited video automatically",
        },
        {
          Icon: Sparkles,
          iconBg: "#f0fdf4",
          iconColor: "#15803d",
          title: "Persona Generator",
          description:
            "Consistent AI personas for recurring content and ad creative",
        },
      ],
    },
    {
      id: "ad-intelligence",
      badge: "🧠 Know Before You Spend",
      badgeColor: "bg-purple-200 text-purple-900",
      title: "Ad Intelligence",
      description:
        "Score your ads, spy on competitors, and guard against policy bans—all before you spend a single dollar on media.",
      image: "/images/ad-intelligence-image.webp",
      bg: "bg-gray-50",
      features: [
        {
          Icon: Activity,
          iconBg: "#eff6ff",
          iconColor: "#1264ff",
          title: "Ad Performance",
          description: "Diagnose why your ads win or lose before launch",
        },
        {
          Icon: Search,
          iconBg: "#f5f3ff",
          iconColor: "#7c3aed",
          title: "Market Spy",
          description: "See what competitors are running and what's working",
        },
        {
          Icon: Shield,
          iconBg: "#fffbeb",
          iconColor: "#b45309",
          title: "Ad Guard AI",
          description: "Catch policy violations before Meta or Google does",
        },
        {
          Icon: Star,
          iconBg: "#eff6ff",
          iconColor: "#1264ff",
          title: "Ad Scorer AI",
          description:
            "One score that predicts performance across 4 dimensions",
        },
        {
          Icon: Columns2,
          iconBg: "#f0fdf4",
          iconColor: "#15803d",
          title: "Creative Comparison",
          description:
            "Put two creatives head-to-head and let AI pick the winner",
          full: true,
        },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-4 sm:py-6 md:py-10 lg:py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Creatives
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI-powered creatives for your ads, social, and brand. Creative
            Studio, Product Studio, Magic Studio, and Ad Intelligence—everything
            you need to create, publish, and win, in one platform.
          </motion.p>
        </div>

        {/* Stacking Feature Items */}
        <div className="flex flex-col gap-6">
          {creatives.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              feature={feature}
              fadeInUp={fadeInUp}
              staggerContainer={staggerContainer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, index, fadeInUp, staggerContainer }) {
  const [loadingButton, setLoadingButton] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const imageOnRight = index % 2 === 0;

  // Stacking sticky offsets — each card peeks 16px below the previous
  const topOffset = 80 + index * 16;
  const zIndex = 10 + index;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Loader = () => (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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

  const handleGetStarted = () => {
    setLoadingButton(`get-started-${feature.title}`);
    setTimeout(() => {
      window.location.href = "../pages/pricing";
    }, 400);
  };

  return (
    <div
      ref={ref}
      id={feature.id}
      className={`sticky ${feature.bg || "bg-white"} rounded-2xl transition-shadow duration-300 scroll-mt-32`}
      style={{
        top: `${topOffset}px`,
        zIndex,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 p-6 sm:p-8 lg:p-10">
        {/* Content Side */}
        <motion.div
          className={`space-y-6 sm:space-y-6 items max-w-lg ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, x: imageOnRight ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`${feature.badgeColor} px-4 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-base font-semibold`}
            >
              {feature.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {feature.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-base sm:text-md text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {feature.description}
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {feature.features.map((item, idx) => (
              <FeatureCard key={idx} feature={item} fadeInUp={fadeInUp} />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={handleGetStarted}
              disabled={loadingButton === `get-started-${feature.title}`}
              className="relative bg-[#1447e6] cursor-pointer hover:scale-105 text-white transition duration-200 px-5 py-1 rounded-lg font-medium text-[15px] flex items-center gap-2 disabled:opacity-70"
            >
              Get Started
              {loadingButton === `get-started-${feature.title}` && <Loader />}
            </button>
            <button className="text-gray-700 cursor-pointer hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 hover:underline flex items-center gap-2">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className={imageOnRight ? "lg:order-2" : "lg:order-1"}
          initial={{ opacity: 0, x: imageOnRight ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={`relative sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 h-[600px] overflow-hidden`}
          >
            <div className="relative w-full h-full">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ feature, fadeInUp }) {
  const { Icon } = feature;

  // Icon: lucide component (with tinted tile) when provided, otherwise emoji.
  const iconEl = Icon ? (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]"
      style={{ background: feature.iconBg }}
    >
      <Icon size={20} strokeWidth={1.8} style={{ color: feature.iconColor }} />
    </div>
  ) : (
    <div className="text-2xl shrink-0">{feature.icon}</div>
  );

  return (
    <motion.div
      className={`bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:scale-95 transition duration-200 ${feature.full ? "sm:col-span-2" : ""}`}
      variants={fadeInUp}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`flex ${feature.full ? "flex-row items-center gap-3" : "flex-col items-start"}`}
      >
        {iconEl}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">
            {feature.title}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
