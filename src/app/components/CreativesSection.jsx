'use client';

export default function CreativeSection() {
    const creatives = [
        {
            badge: '🚀 High-Converting Ads',
            badgeColor: 'bg-blue-200 text-blue-900',
            title: 'Ads Creatives',
            description: 'Launch scroll-stopping ad campaigns that drive clicks and sales. Create stunning ad creatives optimized for every platform—from Facebook to TikTok—in minutes, not hours.',
            gradient: 'from-blue-300 via-purple-200 to-pink-200',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop',
            mockupType: 'phone',
            features: [
                {
                    icon: '📸',
                    title: 'Image Ads Creatives',
                    description: 'Eye-catching static ads with proven templates that boost CTR by 3x'
                },
                {
                    icon: '🎬',
                    title: 'Video Ads Creatives',
                    description: 'Engaging video ads optimized for mobile feeds and stories'
                },
                {
                    icon: '🎮',
                    title: 'Interactive Ads Creatives',
                    description: 'Swipeable carousels and polls that drive 5x more engagement'
                },
                {
                    icon: '🕹️',
                    title: 'Playable Ads Creatives',
                    description: 'Mini-game ads that let users try before they buy'
                }
            ]
        },
        {
            badge: '📱 Viral Social Content',
            badgeColor: 'bg-orange-200 text-orange-900',
            title: 'Social Creatives',
            description: 'Dominate the feed with content designed to stop the scroll. Create platform-perfect posts, stories, and reels that your audience can\'t help but share.',
            gradient: 'from-yellow-300 via-orange-200 to-yellow-200',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
            mockupType: 'interface',
            features: [
                {
                    icon: '📷',
                    title: 'Posts',
                    description: 'Perfectly sized posts with captions and hashtags that get discovered'
                },
                {
                    icon: '🎞️',
                    title: 'Stories/Reels/Shorts',
                    description: 'Vertical videos formatted for maximum watch time and shares'
                },
                {
                    icon: '🖼️',
                    title: 'Banners + Covers',
                    description: 'Professional headers for LinkedIn, YouTube, and Facebook profiles'
                },
                {
                    icon: '🔥',
                    title: 'Memes/Trends',
                    description: 'Jump on trending formats before they peak with AI suggestions'
                }
            ]
        },
        {
            badge: '✨ Professional Design',
            badgeColor: 'bg-green-200 text-green-900',
            title: 'Designer Creatives',
            description: 'Create brand assets that look like you hired an expensive agency. From logos to infographics, get professional designs without the professional price tag.',
            gradient: 'from-green-300 via-emerald-200 to-teal-200',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop',
            mockupType: 'phone',
            features: [
                {
                    icon: '🎨',
                    title: 'Logos & Brand Identity',
                    description: 'Memorable logos and complete brand kits in your signature style'
                },
                {
                    icon: '🎴',
                    title: 'Business Cards',
                    description: 'Premium contact cards that make lasting first impressions'
                },
                {
                    icon: '🎯',
                    title: 'Banners (Print & Digital)',
                    description: 'High-resolution banners for events, websites, and storefronts'
                },
                {
                    icon: '📊',
                    title: 'Infographics',
                    description: 'Data storytelling that turns complex info into shareable visuals'
                }
            ]
        },
        {
            badge: '🪄 AI-Powered Magic',
            badgeColor: 'bg-purple-200 text-purple-900',
            title: 'Magic Studio',
            description: 'Unleash the power of AI to create impossibly good content. Transform text into stunning visuals, generate variations instantly, and produce pro-quality videos—all with simple prompts.',
            gradient: 'from-purple-300 via-pink-200 to-purple-200',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=1000&fit=crop',
            mockupType: 'phone',
            features: [
                {
                    icon: '✨',
                    title: 'Text to Image',
                    description: 'Type what you imagine, get photorealistic images in seconds'
                },
                {
                    icon: '🎥',
                    title: 'Text to Video',
                    description: 'Turn scripts into full videos with AI-generated scenes and motion'
                },
                {
                    icon: '🔄',
                    title: 'Image to Variations',
                    description: 'Generate endless versions to A/B test what works best'
                },
                {
                    icon: '🎙️',
                    title: 'Script to Voiceover to Video',
                    description: 'Complete narrated videos from just a text script—no recording needed'
                }
            ]
        }
    ];

    return (
        <section className="py-4 sm:py-6 md:py-10 lg:py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-4">
                        Creatives
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                        Unleash your creativity without limits. Design professional ads, viral social content, and stunning brand assets—all with AI-powered tools that make you look like a pro.
                    </p>
                </div>

                {/* Feature Items */}
                <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
                    {creatives.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ feature }) {
    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Content Side - Always on Left */}
            <div className="space-y-6 sm:space-y-6 items max-w-lg lg:order-1">
                {/* Badge */}
                <div className="inline-block">
                    <span className={`${feature.badgeColor} px-4 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-base font-semibold`}>
                        {feature.badge}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-md text-gray-600 leading-relaxed">
                    {feature.description}
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.features.map((item, idx) => (
                        <FeatureCard key={idx} feature={item} />
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-[#1447e6] cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                        Get Started
                    </button>
                    <button className="text-gray-700 cursor-pointer hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 hover:underline flex items-center gap-2">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Visual Side - Always on Right */}
            <div className="lg:order-2 ">
                {feature.mockupType === 'phone' ? (
                    <PhoneMockup feature={feature} />
                ) : (
                    <InterfaceMockup feature={feature} />
                )}
            </div>
        </div>
    );
}

function FeatureCard({ feature }) {
    return (
        <div className="bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:scale-95 transition duration-200">
            <div className="flex flex-col items-start ">
                <div className="text-2xl shrink-0">
                    {feature.icon}
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function PhoneMockup({ feature }) {
    return (
        <div className={`relative sm:rounded-xl border border-gray-200 bg-linear-to-br ${feature.gradient} p-8 sm:p-12 md:p-16 lg:p-20 h-[600px] overflow-hidden`}>
            {/* Phone Device */}
            <div className="relative mx-auto w-64 sm:w-72 md:w-80 lg:w-88">
                {/* Phone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                    <div className="bg-white rounded-4xl sm:rounded-[2.5rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="flex justify-center pt-3 sm:pt-4 pb-2">
                            <div className="w-20 sm:w-24 h-5 sm:h-6 bg-gray-900 rounded-full"></div>
                        </div>

                        {/* Phone Content */}
                        <div className="relative h-[500px] sm:h-[550px] md:h-[600px] bg-white">
                            {/* Profile Image */}
                            <div className="flex justify-center pt-4 sm:pt-6 pb-4">
                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={feature.image}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="text-center px-6 pb-4">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Elizabeth</h4>
                                <div className="flex justify-center space-x-3 text-gray-600">
                                    <span className="text-sm">📷</span>
                                    <span className="text-sm">🎵</span>
                                    <span className="text-sm">🐦</span>
                                </div>
                            </div>

                            {/* Content Placeholder */}
                            <div className="px-4 space-y-3">
                                <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl"></div>
                                <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl"></div>
                                <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Customization Panel */}
                <div className="absolute -left-8 sm:-left-12 top-12 sm:top-16 bg-white rounded-2xl shadow-2xl p-3 sm:p-4 space-y-2 sm:space-y-3 w-24 sm:w-28 z-10">
                    <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-gray-200 rounded"></div>
                            <span className="text-xs text-gray-600 font-medium">Layout</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-pink-400"></div>
                            <span className="text-xs text-gray-600 font-medium">Color</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-gray-200 rounded"></div>
                            <span className="text-xs text-gray-600 font-medium">Font</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InterfaceMockup({ feature }) {
    return (
        <div className={`relative rounded-xl bg-linear-to-br ${feature.gradient} p-8 sm:p-12 md:p-16 h-[600px] overflow-hidden`}>
            {/* Desktop Interface */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 bg-white rounded-lg px-3 py-1.5 ml-4">
                            <span className="text-xs text-gray-500">beacons.ai/your-page</span>
                        </div>
                    </div>
                </div>

                {/* Newsletter Interface Content */}
                <div className="p-6 sm:p-8 bg-white">
                    {/* Header with decorative elements */}
                    <div className="mb-6 relative">
                        <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl -z-10"></div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="text-3xl">🌊</div>
                            <div className="text-3xl">🦋</div>
                            <div className="text-3xl">⭐</div>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            June Newsletter: summer is here!
                        </h4>
                        <p className="text-sm text-gray-600">Audience Members</p>
                        <p className="text-xs text-gray-500">View and manage your audience</p>
                    </div>

                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2">
                            <span className="text-sm text-gray-500">Search by name or email</span>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                            + Import Members
                        </button>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-2 pb-3 border-b border-gray-200 text-xs text-gray-600 font-medium">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Email</span>
                        </div>
                        <div>Phone</div>
                        <div>Source</div>
                        <div>Platform</div>
                        <div>Added On</div>
                    </div>

                    {/* Table Rows (Placeholder) */}
                    <div className="space-y-2 mt-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 bg-gray-50 rounded-lg"></div>
                        ))}
                    </div>
                </div>

                {/* Image Preview */}
                <div className="px-6 pb-6">
                    <div className="h-32 sm:h-40 bg-linear-to-br from-orange-100 to-pink-100 rounded-xl overflow-hidden">
                        <img
                            src={feature.image}
                            alt="Preview"
                            className="w-full h-full object-cover opacity-50"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}