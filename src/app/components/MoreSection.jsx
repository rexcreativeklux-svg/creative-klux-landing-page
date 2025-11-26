'use client';

const MOCKUP_COMPONENTS = {
  'image-ads': ImageAdsMockup,
  'video-ads': VideoAdsMockup,
  'interactive-ads': InteractiveAdsMockup,
  'playable-ads': PlayableAdsMockup,
  'social-posts': SocialPostsMockup,
  'stories-reels': StoriesReelsMockup,
  'banners-covers': BannersCoversMockup,
  'thumbnails': ThumbnailsMockup,
  'memes-trends': MemesTrendsMockup,
  'business-cards': BusinessCardsMockup,
  'logos-brand': LogosBrandMockup,
  'flyers': FlyersMockup,
  'brochures': BrochuresMockup,
  'posters': PostersMockup,
  'infographics': InfographicsMockup,
  'presentations': PresentationsMockup,
  'packaging': PackagingMockup,
  'text-to-image': TextToImageMockup,
  'text-to-video': TextToVideoMockup,
  'image-variations': ImageVariationsMockup,
  'script-to-video': ScriptToVideoMockup,
  'audio-to-text': AudioToTextMockup,
  'persona-generator': PersonaGeneratorMockup,
  'text-to-audio': TextToAudioMockup,
};

