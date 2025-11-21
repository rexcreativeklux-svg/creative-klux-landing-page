'use client';

export default function BlueSection() {
    return (
        <section className="py-20 sm:py-24 md:py-32 lg:py-[250px] bg-[#1447e6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Heading */}
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-center sm:mb-12 max-w-6xl mx-auto">
                        The best time to start your creatives journey was yesterday. The next best time is now.
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-gray-900 hover:bg-black text-white text-lg sm:text-xl cursor-pointer font-bold px-10 sm:px-12 py-5 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                        Get started - It's free!
                    </button>
                </div>
            </div>
        </section>
    );
}