"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, X } from 'lucide-react';

const CREATIVES = {
  ads: [
    { id: 'image-ads', name: 'Image Ads Creatives', icon: '📸', bg: 'from-blue-50 to-purple-100' },
    { id: 'video-ads', name: 'Video Ads Creatives', icon: '🎬', bg: 'from-purple-50 to-pink-100' },
    { id: 'interactive-ads', name: 'Interactive Ads Creatives', icon: '🎮', bg: 'from-cyan-50 to-blue-100' },
    { id: 'playable-ads', name: 'Playable Ads Creatives', icon: '🕹️', bg: 'from-green-50 to-emerald-100' },
  ],
  social: [
    { id: 'social-posts', name: 'Social Posts', icon: '📱', bg: 'from-orange-50 to-pink-100' },
    { id: 'stories', name: 'Stories, Reels & Shorts', icon: '▶️', bg: 'from-purple-50 via-pink-100 to-red-100' },
    { id: 'memes', name: 'Memes & Trends', icon: '😂', bg: 'from-lime-50 to-green-100' },
  ],
  designer: [
    { id: 'banners', name: 'Banners + Covers', icon: '🖼️', bg: 'from-indigo-50 to-purple-100' },
    { id: 'thumbnails', name: 'Thumbnails', icon: '🎞️', bg: 'from-red-50 to-orange-100' },
    { id: 'business-cards', name: 'Business Cards', icon: '💼', bg: 'from-gray-100 to-slate-200' },
    { id: 'logos', name: 'Logos & Brand Identity', icon: '⚡', bg: 'from-violet-50 to-purple-100' },
    { id: 'flyers', name: 'Flyers', icon: '📄', bg: 'from-yellow-50 to-red-100' },
    { id: 'brochures', name: 'Brochures', icon: '📋', bg: 'from-sky-50 to-indigo-100' },
    { id: 'posters', name: 'Posters', icon: '🎨', bg: 'from-rose-50 to-purple-100' },
    { id: 'infographics', name: 'Infographics', icon: '📊', bg: 'from-teal-50 to-cyan-100' },
    { id: 'presentations', name: 'Presentation Decks', icon: '📽️', bg: 'from-amber-50 to-orange-100' },
    { id: 'packaging', name: 'Packaging Mockups', icon: '📦', bg: 'from-emerald-50 to-teal-100' },
  ],
  magic: [
    { id: 'text-to-image', name: 'Text to Image', icon: '✨', bg: 'from-orange-50 via-pink-100 to-purple-100' },
    { id: 'text-to-video', name: 'Text to Video', icon: '🎥', bg: 'from-blue-50 to-purple-100' },
    { id: 'image-variations', name: 'Image to Variations', icon: '🔄', bg: 'from-green-50 to-cyan-100' },
    { id: 'script-to-video', name: 'Script to Voiceover to Video', icon: '🎙️', bg: 'from-orange-50 to-pink-100' },
    { id: 'audio-to-text', name: 'Audio to Text', icon: '🎧', bg: 'from-white to-white' },
    { id: 'persona-generator', name: 'Persona-based Generator', icon: '👤', bg: 'from-cyan-50 to-indigo-100' },
    { id: 'text-to-audio', name: 'Text to Audio', icon: '🔊', bg: 'from-yellow-50 to-orange-100' },
  ]
};

const TABS = [
  { id: 'ads', name: 'Ads Creatives', icon: '🎯' },
  { id: 'social', name: 'Social Creatives', icon: '📱' },
  { id: 'designer', name: 'Designer Creatives', icon: '🎨' },
  { id: 'magic', name: 'Magic Studio', icon: '✨' },
];

const PLATFORMS = [
    'Facebook',
    'Instagram',
    'TikTok',
    'YouTube',
    'LinkedIn',
    'Twitter / X',
    'Pinterest',
    'Snapchat',
    'Google Ads',
    'Meta Ads',
    'Shopify',
    'Amazon',
    'Etsy',
    'WordPress',
    'Substack',
    'Medium',
    'Beehiiv',
    'Ghost',
    'Wix',
    'Squarespace',
    'Webflow',
    'Reddit',
    'Discord',
    'Twitch',
    'Spotify Ads',
    'Apple Podcasts',
    'Your Website',
    'Everywhere'
];

