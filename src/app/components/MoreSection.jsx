'use client';

import Image from "next/image";

export default function MoreSection() {
  const features = [
    { title: 'Image Ads Creatives',           description: 'Create stunning image ads that convert and captivate your audience', image: '/images/image-ads.png',           bg: 'bg-linear-to-br from-blue-50 to-purple-100' },
    { title: 'Video Ads Creatives',           description: 'Produce engaging video ads with professional motion graphics', image: '/images/video-ads.png',           bg: 'bg-linear-to-br from-purple-50 to-pink-100' },
    { title: 'Interactive Ads Creatives',     description: 'Build interactive ads that boost engagement and click-through rates', image: '/images/interactive-ads.gif',     bg: 'bg-linear-to-br from-cyan-50 to-blue-100' },
    { title: 'Playable Ads Creatives',        description: 'Design playable ads that let users experience your product instantly', image: '/images/playable-ads.png',        bg: 'bg-linear-to-br from-green-50 to-emerald-100' },
    { title: 'Social Posts',                  description: 'Craft eye-catching social media posts that drive engagement', image: '/images/social-posts.png',        bg: 'bg-linear-to-br from-orange-50 to-pink-100' },
    { title: 'Stories, Reels & Shorts',       description: 'Create viral Stories, Reels, and Shorts in minutes', image: '/images/stories-reels.gif',       bg: 'bg-linear-to-br from-purple-50 via-pink-100 to-red-100' },
    { title: 'Banners + Covers',              description: 'Design professional banners and covers for all platforms', image: '/images/banners-covers.png',      bg: 'bg-linear-to-br from-indigo-50 to-purple-100' },
    { title: 'Thumbnails',                    description: 'Generate click-worthy thumbnails that boost views', image: '/images/thumbnails.png',          bg: 'bg-linear-to-br from-red-50 to-orange-100' },
    { title: 'Memes & Trends',                description: 'Jump on trends with memes and viral content templates', image: '/images/memes-trends.png',        bg: 'bg-linear-to-br from-lime-50 to-green-100' },
    { title: 'Business Cards',                description: 'Design sleek business cards that make lasting impressions', image: '/images/business-cards.png',      bg: 'bg-linear-to-br from-gray-100 to-slate-200' },
    { title: 'Logos & Brand Identity',        description: 'Build logos and complete brand identities from scratch', image: '/images/logos-brand.png',         bg: 'bg-linear-to-br from-violet-50 to-purple-100' },
    { title: 'Flyers',                        description: 'Create attention-grabbing flyers for any event or promotion', image: '/images/flyers.png',              bg: 'bg-linear-to-br from-yellow-50 to-red-100' },
    { title: 'Brochures',                     description: 'Produce professional brochures that showcase your business', image: '/images/brochures.png',           bg: 'bg-linear-to-br from-sky-50 to-indigo-100' },
    { title: 'Posters',                       description: 'Design striking posters that command attention', image: '/images/posters.png',             bg: 'bg-linear-to-br from-rose-50 to-purple-100' },
    { title: 'Infographics',                  description: 'Build data-driven infographics that tell compelling stories', image: '/images/infographics.png',        bg: 'bg-linear-to-br from-teal-50 to-cyan-100' },
    { title: 'Presentation Decks',            description: 'Create stunning presentation decks that wow your audience', image: '/images/presentations.png',       bg: 'bg-linear-to-br from-amber-50 to-orange-100' },
    { title: 'Packaging Mockups',             description: 'Visualize product packaging with realistic mockups', image: '/images/packaging.png',           bg: 'bg-linear-to-br from-emerald-50 to-teal-100' },
    { title: 'Text to Image',                 description: 'Transform text into stunning images with AI in seconds', image: '/images/text-to-image.png',       bg: 'bg-linear-to-br from-orange-50 via-pink-100 to-purple-100' },
    { title: 'Text to Video',                 description: 'Generate professional videos from simple text prompts', image: '/images/text-to-video.png',       bg: 'bg-linear-to-br from-blue-50 to-purple-100' },
    { title: 'Image to Variations',           description: 'Create endless variations from a single image concept', image: '/images/image-variations.png',    bg: 'bg-linear-to-br from-green-50 to-cyan-100' },
    { title: 'Script to Voiceover to Video',  description: 'Turn scripts into complete videos with AI voiceovers', image: '/images/script-to-video.png',     bg: 'bg-linear-to-br from-orange-50 to-pink-100' },
    { title: 'Audio to Text',                 description: 'Convert audio to accurate text transcriptions instantly', image: '/images/audio-to-text.png',       bg: 'bg-white' },
    { title: 'Persona-based Generator',       description: 'Generate content tailored to specific audience personas', image: '/images/persona-generator.png',   bg: 'bg-linear-to-br from-cyan-50 to-indigo-100' },
    { title: 'Text to Audio',                 description: 'Create natural-sounding voiceovers from any text', image: '/images/text-to-audio.png',       bg: 'bg-linear-to-br from-yellow-50 to-orange-100' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Everything you need to create,<br />all in one platform
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From ads to social content, design work to AI magic—Creative Klux has every tool to bring your creative vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className={` rounded-lg p-4 bg-gray-50 gap-5 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-200 flex flex-col h-full`}>
      <div className="">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
      </div>
    
        <div className="relative w-full  h-64">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
   
      </div>
    </div>
  );
}