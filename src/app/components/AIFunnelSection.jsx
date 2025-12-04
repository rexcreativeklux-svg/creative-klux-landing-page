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

  // Spinner Component
  const Loader = () => (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
  );

  const features = [
    { icon: <Zap className="w-7 h-7" />, title: "10x Faster Creation", desc: "Generate full campaigns in seconds, not hours" },
    { icon: <Rocket className="w-7 h-7" />, title: "Higher Conversions", desc: "AI-optimized visuals proven to outperform templates" },
    { icon: <Wand2 className="w-7 h-7" />, title: "One Tool, Everything", desc: "Replace Canva, Midjourney, CapCut, D-ID & more" },
    { icon: <Sparkles className="w-7 h-7" />, title: "Brand Perfect", desc: "Every asset matches your brand voice & style automatically" },
  ];

  const whatYouCanCreate = [
    { title: "Ad Creatives", desc: "Image ads, video ads, and campaign assets optimized for all platforms" },
    { title: "Social Media Content", desc: "Posts, stories, reels, covers, and platform-specific content at scale" },
    { title: "Brand Assets", desc: "Logos, brand kits, business cards, banners, and complete visual identity" },
    { title: "AI Magic Studio", desc: "Text-to-image, text-to-video, image variations, and script-to-video generation" },
    { title: "Marketing Automation", desc: "Email campaigns, audience management, analytics, and auto-updating media kits" },
    { title: "Interactive & Playable Ads", desc: "Engaging ad formats that drive higher conversion and engagement rates" }
  ];

  const useCases = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Content Creators & Influencers",
      desc: "Produce professional social content, ads, and brand assets without hiring any designers"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Brands & E-commerce",
      desc: "Run ad campaigns, social campaigns, and video ads at scale with AI-powered creativity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Agencies & SMMA",
      desc: "Fast, scalable creative output for multiple clients with consistent quality"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Startups & SMEs",
      desc: "Reduce tool overhead and costs while maintaining professional creative standards"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Feature Highlights */}
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
              transition={{ duration: 0.5 }}
              className="group relative bg-linear-to-b from-white via-blue-50/30 to-purple-50/20 backdrop-blur-sm rounded-lg p-6 border border-gray-100 hover:border-blue-600 cursor-pointer hover:shadow transition-all duration-300 hover:-translate-y-2"
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

        {/* Trust Bar */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-semibold">Trusted by 10,000+ Creative Professionals Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-700">Agencies</div>
            <div className="text-2xl font-bold text-gray-700">Creators</div>
            <div className="text-2xl font-bold text-gray-700">E-commerce</div>
            <div className="text-2xl font-bold text-gray-700">SMEs</div>
            <div className="text-2xl font-bold text-gray-700">Marketers</div>
          </div>
        </motion.div>

        {/* What You Can Create Section */}
        <div className="mb-24 bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Everything You Need to Create, All in One Place
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Who It's For Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Built for the Modern Creative Professional
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you're a solo creator or managing an entire agency, Creative Klux adapts to your workflow
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider border border-gray-300 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
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

          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-5xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creativeklux is the <span className="font-bold text-blue-600">All-in-one AI studio</span> for Agencies, Brands, Marketers, Creators, E-commerce & SMMA owners.
          </motion.p>

          <motion.p 
            className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Replace <strong>Canva + CapCut + Midjourney + D-ID + Meta Ads Creative Center + Playable Studio</strong> with one intelligent platform that understands your brand and generates winning creatives — instantly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
           <button
              onClick={handleStartFree}
              disabled={loadingButton === "start-free"}
              className="group relative px-4 py-2 bg-blue-700 text-white font-medium rounded-md cursor-pointer shadow-xl hover:shadow-purple-300/50 transition-all duration-200 hover:scale-105 flex items-center gap-3 disabled:opacity-70"
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
            <button className="px-4 py-2 border border-gray-300 text-gray-800 font-medium rounded-lg hover:border-blue-600 hover:bg-purple-50/50 transition-all cursor-pointer duration-200 hover:scale-105 backdrop-blur-sm">
              Watch How It Works
            </button>
          </motion.div>

          {/* Video Demo */}
          <motion.div 
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
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

                {/* Play Overlay */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer group"
                  >
                    <div className="text-center flex flex-col items-center justify-center">
                      <div className="w-28 h-28 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                        <Play className="w-14 h-14 text-white ml-2" fill="white" />
                      </div>
                      <p className="text-white text-xl font-bold mt-6 drop-shadow-2xl">
                        See Creativeklux in Action
                      </p>
                    </div>
                  </div>
                )}

                {/* Pause on Hover */}
                {isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-center h-full">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl">
                        <Pause className="w-10 h-10 text-gray-900" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}