export default function CreativeSelectionModal({ isOpen, onClose, selectedCreative, setSelectedCreative }) {
    const [activeTab, setActiveTab] = useState(null);
    const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);

    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(() => {
            setCurrentPlatformIndex((prev) => (prev + 1) % PLATFORMS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [isOpen]);

    if (!isOpen) return null;

    const tabCreatives = CREATIVES[activeTab] || [];

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-screen overflow-y-auto relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-6 right-6 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                <div className="p-8 lg:p-12">
                    <h2 className="text-4xl bg-linear-to-r from-blue-800 via-blue-600 to-purple-500 bg-clip-text text-transparent font-bold text-center mb-4">Set Up Your Ad Campaign in a Snap</h2>
                    <p className="text-center text-lg font-medium text-gray-800 mb-10">Choose what you want to create</p>

                    <div className="grid lg:grid-cols-2 gap-4 items-start">
                        {/* LEFT: Tabs and Creative Selection */}
                        <div className="flex flex-col gap-6">
                            {/* Horizontal Tabs */}
                            <div className="flex gap-2 border-b border-gray-200 flex-wrap">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            setSelectedCreative(null);
                                        }}
                                        className={`px-2 py-2 text-sm hover:bg-gray-50  transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                                            activeTab === tab.id
                                                ? 'border-b-2 border-blue-600'
                                                : ''
                                        }`}
                                    >
                                        <span>{tab.icon}</span>
                                        {tab.name}
                                    </button>
                                ))}
                            </div>

                            {/* Creatives Grid or Animated Message */}
                            {!activeTab ? (
                                <div className="relative w-full h-[350px] flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden">
                                    {/* Animated Illustration */}
                                    <div className="flex flex-col items-center justify-center gap-4 text-center px-6">
                                        <div className="text-6xl animate-bounce">
                                            <ArrowUp className="w-10 h-14 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800">Select a Creative</p>
                                            <p className="text-sm text-gray-600 mt-2">Click on a tab above to browse creatives</p>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            {TABS.map((tab) => (
                                                <div
                                                    key={tab.id}
                                                    className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"
                                                    style={{
                                                        animationDelay: `${TABS.indexOf(tab) * 0.1}s`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-3 animate-in fade-in duration-300">
                                    {tabCreatives.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setSelectedCreative(item.id)}
                                            className={`px-3 py-1 rounded-lg border bg-gray-100 border-gray-200 hover:bg-gray-50 cursor-pointer flex items-center gap-2 transition-all duration-200  ${
                                                selectedCreative === item.id
                                                    ? 'border-blue-600 animate-pulse shadow-md ring-2 ring-blue-600'
                                                    : 'border-gray-200 '
                                            }`}
                                        >
                                            <div className="text-lg">{item.icon}</div>
                                            <span className="font-medium text-xs">{item.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* RIGHT: Rotating Platform Slider */}
                        <div className="relative flex flex-col items-center justify-center">
                            <div className="relative w-96 h-96 flex items-center justify-center">

                                {PLATFORMS.map((platform, i) => {
                                    // Only show 8 surrounding items
                                    const visibleCount = 8;

                                    // Convert to circular index
                                    const offset = (i - currentPlatformIndex + PLATFORMS.length) % PLATFORMS.length;

                                    if (offset >= visibleCount) return null; // hide the rest

                                    const angle = (offset / visibleCount) * 360;
                                    const distance = 150;

                                    const x = Math.cos((angle * Math.PI) / 180) * distance;
                                    const y = Math.sin((angle * Math.PI) / 180) * distance;

                                    const isCurrent = offset === 0;

                                    return (
                                        <div
                                            key={platform}
                                            className={`absolute font-bold text-lg transition-all duration-700 whitespace-nowrap ${isCurrent ? "text-blue-600 scale-125" : "text-gray-400"
                                                }`}
                                            style={{
                                                left: "50%",
                                                top: "50%",
                                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                                opacity: isCurrent ? 1 : 0.5,
                                            }}
                                        >
                                           →  {platform}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Continue Button */}
                    <div className="mt-12 text-center">
                        <button
                            disabled={!selectedCreative}
                            onClick={onClose}
                            className={`px-8 py-2 cursor-pointer rounded-lg font-semibold text-lg flex items-center justify-center gap-3 mx-auto transition-all ${selectedCreative
                                ? 'bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}