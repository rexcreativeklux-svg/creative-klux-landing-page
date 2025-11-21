'use client';
import NavigationLink from './NavigationLink';

export default function Footer() {
    const learnMoreLinks = [
        { name: 'Beacons for Managers', href: '#' },
        { name: 'Top Creator Agencies 2024', href: '#' },
        { name: 'Creator Agencies', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Referral Program', href: '#' },
        { name: 'Shopping', href: '#' },
        { name: 'Resources', href: '#' }
    ];

    const legalLinks = [
        { name: 'Terms and Conditions', href: '/pages/terms' },
        { name: 'Privacy Policy', href: '/pages/privacy' },
        { name: 'Refund Policy', href: '/pages/refund' },
        { name: 'Cookie Notice', href: '#' },
        { name: 'Report Violation', href: '#' },
        { name: 'Community Standards', href: '#' }
    ];

    const beaconsLinks = [
        { name: 'About us', href: '#' },
        { name: 'Careers', href: '#' }
    ];

    const socialLinks = [
        { 
            name: 'TikTok', 
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
            )
        },
        { 
            name: 'Instagram', 
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        },
        { 
            name: 'Twitter', 
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            )
        },
        { 
            name: 'Yelp', 
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Top Section - Logo and Social Icons */}
                <div className="flex justify-between items-center mb-12 pb-8 border-b border-gray-800">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavigationLink href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <div className="relative w-10 h-10">
                                <div className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"></div>
                                <div className="absolute bottom-0 left-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                            <span className="text-white text-2xl font-bold">Creative Klux</span>
                        </NavigationLink>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Learn More Column */}
                    <div>
                        <h3 className="text-gray-400 text-sm font-semibold mb-4">Learn more</h3>
                        <ul className="space-y-3">
                            {learnMoreLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-gray-400 text-sm font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <NavigationLink href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                        {link.name}
                                    </NavigationLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Beacons Column */}
                    <div>
                        <h3 className="text-gray-400 text-sm font-semibold mb-4">Creative Klux</h3>
                        <ul className="space-y-3 mb-8">
                            {beaconsLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-gray-400 text-sm font-semibold mb-4">Help & Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Support Section */}
                <div className="bg-gray-800 rounded-xl p-6 text-center mb-8">
                    <p className="text-white text-lg">
                        Need help? <a href="mailto:support@creativeklux.com" className="underline hover:text-blue-400 transition-colors">support@CreativeKlux.com</a>
                    </p>
                </div>

                {/* App Store Badges */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <a href="#" className="inline-block">
                        <div className="bg-black border border-gray-700 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-gray-300">Download on the</div>
                                <div className="text-lg font-semibold text-white">App Store</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="inline-block">
                        <div className="bg-black rounded-lg border border-gray-700 px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.978 1.978 0 01-.61-1.433V3.247c0-.573.247-1.085.609-1.433zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626c.766.444.766 1.174 0 1.618l-2.808 1.626-2.563-2.563 2.564-2.307zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-gray-300">GET IT ON</div>
                                <div className="text-lg font-semibold text-white">Google Play</div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500">
                    <p>Creative Klux® is a registered trademark of Netsprin ©2025</p>
                </div>
            </div>
        </footer>
    );
}