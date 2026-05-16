'use client';

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const creatives = [
  {
    badge: '🚀 High-Converting Ads',
    badgeColor: '#1d4ed8',
    badgeBg: '#dbeafe',
    title: 'Ads Creatives',
    description: 'Launch scroll-stopping ad campaigns that drive clicks and sales. Create stunning ad creatives optimized for every platform—from Facebook to TikTok—in minutes, not hours.',
    image: '/images/ads-creative-image.png',
    accent: '#1447e6',
    cardBg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    features: [
      { icon: '📸', title: 'Image Ads', description: 'Eye-catching static ads with proven templates that boost CTR by 3x' },
      { icon: '🎬', title: 'Video Ads', description: 'Engaging video ads optimized for mobile feeds and stories' },
      { icon: '🎮', title: 'Interactive Ads', description: 'Swipeable carousels and polls that drive 5x more engagement' },
      { icon: '🕹️', title: 'Playable Ads', description: 'Mini-game ads that let users try before they buy' },
    ],
  },
  {
    badge: '📱 Viral Social Content',
    badgeColor: '#c2410c',
    badgeBg: '#ffedd5',
    title: 'Social Creatives',
    description: "Dominate the feed with content designed to stop the scroll. Create platform-perfect posts, stories, and reels that your audience can't help but share.",
    image: '/images/social-creatives-image.png',
    accent: '#f97316',
    cardBg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
    features: [
      { icon: '📷', title: 'Posts', description: 'Perfectly sized posts with captions and hashtags that get discovered' },
      { icon: '🎞️', title: 'Stories & Reels', description: 'Vertical videos formatted for maximum watch time and shares' },
      { icon: '🖼️', title: 'Banners + Covers', description: 'Professional headers for LinkedIn, YouTube, and Facebook profiles' },
      { icon: '🔥', title: 'Memes & Trends', description: 'Jump on trending formats before they peak with AI suggestions' },
    ],
  },
  {
    badge: '✨ Professional Design',
    badgeColor: '#15803d',
    badgeBg: '#dcfce7',
    title: 'Designer Creatives',
    description: 'Create brand assets that look like you hired an expensive agency. From logos to infographics, get professional designs without the professional price tag.',
    image: '/images/designer-image.png',
    accent: '#22c55e',
    cardBg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    features: [
      { icon: '🎨', title: 'Logos & Identity', description: 'Memorable logos and complete brand kits in your signature style' },
      { icon: '🎴', title: 'Business Cards', description: 'Premium contact cards that make lasting first impressions' },
      { icon: '🎯', title: 'Banners', description: 'High-resolution banners for events, websites, and storefronts' },
      { icon: '📊', title: 'Infographics', description: 'Data storytelling that turns complex info into shareable visuals' },
    ],
  },
  {
    badge: '🪄 AI-Powered Magic',
    badgeColor: '#7c3aed',
    badgeBg: '#ede9fe',
    title: 'Magic Studio',
    description: 'Unleash the power of AI to create impossibly good content. Transform text into stunning visuals, generate variations instantly, and produce pro-quality videos—all with simple prompts.',
    image: '/images/magic-studio-image.png',
    accent: '#8b5cf6',
    cardBg: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)',
    features: [
      { icon: '✨', title: 'Text to Image', description: 'Type what you imagine, get photorealistic images in seconds' },
      { icon: '🎥', title: 'Text to Video', description: 'Turn scripts into full videos with AI-generated scenes and motion' },
      { icon: '🔄', title: 'Image Variations', description: 'Generate endless versions to A/B test what works best' },
      { icon: '🎙️', title: 'Script to Video', description: 'Complete narrated videos from just a text script—no recording needed' },
    ],
  },
];

const N = creatives.length;

