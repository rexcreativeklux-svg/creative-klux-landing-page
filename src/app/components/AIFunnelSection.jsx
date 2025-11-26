"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function AIFunnelSection() {
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

  const featureCards = [
    {
      title: "Bundle Builder",
      description: "Increase AOV by adding a product bundle builder to your ecommerce funnel",
      icon: <div className="w-6 h-6 border-2 border-gray-700 rounded"></div>
    },
    {
      title: "Upsell Builder",
      description: "Boost sales with 1-click cart upsells and post-purchase offers for returning shoppers",
      icon: (
        <div className="flex flex-col gap-1">
          <div className="w-6 h-0.5 bg-gray-700 rounded"></div>
          <div className="w-6 h-0.5 bg-gray-700 rounded"></div>
          <div className="w-6 h-0.5 bg-gray-700 rounded"></div>
        </div>
      )
    },
    {
      title: "Survey Builder",
      description: "Survey visitors to gather valuable customer insights and segment your audience",
      icon: (
        <div className="w-6 h-6 border-2 border-gray-700 rounded flex items-center justify-center">
          <div className="w-3 h-0.5 bg-gray-700 rounded"></div>
        </div>
      )
    },
    {
      title: "Sticky Bar Builder",
      description: "Promote announcement bars, remind visitors, and visualize progress to earn bonuses",
      icon: <div className="w-6 h-4 border-2 border-gray-700 rounded-sm"></div>
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Four Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featureCards.map((card, index) => (
            <div key={index} className="bg-gray-50 hover:scale-95 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {card.description}
              </p>
              <a href="#" className="text-gray-900 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                Learn more <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <span className="px-4 py-2 rounded-full bg-blue-700/20 text-xs font-semibold uppercase tracking-wide border border-blue-500/30 text-blue-600">
              AI Funnel Builder
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Launch & A/B funnels fast with AI
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            ConvertFlow's AI funnel builder empowers your team to experiment quickly, without waiting on developers
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button className="px-8 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Start For Free
            </button>
            <button className="px-8 py-3 cursor-pointer border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-lg transition-colors">
              Get Demo
            </button>
          </div>

          {/* Video Container */}
          <div className="relative max-w-5xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden border-4 border-blue-500 shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.4)" }}
            >
              <div className="aspect-video relative overflow-hidden group">
                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/poster.jpg"
                  playsInline
                  preload="metadata"
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/videos/testvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                    onClick={togglePlay}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-transform hover:scale-110">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                      <p className="text-white text-2xl font-bold drop-shadow-lg">Watch Demo</p>
                    </div>
                  </div>
                )}

                {/* Pause Button (hover when playing) */}
                {isPlaying && (
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center">
                        <Pause className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}