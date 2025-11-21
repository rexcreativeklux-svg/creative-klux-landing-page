'use client';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function NavigationProgress() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        NProgress.configure({ 
            showSpinner: false,
            trickleSpeed: 100,
            minimum: 0.3
        });
    }, []);

    useEffect(() => {
        setLoading(false);
        NProgress.done();
    }, [pathname, searchParams]);

    // Expose setLoading globally for NavigationLink
    useEffect(() => {
        window.setNavigationLoading = setLoading;
        return () => {
            delete window.setNavigationLoading;
        };
    }, []);

    return (
        <>
            {/* Full Screen Loader Overlay */}
            {loading && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black transition-opacity duration-300">
                    <div className="flex flex-col items-center space-y-6">
                        {/* Spinner Container */}
                        <div className="relative">
                            {/* Outer ring with subtle glow */}
                            <div className="w-24 h-24 border-4 border-gray-800 rounded-full"></div>
                            
                            {/* Gradient rotating ring with glow */}
                            <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin shadow-lg shadow-blue-500/50"></div>
                            
                            {/* Second rotating ring - slower, different colors */}
                            <div className="absolute top-1 left-1 w-22 h-22 border-4 border-transparent border-b-pink-500 border-l-purple-500 rounded-full animate-spin-slow shadow-lg shadow-pink-500/50"></div>
                            
                            {/* Inner pulsing circle with strong glow */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-10 h-10 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-2xl shadow-purple-500/80"></div>
                            </div>
                        </div>

                        {/* Loading Text */}
                        <div className="flex flex-col items-center space-y-3">
                            <p className="text-white font-bold text-xl tracking-wide">Loading...</p>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>

                        {/* Brand Name (optional) */}
                        <div className="mt-4">
                            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Creative Klux
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(360deg);
                    }
                    to {
                        transform: rotate(0deg);
                    }
                }

                .animate-spin-slow {
                    animation: spin-slow 2s linear infinite;
                }
            `}</style>
        </>
    );
}