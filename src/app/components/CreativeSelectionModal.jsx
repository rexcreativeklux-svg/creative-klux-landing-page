"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

// SVG Icon Components
const ImageAdsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
);

const VideoAdsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
);

const InteractiveAdsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="21 8 21 21 3 21 3 10" /><line x1="1" y1="1" x2="23" y2="1" /><polyline points="10 5 14 9 10 13" /></svg>
);

const PlayableAdsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
);

const SocialPostsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
);

const StoriesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
);

const MemesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
);

const BannersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="14" rx="2" /><polyline points="10 3 10 17 14 17 14 3" /></svg>
);

const ThumbnailsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2" ry="2" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="22" /></svg>
);

const BusinessCardsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="1" /><line x1="6" y1="7" x2="6" y2="17" /></svg>
);

const LogosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
);

const FlyersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="19" x2="12" y2="5" /></svg>
);

const BrochuresIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
);

const PostersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
);

const InfographicsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="3" x2="3" y2="21" /><line x1="3" y1="21" x2="21" y2="21" /><line x1="8" y1="12" x2="8" y2="21" /><line x1="12" y1="5" x2="12" y2="21" /><line x1="16" y1="8" x2="16" y2="21" /></svg>
);

const PresentationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 0v7M8 0v7M12 12v8M8 20h8" /></svg>
);

const PackagingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);

const TextToImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
);

const TextToVideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
);

const ImageVariationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 2.2" /></svg>
);

const ScriptToVideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
);

const AudioToTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
);

const PersonaGeneratorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

const TextToAudioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 5.54a9 9 0 0 1 0 12.92M19.07 2a13 13 0 0 1 0 20" /></svg>
);

const AdsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);

const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
);

const DesignerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
);

const MagicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 4V1m0 3l4.553-1.276M9 20v3m0-3l-4.553 1.276M7.5 4h9M4.75 10.5h14.5M5.5 17h13" /></svg>
);

// Icon wrapper component
const IconWrapper = ({ children, className = "w-5 h-5" }) => (
  <div className={`${className} flex items-center justify-center shrink-0`}>
    {children}
  </div>
);

const CREATIVES = {
  ads: [
    { id: 'image-ads', name: 'Image Ads Creatives', icon: ImageAdsIcon, bg: 'from-blue-50 to-purple-100' },
    { id: 'video-ads', name: 'Video Ads Creatives', icon: VideoAdsIcon, bg: 'from-purple-50 to-pink-100' },
    { id: 'interactive-ads', name: 'Interactive Ads Creatives', icon: InteractiveAdsIcon, bg: 'from-cyan-50 to-blue-100' },
    { id: 'playable-ads', name: 'Playable Ads Creatives', icon: PlayableAdsIcon, bg: 'from-green-50 to-emerald-100' },
  ],
  social: [
    { id: 'social-posts', name: 'Social Posts', icon: SocialPostsIcon, bg: 'from-orange-50 to-pink-100' },
    { id: 'stories', name: 'Stories, Reels & Shorts', icon: StoriesIcon, bg: 'from-purple-50 via-pink-100 to-red-100' },
    { id: 'memes', name: 'Memes & Trends', icon: MemesIcon, bg: 'from-lime-50 to-green-100' },
  ],
  designer: [
    { id: 'banners', name: 'Banners + Covers', icon: BannersIcon, bg: 'from-indigo-50 to-purple-100' },
    { id: 'thumbnails', name: 'Thumbnails', icon: ThumbnailsIcon, bg: 'from-red-50 to-orange-100' },
    { id: 'business-cards', name: 'Business Cards', icon: BusinessCardsIcon, bg: 'from-gray-100 to-slate-200' },
    { id: 'logos', name: 'Logos & Brand Identity', icon: LogosIcon, bg: 'from-violet-50 to-purple-100' },
    { id: 'flyers', name: 'Flyers', icon: FlyersIcon, bg: 'from-yellow-50 to-red-100' },
    { id: 'brochures', name: 'Brochures', icon: BrochuresIcon, bg: 'from-sky-50 to-indigo-100' },
    { id: 'posters', name: 'Posters', icon: PostersIcon, bg: 'from-rose-50 to-purple-100' },
    { id: 'infographics', name: 'Infographics', icon: InfographicsIcon, bg: 'from-teal-50 to-cyan-100' },
    { id: 'presentations', name: 'Presentation Decks', icon: PresentationsIcon, bg: 'from-amber-50 to-orange-100' },
    { id: 'packaging', name: 'Packaging Mockups', icon: PackagingIcon, bg: 'from-emerald-50 to-teal-100' },
  ],
  magic: [
    { id: 'text-to-image', name: 'Text to Image', icon: TextToImageIcon, bg: 'from-orange-50 via-pink-100 to-purple-100' },
    { id: 'text-to-video', name: 'Text to Video', icon: TextToVideoIcon, bg: 'from-blue-50 to-purple-100' },
    { id: 'image-variations', name: 'Image to Variations', icon: ImageVariationsIcon, bg: 'from-green-50 to-cyan-100' },
    { id: 'script-to-video', name: 'Script to Voiceover to Video', icon: ScriptToVideoIcon, bg: 'from-orange-50 to-pink-100' },
    { id: 'audio-to-text', name: 'Audio to Text', icon: AudioToTextIcon, bg: 'from-white to-white' },
    { id: 'persona-generator', name: 'Persona-based Generator', icon: PersonaGeneratorIcon, bg: 'from-cyan-50 to-indigo-100' },
    { id: 'text-to-audio', name: 'Text to Audio', icon: TextToAudioIcon, bg: 'from-yellow-50 to-orange-100' },
  ]
};

