"use client";

import { useState, useRef } from "react";
import { Play, Pause, Sparkles, Zap, Rocket, Wand2 } from "lucide-react";

export default function CreativekluxHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const features = [
    { icon: <Zap className="w-7 h-7" />, title: "10x Faster Creation", desc: "Generate full campaigns in seconds, not hours" },
    { icon: <Rocket className="w-7 h-7" />, title: "Higher Conversions", desc: "AI-optimized visuals proven to outperform templates" },
    { icon: <Wand2 className="w-7 h-7" />, title: "One Tool, Everything", desc: "Replace Canva, Midjourney, CapCut, D-ID & more" },
    { icon: <Sparkles className="w-7 h-7" />, title: "Brand Perfect", desc: "Every asset matches your brand voice & style automatically" },
  ];

  return (
    <div className="w-full bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-white via-blue-50/30 to-purple-50/20 backdrop-blur-sm rounded-lg p-6 border border-gray-100 hover:border-blue-600 cursor-pointer hover:shadow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/5 to-purple-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider border border-gray-300 mb-8">
            <Sparkles className="w-5 h-5" />
            The Complete AI Creative Engine
          </div>

          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-8">
            Create High-Converting Ads, Social Content <br />
            & Brand Designs <span className="">in Seconds</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-5xl mx-auto mb-6">
            Creativeklux is the <span className="font-bold text-blue-600">All-in-one AI studio</span> for Agencies, Brands, Marketers, Creators, E-commerce & SMMA owners.
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Replace <strong>Canva + CapCut + Midjourney + D-ID + Meta Ads Creative Center + Playable Studio</strong> with one intelligent platform that understands your brand and generates winning creatives — instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group px-4 py-2 bg-blue-700 text-white font-medium rounded-lg cursor-pointer shadow-xl hover:shadow-purple-300/50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
              Start Creating Free
              <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-800 font-medium rounded-lg hover:border-blue-600 hover:bg-purple-50/50 transition-all cursor-pointer duration-200 hover:scale-105 backdrop-blur-sm">
              Watch How It Works
            </button>
          </div>

          {/* Video Demo */}
          <div className="relative max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-6 ring-blue-600 ring-offset-transparent">
              <div className="aspect-video relative bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/creativeklux-demo-poster.jpg"
                  playsInline
                  preload="metadata"
                  muted
                  loop
                >
                  <source src="/videos/testvideo.mp4" type="video/mp4" />
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
          </div>
        </div>
      </div>
    </div>
  );
}