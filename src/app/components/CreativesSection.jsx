'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CreativeSection() {
    const creatives = [
        {
            badge: '🚀 High-Converting Ads',
            badgeColor: 'bg-blue-200 text-blue-900',
            title: 'Ads Creatives',
            description: 'Launch scroll-stopping ad campaigns that drive clicks and sales. Create stunning ad creatives optimized for every platform—from Facebook to TikTok—in minutes, not hours.',
         
            image: '/images/ads-creative-image.png', 
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
     
            image: '/images/social-creatives-image.png', // Your image path
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
          
            image: '/images/designer-image.png', 
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
          
            image: '/images/magic-studio-image.png', // Your image path
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
        <section className="py-4 sm:py-6 md:py-10 lg:py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <motion.h2 
                        className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    >
                        Creatives
                    </motion.h2>
                    <motion.p 
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Unleash your creativity without limits. Design professional ads, viral social content, and stunning brand assets—all with AI-powered tools that make you look like a pro.
                    </motion.p>
                </div>

                {/* Feature Items */}
                <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
                    {creatives.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            feature={feature}
                            fadeInUp={fadeInUp}
                            staggerContainer={staggerContainer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ feature, fadeInUp, staggerContainer }) {
    const [loadingButton, setLoadingButton] = useState(null);

    // Spinner Component
    const Loader = () => (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );

    const handleGetStarted = () => {
        setLoadingButton(`get-started-${feature.title}`);
        setTimeout(() => {
            window.location.href = "../pages/pricing";
        }, 400);
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Content Side - Always on Left */}
            <motion.div 
                className="space-y-6 sm:space-y-6 items max-w-lg lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Badge */}
                <motion.div 
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={`${feature.badgeColor} px-4 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-base font-semibold`}>
                        {feature.badge}
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h3 
                    className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                    className="text-base sm:text-md text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {feature.description}
                </motion.p>

                {/* Feature Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {feature.features.map((item, idx) => (
                        <FeatureCard key={idx} feature={item} fadeInUp={fadeInUp} />
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button
                        onClick={handleGetStarted}
                        disabled={loadingButton === `get-started-${feature.title}`}
                        className="relative bg-[#1447e6] cursor-pointer hover:scale-105 text-white transition duration-200 px-5 py-1 rounded-lg font-medium text-[15px] flex items-center gap-2 disabled:opacity-70"
                    >
                        Get Started
                        {loadingButton === `get-started-${feature.title}` && <Loader />}
                    </button>
                    <button className="text-gray-700 cursor-pointer hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 hover:underline flex items-center gap-2">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>

            {/* Image Side - Always on Right */}
            <motion.div 
                className="lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className={`relative sm:rounded-xl  bg-linear-to-br ${feature.gradient} p-4 sm:p-6 md:p-8 lg:p-10 h-[600px] overflow-hidden`}>
                    <div className="relative w-full h-full">
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function FeatureCard({ feature, fadeInUp }) {
    return (
        <motion.div 
            className="bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:scale-95 transition duration-200"
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
        >
            <div className="flex flex-col items-start">
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
        </motion.div>
    );
}