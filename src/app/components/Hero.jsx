"use client";
import React, { useState } from 'react';
import { ArrowRight, Globe, Loader2 } from 'lucide-react';
import CreativeSelectionModal from './CreativeSelectionModal';

export default function Hero() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCreative, setSelectedCreative] = useState(null);

    const isEmpty = url.trim() === '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEmpty) return;

        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 800)); // fake delay
        setIsLoading(false);
        setIsModalOpen(true);
    };

    return (
        <>
            <section className="relative overflow-hidden py-2 sm:py-3 md:py-2 lg:py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12 md:mb-13">
                        {/* Main Headline */}
                        <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-5xl font-bold text-gray-900 mt-9 mb-4 sm:mb-6 px-4">
                            Your All-In-One AI Creative Engine <br />
                            <span className="block sm:inline">
                                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    — Ads, Socials, Designs. <br />
                                </span>
                            </span>
                            Done in Seconds.
                        </h1>

                        {/* URL Input Section */}
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xl mx-auto px-4">
                                <div className="flex relative items-center bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex-1">
                                    <div className="flex items-center px-4 py-4 text-gray-600">
                                      <Globe size={24} className="text-blue-500 animate-spin-slow" strokeWidth={2} />
                                        {/* <span className="ml-3 text-sm font-medium whitespace-nowrap">creativeklux.com/</span> */}
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="paste or input your url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        className="flex-1 px-4 py-2 text-gray-900 placeholder:text-gray-300 outline-none text-base md:text-sm"
                                        spellCheck={false}
                                    />

                                    {/* Smart Button with Spinner */}
                                    <button
                                        type="submit"
                                        disabled={isEmpty || isLoading}
                                        className={`px-6 py-2 absolute cursor-pointer right-2 rounded-lg font-bold text-base md:text-sm transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${isEmpty || isLoading
                                                ? 'bg-gray-100 text-gray-500 border border-gray-200 cursor-not-allowed'
                                                : 'bg-[#1447e6] hover:bg-blue-700 text-white shadow-md shadow-blue-600/30 hover:scale-105'
                                            }`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                Loading...
                                            </>
                                        ) : isEmpty ? (
                                            'Get Started'
                                        ) : (
                                            <>
                                                Get Started
                                                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Feature Cards with Phone Mockup */}
                    <div className="relative max-w-6xl mx-auto px-4">
                        {/* Center Phone Mockup */}
                        <div className="relative mx-auto w-56 sm:w-64 md:w-72 lg:w-80 z-10">
                            <div className="bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                                <div className="bg-white rounded-4xl sm:rounded-[2.5rem] overflow-hidden">
                                    {/* Phone Content */}
                                    <div className="relative h-[500px] sm:h-[550px] md:h-[550px] bg-linear-to-b from-gray-50 to-white">
                                        {/* Status Bar */}
                                        <div className="flex justify-center pt-3 sm:pt-4">
                                            <div className="w-20 sm:w-24 h-5 sm:h-6 bg-gray-900 rounded-full"></div>
                                        </div>

                                        {/* Profile Section */}
                                        <div className="p-4 sm:p-6 text-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-2 sm:mb-3"></div>
                                            <h2 className="text-lg sm:text-xl font-bold text-gray-900">ALEXA KING</h2>
                                            <p className="text-xs sm:text-sm text-gray-600">Fitness & Lifestyle Creator</p>
                                        </div>

                                        {/* Featured Content */}
                                        <div className="px-3 sm:px-4 space-y-2 sm:space-y-3">
                                            <div className="bg-linear-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white">
                                                <div className="rounded-lg mb-2 bg-white/20 h-20 sm:h-24 w-full"></div>
                                                <p className="text-xs sm:text-sm font-semibold">My Most-Used Activewear</p>
                                                <p className="text-xs opacity-90">42 items</p>
                                            </div>

                                            {/* Product Grid */}
                                            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                                                ))}
                                            </div>

                                            {/* Service Card */}
                                            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-2.5 sm:p-3">
                                                <div className="flex space-x-2 sm:space-x-3">
                                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg shrink-0"></div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs font-bold text-gray-900 line-clamp-2">Personal Training Consultation</p>
                                                        <p className="text-xs text-gray-600 mt-0.5 sm:mt-1">1 hour session</p>
                                                        <p className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5 sm:mt-1">$50</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LEFT SIDE - 4 Cards */}

                        {/* Left Card 1 - Brand Collaboration */}
                        <div className="absolute -top-10 -left-30 hidden xl:block animate-float">
                            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-64">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">A brand wants to</p>
                                        <p className="text-sm font-semibold text-gray-900">collaborate with you!</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">Let's talk!</p>
                                <div className="flex justify-between items-center mt-3">
                                    <span className="text-xs text-gray-500">May 18</span>
                                </div>
                            </div>
                        </div>

                        {/* Left Card 2 - Audience Growth */}
                        <div className="absolute top-26 left-25 hidden xl:block animate-float-delayed">
                            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-60">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs text-gray-600">Audience Growth</span>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+24%</span>
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">12.4K</div>
                                <p className="text-xs text-gray-500">New followers this month</p>
                            </div>
                        </div>

                        {/* Left Card 3 - Product */}
                        <div className="absolute bottom-48 -left-25 hidden xl:block animate-float">
                            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-72">
                                <div className="flex space-x-3">
                                    <div className="w-24 h-24 bg-linear-to-br from-purple-400 to-blue-500 rounded-xl shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">ULTIMATE Workout Program: 12 weeks</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-xl font-bold text-gray-900">$250</span>
                                            <button className="bg-gray-900 text-white text-xs px-4 py-2 rounded-lg font-medium whitespace-nowrap">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Card 4 - Email Campaign */}
                        <div className="absolute bottom-10 left-28 hidden xl:block animate-float-delayed">
                            <div className="bg-linear-to-br from-orange-500 to-pink-500 rounded-2xl p-4 shadow-xl w-64">
                                <div className="text-white mb-3">
                                    <p className="text-sm font-semibold mb-1">Email Campaign</p>
                                    <p className="text-xs opacity-90">Spring Sale Announcement</p>
                                </div>
                                <div className="flex justify-between items-center text-white">
                                    <div>
                                        <p className="text-2xl font-bold">4.2K</p>
                                        <p className="text-xs opacity-90">Opens</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">18%</p>
                                        <p className="text-xs opacity-90">CTR</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE - 4 Cards */}

                        {/* Right Card 1 - Stats */}
                        <div className="absolute top-0 right-30 hidden xl:block animate-float-delayed">
                            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-56">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs text-gray-600">My clicks</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                <div className="flex items-end space-x-1 mb-2">
                                    <span className="text-3xl font-bold text-gray-900">3671</span>
                                    <div className="flex space-x-1 mb-1">
                                        {[30, 50, 40, 60, 70, 65].map((height, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 rounded-full ${i === 5 ? 'bg-blue-500' : 'bg-gray-300'}`}
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">Dec 1 - 7</span>
                            </div>
                        </div>

                        {/* Right Card 2 - Engagement Rate */}
                        <div className="absolute top-33 -right-34 hidden xl:block animate-float">
                            <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl w-60">
                                <div className="text-white">
                                    <p className="text-xs opacity-90 mb-2">Engagement Rate</p>
                                    <p className="text-4xl font-bold mb-1">8.7%</p>
                                    <div className="flex items-center space-x-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs">+2.3% from last week</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card 3 - Revenue */}
                        <div className="absolute bottom-40 right-30 hidden xl:block animate-float-delayed">
                            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-64">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs text-gray-600">Total earnings</span>
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">$126,202.90</div>
                                <div className="h-16 flex items-end">
                                    <svg className="w-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                                        <path
                                            d="M0,60 L0,40 Q50,20 100,35 T200,25 L200,60 Z"
                                            fill="url(#gradient)"
                                            opacity="0.3"
                                        />
                                        <path
                                            d="M0,40 Q50,20 100,35 T200,25"
                                            fill="none"
                                            stroke="#3B82F6"
                                            strokeWidth="2"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#3B82F6" />
                                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right Card 4 - Email Notification */}
                        <div className="absolute bottom-10 -right-45 hidden xl:block animate-float">
                            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-5 shadow-xl w-72">
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-3">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="w-12 h-12 bg-white rounded-full shrink-0"></div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">New Season is now LIVE!</p>
                                            <p className="text-white/80 text-xs">Our 5-month personalized program starts TODAY!</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold">
                                    SEND EMAIL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>
            </section>

            {/* Modal – now a separate component */}
            <CreativeSelectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedCreative={selectedCreative}
                setSelectedCreative={setSelectedCreative}
            />
        </>
    );
}