function PanelContent({ item, index }) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const imageOnRight = index % 2 === 0;

  const handleGetStarted = () => {
    setLoadingBtn(true);
    setTimeout(() => { window.location.href = '../pages/pricing'; }, 400);
  };

  const Loader = () => (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );

  return (
    <div className="w-full grid lg:grid-cols-2 gap-10 xl:gap-20 items-center px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className={`flex flex-col gap-5 max-w-lg ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
        <span
          className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
          style={{ background: item.badgeBg, color: item.badgeColor }}
        >
          {item.badge}
        </span>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
          {item.title}
        </h3>
        <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {item.features.map((f, i) => (
            <div key={i} className="flex flex-col gap-1.5 p-3.5 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl">{f.icon}</span>
              <p className="font-semibold text-gray-800 text-sm leading-tight">{f.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleGetStarted}
            disabled={loadingBtn}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 disabled:opacity-70"
            style={{ background: item.accent }}
          >
            Get Started {loadingBtn && <Loader />}
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">
            Learn More
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={imageOnRight ? 'lg:order-2' : 'lg:order-1'}>
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[460px] lg:h-[500px]"
          style={{ background: item.cardBg }}
        >
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: item.accent }} />
          <div className="relative w-full h-full">
            <Image src={item.image} alt={item.title} fill className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreativeSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // Divide 0-1 into N equal buckets: 0→panel0, 1/N→panel1, etc.
    // Clamp so we never go below 0 or above N-1
    const next = Math.max(0, Math.min(N - 1, Math.floor(progress * N)));
    setActiveIndex(prev => {
      if (next !== prev) {
        setAnimKey(k => k + 1);
        return next;
      }
      return prev;
    });
  });

  const item = creatives[activeIndex];

  return (
    <section>
      <style>{`
        @keyframes ck-panel-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ck-fadein {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Section header */}
      <div className="bg-white pt-16 sm:pt-20 pb-8 text-center px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
          style={{ opacity: 0, animation: 'ck-fadein 0.5s ease forwards' }}>
          Creatives
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          style={{ opacity: 0, animation: 'ck-fadein 0.5s ease 0.1s forwards' }}>
          Unleash your creativity without limits. Design professional ads, viral social content,
          and stunning brand assets—all with AI.
        </p>
      </div>

      {/* Scroll driver: N × 100vh, each 100vh = one panel's scroll budget */}
      <div ref={containerRef} style={{ height: `${N * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col">

          {/* Tinted bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: item.cardBg, opacity: 0.1, transition: 'background 0.4s ease' }}
          />

          {/* Active panel — key forces CSS animation restart on every change */}
          <div
            key={animKey}
            className="flex-1 flex items-center"
            style={{ animation: 'ck-panel-in 0.45s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <PanelContent item={item} index={activeIndex} />
          </div>

          {/* Bottom progress bar + label */}
          <div className="flex items-center justify-center gap-2.5 pb-8 shrink-0 relative z-10">
            <span className="text-xs font-medium mr-1 transition-colors duration-300" style={{ color: item.accent }}>
              {item.title}
            </span>
            {creatives.map((c, i) => (
              <div key={i} className="h-1.5 rounded-full" style={{
                width: i === activeIndex ? '36px' : '8px',
                background: i === activeIndex ? c.accent : '#d1d5db',
                transition: 'width 0.4s ease, background 0.4s ease',
              }} />
            ))}
          </div>

          {/* Scroll hint on first panel */}
          <div
            className="absolute bottom-8 right-8 flex items-center gap-1.5 text-xs text-gray-400 select-none pointer-events-none"
            style={{ opacity: activeIndex === 0 ? 1 : 0, transition: 'opacity 0.4s ease' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            Scroll to explore
          </div>
        </div>
      </div>

      {/* Fixed right dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 hidden lg:flex">
        {creatives.map((c, i) => (
          <div key={i} className="rounded-full" style={{
            width: '8px', height: '8px',
            background: i === activeIndex ? c.accent : '#d1d5db',
            transform: i === activeIndex ? 'scale(1.5)' : 'scale(1)',
            transition: 'background 0.3s ease, transform 0.3s ease',
          }} />
        ))}
      </div>
    </section>
  );
}