const TABS = [
  { id: 'ads', name: 'Ads Creatives', icon: AdsIcon },
  { id: 'social', name: 'Social Creatives', icon: SocialIcon },
  { id: 'designer', name: 'Designer Creatives', icon: DesignerIcon },
  { id: 'magic', name: 'Magic Studio', icon: MagicIcon },
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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % PLATFORMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (!selectedCreative || isLoading) return;

    setIsLoading(true);

    // Small delay to make the loader visible + smooth feel
    setTimeout(() => {
      router.push('../pages/pricing');
    }, 400);
  };

  const tabCreatives = CREATIVES[activeTab] || [];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full h-[800px] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-6 right-6 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="p-8 h-full flex flex-col justify-between lg:p-12">
          <h2 className="text-4xl mb-10 bg-linear-to-r from-blue-800 via-blue-600 to-purple-500 bg-clip-text text-transparent font-bold text-center">
            Choose what you want to create
          </h2>

          <div className="grid lg:grid-cols-2 gap-4 items-start">
            {/* LEFT: Tabs and Creative Selection */}
            <div className="flex flex-col gap-6">
              {/* Horizontal Tabs */}
              <div className="flex gap-5 flex-row justify-between border-b border-gray-200 flex-wrap">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSelectedCreative(null);
                    }}
                    className={`px-2 py-2 text-sm hover:bg-gray-50 transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeTab === tab.id
                        ? 'border-b-2 border-blue-600'
                        : ''
                      }`}
                  >

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
                      className={`px-3 py-2 rounded-lg border bg-gray-100 cursor-pointer flex items-center gap-2 transition-all duration-200 ${selectedCreative === item.id
                          ? 'border-blue-600 shadow-md ring ring-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                      <IconWrapper className="w-5 h-5 text-gray-700">
                        <item.icon />
                      </IconWrapper>
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
                  const visibleCount = 8;
                  const offset = (i - currentPlatformIndex + PLATFORMS.length) % PLATFORMS.length;

                  if (offset >= visibleCount) return null;

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
          <div className="mt-22 text-center">
            <button
              disabled={!selectedCreative || isLoading}
              onClick={handleContinue}
              className={`relative px-4 py-2 cursor-pointer rounded-lg font-semibold text-md flex items-center justify-center gap-3 mx-auto transition-all duration-300 ${selectedCreative && !isLoading
                  ? 'bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Redirecting...</span>
                </>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}