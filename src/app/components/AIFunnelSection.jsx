"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Sparkles, Zap, Rocket, Wand2, Target, TrendingUp, Users, Award } from "lucide-react";

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
      window.location.href = "../pages/pricing";
    }, 500);
  };

  const Loader = () => (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  // Core feature cards
  const features = [
    { icon: <Zap className="w-7 h-7" />, title: "10x Faster Creation", desc: "Generate full campaigns in seconds, not hours" },
    { icon: <Rocket className="w-7 h-7" />, title: "Higher Conversions", desc: "AI-optimized visuals proven to outperform templates" },
    { icon: <Wand2 className="w-7 h-7" />, title: "One Tool, Everything", desc: "Replace Canva, Midjourney, CapCut, D-ID & more" },
    { icon: <Sparkles className="w-7 h-7" />, title: "Brand Perfect", desc: "Every asset matches your brand voice & style automatically" },
  ];

  // New "Who It's For" cards with flip functionality
  const whoItsFor = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Agencies & SMMA",
      desc: "Scale creative output for multiple clients with fast, high-quality ads and campaigns — no bottlenecks, no designer hiring needed.",
      details: [
        "Scale creative output for multiple clients with fast, high-quality ads and campaigns — no bottlenecks, no designer hiring needed."
      ]
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Creators & Influencers",
      desc: "Produce professional thumbnails, social posts, ads, and brand assets in minutes — without ever hiring a designer.",
      details: [
        "Produce professional thumbnails, social posts, ads, and brand assets in minutes — without ever hiring a designer."
      ]
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Brands & E-commerce",
      desc: "Launch high-converting ad campaigns, social content, product visuals, and video ads — perfect for teams without big in-house creative budgets.",
      details: [
        "Launch high-converting ad campaigns, social content, product visuals, and video ads — perfect for teams without big in-house creative budgets."
      ]
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Startups & SMEs",
      desc: "Replace multiple design, video, and marketing tools with one lean solution — professional creatives on a startup-friendly budget.",
      details: [
        "Replace multiple design, video, and marketing tools with one lean solution — professional creatives on a startup-friendly budget."
      ]
    },
  ];

  const whatYouCanCreate = [
    { title: "Ad Creatives", desc: "Image ads, video ads, and campaign assets optimized for all platforms" },
    { title: "Social Media Content", desc: "Posts, stories, reels, covers, and platform-specific content at scale" },
    { title: "Brand Assets", desc: "Logos, brand kits, business cards, banners, and complete visual identity" },
    { title: "AI Magic Studio", desc: "Text-to-image, text-to-video, image variations, and script-to-video generation" },
    { title: "Marketing Automation", desc: "Email campaigns, audience management, analytics, and auto-updating media kits" },
    { title: "Interactive & Playable Ads", desc: "Engaging ad formats that drive higher conversion and engagement rates" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="w-full bg-white py-24 px-4 overflow-hidden">
      <style>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <div className="max-w-7xl mx-auto">

        {/* Core Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative bg-linear-to-b from-white via-blue-50/30 to-purple-50/20 backdrop-blur-sm rounded-lg p-6 border border-gray-100 hover:border-blue-600 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-300/5 to-purple-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Who It's For – Flip Cards */}
        <div className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-black text-center mb-16 text-gray-900 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Who the app is for
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {whoItsFor.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative h-72 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* THIS IS THE KEY FIX */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

                  {/* FRONT – shows title */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg py-8 border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col items-center justify-center">
                    <div className="absolute top-3 left-3 text-4xl font-black text-gray-100 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-3 h-3 border-b-4 border-r-4 border-black transform rotate-45"></div>
                    </div>
                    <h4 className="text-sm font-black text-gray-700 uppercase tracking-tight px-4 text-center">
                      {item.title}
                    </h4>
                  </div>

                  {/* BACK – NO title, only description */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-black/90 rounded-lg border border-gray-800 flex flex-col justify-center items-center text-center">
                    <div className="absolute top-3 left-3 text-4xl font-black text-[#1264ff] leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="w-6 h-6 bg-[#1264ff] transform rotate-45"></div>
                    </div>

                    <p className="text-white text-sm leading-relaxed max-w-xs">
                      {item.desc}
                    </p>

                    {/* Bottom Section */}
                    <div className="flex absolute bottom-4 pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-[#1264ff] rounded-sm flex items-center justify-center">
                          <span className="text-black text-xs font-bold">✓</span>
                        </div>
                        <span className="text-white text-xs font-bold">Service Details</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, idx) => (
                          <span key={idx} className="text-[#1264ff] text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* What You Can Create Section */}
        <div className="mb-24 bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Everything You Need to Create, All in One Place
          </motion.h2>
          <motion.p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From ad creatives to brand identity, social content to video ads — Creative Klux powers your entire creative workflow
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {whatYouCanCreate.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider border border-gray-300 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <Sparkles className="w-5 h-5" />
            The Complete AI Creative Engine
          </motion.div>

          <motion.h1
            className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Create High-Converting Ads, Social Content <br />
            & Brand Designs <span className="">in Seconds</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-700 max-w-5xl mx-auto mb-6">
            Creativeklux is the <span className="font-bold text-blue-600">All-in-one AI studio</span> for Agencies, Brands, Marketers, Creators, E-commerce & SMMA owners.
          </motion.p>

          <motion.p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Replace <strong>Canva + CapCut + Midjourney + D-ID + Meta Ads Creative Center + Playable Studio</strong> with one intelligent platform that understands your brand and generates winning creatives — instantly.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={handleStartFree}
              disabled={loadingButton === "start-free"}
              className="group relative px-8 py-4 bg-blue-700 text-white font-medium rounded-lg shadow-xl hover:shadow-purple-300/50 transition-all duration-200 hover:scale-105 flex items-center gap-3 disabled:opacity-70"
            >
              {loadingButton === "start-free" ? (
                <>
                  <Loader />
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                  Start Creating
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-800 font-medium rounded-lg hover:border-blue-600 hover:bg-purple-50/50 transition-all duration-200 hover:scale-105 backdrop-blur-sm">
              Watch How It Works
            </button>
          </motion.div>

          {/* Video Demo */}
          <motion.div className="relative max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-6 ring-blue-600 ring-offset-transparent">
              <div className="aspect-video relative bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/og-image.jpg"
                  playsInline
                  preload="metadata"
                  muted
                  loop
                >
                  <source src="/videos/creativekluxvideo.mp4" type="video/mp4" />
                </video>

                {!isPlaying && (
                  <div onClick={togglePlay} className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer group">
                    <div className="text-center">
                      <div className="w-28 h-28 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                        <Play className="w-14 h-14 text-white ml-2" fill="white" />
                      </div>
                      <p className="text-white text-xl font-bold mt-6 drop-shadow-2xl">
                        See Creativeklux in Action
                      </p>
                    </div>
                  </div>
                )}

                {isPlaying && (
                  <div onClick={togglePlay} className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="flex items-center justify-center h-full">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl">
                        <Pause className="w-10 h-10 text-gray-900" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}