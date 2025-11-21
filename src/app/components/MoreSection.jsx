'use client';

export default function MoreSection() {
  const features = [
    {
      title: 'Sell your own digital products and link to your favorite affiliate brands',
      gradient: 'from-yellow-300 via-orange-300 to-orange-400',
      mockup: 'phone-store',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop'
    },
    {
      title: 'Monitor your growth every day with best-in-class analytics',
      gradient: 'from-green-200 via-green-300 to-green-200',
      mockup: 'analytics-earnings'
    },
    {
      title: 'Own your data and use your stats to get paid what you deserve',
      gradient: 'from-blue-300 via-purple-300 to-purple-400',
      mockup: 'analytics-stats'
    },
    {
      title: 'Track your audience growth and engagement metrics',
      gradient: 'from-blue-200 via-blue-300 to-cyan-300',
      mockup: 'followers-engagement'
    },
    {
      title: 'Build and grow your email list with powerful tools',
      gradient: 'from-purple-200 via-purple-300 to-indigo-300',
      mockup: 'email-list'
    },
    {
      title: 'Create stunning mobile-first pages that convert',
      gradient: 'from-yellow-200 via-amber-300 to-orange-300',
      mockup: 'mobile-preview',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Become the next big thing<br />with Creative Klux
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
            Wherever you are in your creator journey, Creative Klux has the tools you need to level up and grow your income.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
    <div className="group">
      {/* Card Container */}
      <div className={`relative rounded-xl bg-linear-to-br cursor-pointer ${feature.gradient} p-6 sm:p-8 overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}>
        {/* Mockup Content */}
        <div className="relative h-64 sm:h-80 ">
          {feature.mockup === 'phone-store' && <PhoneStoreMockup image={feature.image} />}
          {feature.mockup === 'analytics-earnings' && <AnalyticsEarningsMockup />}
          {feature.mockup === 'analytics-stats' && <AnalyticsStatsMockup />}
          {feature.mockup === 'followers-engagement' && <FollowersEngagementMockup />}
          {feature.mockup === 'email-list' && <EmailListMockup />}
          {feature.mockup === 'mobile-preview' && <MobilePreviewMockup image={feature.image} />}
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-lg sm:text-xl font-medium text-gray-900 leading-snug">
        {feature.title}
      </p>
    </div>
  );
}

function PhoneStoreMockup({ image }) {
  return (
    <div className="relative h-full flex items-center justify-center">
      {/* Phone Device */}
      <div className="relative w-48 sm:w-56">
        <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-[2rem] p-2 shadow-2xl">
          <div className="bg-white rounded-[1.7rem] overflow-hidden">
            {/* Phone Content */}
            <div className="relative h-72 sm:h-80 bg-white">
              {/* Profile Header */}
              <div className="text-center pt-4 pb-3 bg-gradient-to-b from-pink-50 to-white">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-2">
                  <img src={image} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-bold text-gray-900">ELIZABETH KANE</p>
                <div className="flex justify-center space-x-2 mt-1">
                  <span className="text-xs">📷</span>
                  <span className="text-xs">🎵</span>
                  <span className="text-xs">🐦</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Shop my faves</p>
              </div>

              {/* Product Cards */}
              <div className="px-3 space-y-2">
                <div className="relative h-16 bg-gradient-to-r from-pink-100 to-pink-50 rounded-xl flex items-center px-3">
                  <div className="w-12 h-12 bg-pink-200 rounded-lg"></div>
                  <div className="ml-3 flex-1">
                    <div className="h-2 bg-pink-300 rounded w-20 mb-1"></div>
                    <div className="h-2 bg-pink-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-14 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl"></div>
                <div className="h-14 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Product Card */}
        <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-2xl p-2 w-24 z-10">
          <div className="aspect-square bg-pink-200 rounded-lg mb-1"></div>
          <div className="h-1.5 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsEarningsMockup() {
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-xs">
        {/* Earnings Card */}
        <div className="bg-white rounded-2xl shadow-xl p-5 mb-4">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs text-gray-600 font-medium">Total earnings</p>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">$6,202.90</p>
          <p className="text-xs text-green-600 font-medium">+$722.98 past week</p>
          
          {/* Chart */}
          <div className="mt-4 h-24 relative">
            <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(147, 197, 253)" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path d="M 0 60 Q 25 55, 50 50 T 100 35 T 150 25 T 200 15" fill="url(#chartGradient)" />
              <path d="M 0 60 Q 25 55, 50 50 T 100 35 T 150 25 T 200 15" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
            </svg>
          </div>

          {/* Time Range Buttons */}
          <div className="flex gap-2 mt-4">
            {['1W', '1M', '3M', '1Y', 'All'].map((period) => (
              <button
                key={period}
                className={`flex-1 py-1 text-xs font-medium rounded-lg ${
                  period === '1W' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Clicks Card */}
        <div className="bg-white rounded-2xl shadow-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm">🔗</span>
              <p className="text-xs text-gray-600 font-medium">My clicks</p>
            </div>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">302</p>
          <p className="text-xs text-gray-500 mb-3">Dec 1-7</p>
          
          {/* Bar Chart */}
          <div className="flex items-end justify-between h-12">
            {[30, 40, 35, 45, 70, 50, 40].map((height, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div 
                  className={`w-2 rounded-t ${i === 4 ? 'bg-blue-600' : 'bg-gray-200'}`}
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-[8px] text-gray-400 mt-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsStatsMockup() {
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl p-5">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-lg font-bold">PA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-900">Perplexity AI</p>
            <p className="text-xs text-gray-600">You mentioned 10 times • 🎵 📷 @</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">VIEWS</p>
            <p className="text-lg font-bold text-gray-900">350.1k</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">LIKES</p>
            <p className="text-lg font-bold text-gray-900">3.4k</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">COMMENTS</p>
            <p className="text-lg font-bold text-gray-900">1.4k</p>
          </div>
        </div>

        {/* Affiliate Sales */}
        <div className="mb-4">
          <p className="text-xs text-gray-600 mb-1">AFFILIATE SALES</p>
          <p className="text-2xl font-bold text-gray-900">$1,454</p>
        </div>

        {/* Chart */}
        <div className="h-24 relative mb-4">
          <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="statsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M 0 65 L 20 60 L 40 62 L 60 55 L 80 50 L 100 45 L 120 40 L 140 38 L 160 30 L 180 25 L 200 20" fill="url(#statsGradient)" />
            <path d="M 0 65 L 20 60 L 40 62 L 60 55 L 80 50 L 100 45 L 120 40 L 140 38 L 160 30 L 180 25 L 200 20" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="2" />
          </svg>
        </div>

        {/* Action Buttons */}
        <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-medium mb-2 hover:bg-gray-200 transition-colors">
          + Add affiliate product
        </button>
        <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center">
          Pitch Brand
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function FollowersEngagementMockup() {
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-xs space-y-4">
        {/* Followers Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs">👥</span>
            </div>
            <p className="text-xs text-gray-600 font-medium">FOLLOWERS</p>
          </div>
          <p className="text-4xl font-bold text-gray-900">1.4M</p>
        </div>

        {/* Engagement Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs">⚡</span>
            </div>
            <p className="text-xs text-gray-600 font-medium">ENGAGEMENT</p>
          </div>
          <p className="text-4xl font-bold text-gray-900">12.8%</p>
        </div>
      </div>
    </div>
  );
}

function EmailListMockup() {
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        {/* Email List Item */}
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
          <div className="flex-shrink-0">
            <input 
              type="checkbox" 
              checked 
              readOnly
              className="w-5 h-5 rounded border-gray-300"
            />
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">tracy_smith@gmail.com</p>
          </div>
        </div>

        {/* Additional List Items Placeholder */}
        <div className="mt-4 space-y-2">
          <div className="h-16 bg-gray-100 rounded-xl"></div>
          <div className="h-16 bg-gray-100 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

function MobilePreviewMockup({ image }) {
  return (
    <div className="relative h-full flex items-center justify-center">
      {/* Phone Device */}
      <div className="relative w-48 sm:w-52">
        <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
          <div className="bg-black rounded-[2.2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-20 h-4 bg-gray-900 rounded-full"></div>
            </div>

            {/* Phone Content */}
            <div className="relative h-72 sm:h-80">
              <img 
                src={image} 
                alt="Mobile preview"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay UI */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-300 rounded w-20 mb-1"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}