export default function MoreSection() {
  const features = [
    { title: 'Image Ads Creatives',           description: 'Create stunning image ads that convert and captivate your audience', mockup: 'image-ads',           bg: 'bg-linear-to-br from-blue-50 to-purple-100' },
    { title: 'Video Ads Creatives',           description: 'Produce engaging video ads with professional motion graphics', mockup: 'video-ads',           bg: 'bg-linear-to-br from-purple-50 to-pink-100' },
    { title: 'Interactive Ads Creatives',     description: 'Build interactive ads that boost engagement and click-through rates', mockup: 'interactive-ads',     bg: 'bg-linear-to-br from-cyan-50 to-blue-100' },
    { title: 'Playable Ads Creatives',        description: 'Design playable ads that let users experience your product instantly', mockup: 'playable-ads',        bg: 'bg-linear-to-br from-green-50 to-emerald-100' },
    { title: 'Social Posts',                  description: 'Craft eye-catching social media posts that drive engagement', mockup: 'social-posts',        bg: 'bg-linear-to-br from-orange-50 to-pink-100' },
    { title: 'Stories, Reels & Shorts',       description: 'Create viral Stories, Reels, and Shorts in minutes', mockup: 'stories-reels',       bg: 'bg-linear-to-br from-purple-50 via-pink-100 to-red-100' },
    { title: 'Banners + Covers',              description: 'Design professional banners and covers for all platforms', mockup: 'banners-covers',      bg: 'bg-linear-to-br from-indigo-50 to-purple-100' },
    { title: 'Thumbnails',                    description: 'Generate click-worthy thumbnails that boost views', mockup: 'thumbnails',          bg: 'bg-linear-to-br from-red-50 to-orange-100' },
    { title: 'Memes & Trends',                description: 'Jump on trends with memes and viral content templates', mockup: 'memes-trends',        bg: 'bg-linear-to-br from-lime-50 to-green-100' },
    { title: 'Business Cards',                description: 'Design sleek business cards that make lasting impressions', mockup: 'business-cards',      bg: 'bg-linear-to-br from-gray-100 to-slate-200' },
    { title: 'Logos & Brand Identity',        description: 'Build logos and complete brand identities from scratch', mockup: 'logos-brand',         bg: 'bg-linear-to-br from-violet-50 to-purple-100' },
    { title: 'Flyers',                        description: 'Create attention-grabbing flyers for any event or promotion', mockup: 'flyers',              bg: 'bg-linear-to-br from-yellow-50 to-red-100' },
    { title: 'Brochures',                     description: 'Produce professional brochures that showcase your business', mockup: 'brochures',           bg: 'bg-linear-to-br from-sky-50 to-indigo-100' },
    { title: 'Posters',                       description: 'Design striking posters that command attention', mockup: 'posters',             bg: 'bg-linear-to-br from-rose-50 to-purple-100' },
    { title: 'Infographics',                  description: 'Build data-driven infographics that tell compelling stories', mockup: 'infographics',        bg: 'bg-linear-to-br from-teal-50 to-cyan-100' },
    { title: 'Presentation Decks',            description: 'Create stunning presentation decks that wow your audience', mockup: 'presentations',       bg: 'bg-linear-to-br from-amber-50 to-orange-100' },
    { title: 'Packaging Mockups',             description: 'Visualize product packaging with realistic mockups', mockup: 'packaging',           bg: 'bg-linear-to-br from-emerald-50 to-teal-100' },
    { title: 'Text to Image',                 description: 'Transform text into stunning images with AI in seconds', mockup: 'text-to-image',       bg: 'bg-linear-to-br from-orange-50 via-pink-100 to-purple-100' },
    { title: 'Text to Video',                 description: 'Generate professional videos from simple text prompts', mockup: 'text-to-video',       bg: 'bg-linear-to-br from-blue-50 to-purple-100' },
    { title: 'Image to Variations',           description: 'Create endless variations from a single image concept', mockup: 'image-variations',    bg: 'bg-linear-to-br from-green-50 to-cyan-100' },
    { title: 'Script to Voiceover to Video',  description: 'Turn scripts into complete videos with AI voiceovers', mockup: 'script-to-video',     bg: 'bg-linear-to-br from-orange-50 to-pink-100' },
    { title: 'Audio to Text',                 description: 'Convert audio to accurate text transcriptions instantly', mockup: 'audio-to-text',       bg: 'bg-white' },
    { title: 'Persona-based Generator',       description: 'Generate content tailored to specific audience personas', mockup: 'persona-generator',   bg: 'bg-linear-to-br from-cyan-50 to-indigo-100' },
    { title: 'Text to Audio',                 description: 'Create natural-sounding voiceovers from any text', mockup: 'text-to-audio',       bg: 'bg-linear-to-br from-yellow-50 to-orange-100' },
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
  const MockupComponent = MOCKUP_COMPONENTS[feature.mockup];

  return (
    <div className={`${feature.bg} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-200/80 flex flex-col h-full`}>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
      </div>
      <div className="flex-1 flex items-center justify-center mt-auto">
        {MockupComponent && <MockupComponent />}
      </div>
    </div>
  );
}

/* === HYDRATION-SAFE ANIMATED WAVEFORM === */
function AnimatedWaveform({ barCount = 12, color = "violet-600", maxHeight = 24 }) {
  return (
    <div className="flex items-end justify-center gap-0.5 h-8">
      {[...Array(barCount)].map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded ${color === 'white/60' ? 'bg-white/60' : `bg-${color}`} animate-wave`}
          style={{
            animationDelay: `${i * 0.08}s`,
            height: `${maxHeight}px`,
          }}
        />
      ))}
    </div>
  );
}

/* === ALL MOCKUPS (canonical Tailwind classes only) === */

function ImageAdsMockup() {
  return (
    <div className="w-full max-w-40 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
      <div className="h-28 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-4xl mb-2">Photo</div>
          <div className="text-xs font-bold">IMAGE AD</div>
        </div>
      </div>
      <div className="bg-white p-3 space-y-1.5">
        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
        <div className="h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold mt-2">
          SHOP NOW
        </div>
      </div>
    </div>
  );
}

function VideoAdsMockup() {
  return (
    <div className="w-full max-w-40 bg-black rounded-xl shadow-lg overflow-hidden relative">
      <div className="h-36 bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-2">
            <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
          </div>
          <div className="text-xs font-bold">VIDEO AD</div>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur rounded px-2 py-1 text-white text-xs text-center">
        0:15
      </div>
    </div>
  );
}

function InteractiveAdsMockup() {
  return (
    <div className="w-full max-w-40 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg p-4">
      <div className="text-white text-center">
        <div className="text-3xl mb-2">Tap</div>
        <div className="text-xs font-bold mb-3">TAP TO EXPLORE</div>
        <div className="flex gap-2 justify-center">
          <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
          <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
          <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

function PlayableAdsMockup() {
  return (
    <div className="w-full max-w-40 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-4">
      <div className="text-white text-center mb-3">
        <div className="text-3xl mb-1">Gamepad</div>
        <div className="text-xs font-bold">TRY NOW</div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square bg-white/30 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}

function SocialPostsMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="p-3 flex items-center gap-2 border-b border-gray-100">
        <div className="w-7 h-7 bg-linear-to-br from-pink-500 to-purple-600 rounded-full"></div>
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded w-16 mb-1"></div>
          <div className="h-1.5 bg-gray-100 rounded w-10"></div>
        </div>
      </div>
      <div className="h-32 bg-linear-to-br from-orange-400 to-pink-500"></div>
      <div className="p-3 flex gap-3">
        <span className="text-lg">Like</span>
        <span className="text-lg">Comment</span>
        <span className="text-lg">Share</span>
      </div>
    </div>
  );
}

function StoriesReelsMockup() {
  return (
    <div className="w-24 bg-black rounded-2xl shadow-lg overflow-hidden">
      <div className="h-44 bg-linear-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-4xl mb-2">Play</div>
          <div className="text-xs font-bold">REEL</div>
        </div>
      </div>
    </div>
  );
}

function BannersCoversMockup() {
  return (
    <div className="w-full max-w-48 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="h-20 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-base font-bold">YOUR BRAND</div>
          <div className="text-xs mt-1 opacity-90">PROFESSIONAL COVER</div>
        </div>
      </div>
    </div>
  );
}

function ThumbnailsMockup() {
  return (
    <div className="w-full max-w-40 bg-red-600 rounded-lg shadow-lg overflow-hidden relative">
      <div className="h-24 bg-linear-to-br from-red-500 to-orange-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-3xl font-black mb-1">CLICK</div>
          <div className="text-lg font-bold">ME!</div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-0.5 rounded font-medium">
        10:24
      </div>
    </div>
  );
}

function MemesTrendsMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="h-32 bg-linear-to-br from-lime-400 to-green-500 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-4xl mb-2">Laughing Face</div>
          <div className="text-sm font-black text-white drop-shadow-lg">TRENDING</div>
          <div className="text-sm font-black text-white drop-shadow-lg">MEME</div>
        </div>
      </div>
    </div>
  );
}

function BusinessCardsMockup() {
  return (
    <div className="w-full max-w-40 h-24 bg-linear-to-br from-slate-800 to-gray-900 rounded-lg shadow-lg p-3 text-white">
      <div className="text-xs font-bold mb-1">JOHN DOE</div>
      <div className="text-xs opacity-70 mb-2">Creative Director</div>
      <div className="text-xs opacity-50 space-y-0.5">
        <div>Email: john@email.com</div>
        <div>Phone: +1 234 567 890</div>
      </div>
    </div>
  );
}

function LogosBrandMockup() {
  return (
    <div className="w-full max-w-40 space-y-3">
      <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center border border-gray-200">
        <div className="w-14 h-14 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-black text-xl">
          CK
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-6 bg-violet-600 rounded"></div>
        <div className="h-6 bg-fuchsia-600 rounded"></div>
        <div className="h-6 bg-purple-600 rounded"></div>
      </div>
    </div>
  );
}

function FlyersMockup() {
  return (
    <div className="w-full max-w-36 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="h-40 bg-linear-to-br from-yellow-500 via-orange-500 to-red-600 p-3 text-white">
        <div className="text-lg font-black mb-2">BIG SALE</div>
        <div className="text-4xl font-black mb-1">50%</div>
        <div className="text-xs font-bold">OFF EVERYTHING</div>
      </div>
    </div>
  );
}

function BrochuresMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="h-16 bg-linear-to-r from-sky-600 to-indigo-600"></div>
      <div className="p-3 space-y-1.5">
        <div className="h-2 bg-gray-300 rounded"></div>
        <div className="h-2 bg-gray-300 rounded w-4/5"></div>
        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
}

function PostersMockup() {
  return (
    <div className="w-full max-w-36 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="h-40 bg-linear-to-br from-rose-600 via-pink-600 to-purple-700 flex items-center justify-center text-white p-3">
        <div className="text-center">
          <div className="text-xl font-black mb-2">EVENT</div>
          <div className="text-xs mb-1">MARCH 25, 2025</div>
          <div className="text-xs font-bold">BE THERE!</div>
        </div>
      </div>
    </div>
  );
}

function InfographicsMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
      <div className="text-center mb-3">
        <div className="text-3xl font-black text-teal-600">73%</div>
        <div className="text-xs text-gray-600 font-medium">GROWTH</div>
      </div>
      <div className="space-y-2">
        <div className="h-2.5 bg-teal-500 rounded-full"></div>
        <div className="h-2.5 bg-cyan-500 rounded-full w-4/5"></div>
        <div className="h-2.5 bg-blue-500 rounded-full w-3/5"></div>
      </div>
    </div>
  );
}

function PresentationsMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="h-28 bg-linear-to-br from-amber-500 to-orange-600 p-3 text-white">
        <div className="text-base font-bold mb-2">Q4 Results</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white/20 backdrop-blur rounded p-1.5 text-center">Revenue Up</div>
          <div className="bg-white/20 backdrop-blur rounded p-1.5 text-center">Growth Right</div>
        </div>
      </div>
      <div className="flex gap-1 p-2 justify-center">
        <div className="w-6 h-4 bg-gray-300 rounded"></div>
        <div className="w-6 h-4 bg-gray-400 rounded"></div>
        <div className="w-6 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

function PackagingMockup() {
  return (
    <div className="w-full max-w-32">
      <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg shadow-lg p-4 transform hover:rotate-6 transition-transform">
        <div className="bg-white/20 backdrop-blur rounded h-20 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-xl font-black">BRAND</div>
            <div className="text-xs font-medium">PRODUCT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextToImageMockup() {
  return (
    <div className="w-full max-w-40 space-y-2">
      <div className="bg-white rounded-lg shadow border border-gray-200 p-2 text-xs text-gray-600">
        "sunset over mountains..."
      </div>
      <div className="h-28 bg-linear-to-br from-orange-500 via-pink-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white relative overflow-hidden">
        <div className="text-center relative z-10">
          <div className="text-3xl mb-1">Sparkles</div>
          <div className="text-xs font-bold">AI GENERATED</div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
      </div>
    </div>
  );
}

function TextToVideoMockup() {
  return (
    <div className="w-full max-w-40 bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
      <div className="h-32 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-3xl mb-2">Film</div>
          <div className="text-xs font-bold">AI VIDEO</div>
        </div>
      </div>
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold">
        AI
      </div>
    </div>
  );
}

function ImageVariationsMockup() {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-40">
      <div className="h-16 bg-linear-to-br from-green-500 to-teal-500 rounded-lg shadow"></div>
      <div className="h-16 bg-linear-to-br from-teal-500 to-cyan-500 rounded-lg shadow"></div>
      <div className="h-16 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg shadow"></div>
      <div className="h-16 bg-linear-to-br from-blue-500 to-green-500 rounded-lg shadow"></div>
    </div>
  );
}

function ScriptToVideoMockup() {
  return (
    <div className="w-full max-w-40 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="h-28 bg-linear-to-br from-orange-600 to-pink-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-3xl mb-1">Microphone</div>
          <div className="text-xs font-bold">VOICEOVER</div>
          <div className="text-xs">+ VIDEO</div>
        </div>
      </div>
      <div className="bg-gray-800 p-2 flex items-center justify-center gap-1">
        <div className="w-1 h-3 bg-red-500 rounded"></div>
        <div className="w-1 h-5 bg-red-500 rounded"></div>
        <div className="w-1 h-2 bg-red-500 rounded"></div>
        <div className="w-1 h-4 bg-red-500 rounded"></div>
        <div className="w-1 h-3 bg-red-500 rounded"></div>
      </div>
    </div>
  );
}

function AudioToTextMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-2xl">Music</div>
        <AnimatedWaveform barCount={10} color="violet-600" maxHeight={22} />
      </div>
      <div className="space-y-1.5">
        <div className="h-2 bg-gray-200 rounded"></div>
        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
        <div className="h-2 bg-gray-200 rounded w-4/5"></div>
      </div>
    </div>
  );
}

function TextToAudioMockup() {
  return (
    <div className="w-full max-w-40 bg-linear-to-br from-yellow-500 to-orange-600 rounded-lg shadow-lg p-3 text-white">
      <div className="text-xs mb-3 opacity-90 text-center">
        "Hello, this is your AI voice..."
      </div>
      <div className="bg-white/20 backdrop-blur rounded-full p-3 flex items-center justify-center mb-2">
        <div className="text-3xl">Speaker</div>
      </div>
      <AnimatedWaveform barCount={12} color="white/60" maxHeight={20} />
    </div>
  );
}

function PersonaGeneratorMockup() {
  return (
    <div className="w-full max-w-40 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-9 h-9 bg-linear-to-br from-cyan-500 to-indigo-600 rounded-full"></div>
        <div>
          <div className="h-2 bg-gray-300 rounded w-14 mb-1"></div>
          <div className="h-1.5 bg-gray-200 rounded w-10"></div>
        </div>
      </div>
      <div className="space-y-2 text to-text-xs">
        <div className="bg-blue-50 rounded p-2 text-center font-medium text-gray-700">Age: 25-34</div>
        <div className="bg-purple-50 rounded p-2 text-center font-medium text-gray-700">Tech-savvy</div>
      </div>
    </div>
  );
}