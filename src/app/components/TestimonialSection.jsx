'use client';

export default function TestimonialSection() {
    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
            quote: '"Beacons has so many beneficial features for everyone, from having all your social media accounts available in one place, to selling your digital products, to linking products from my favorite brands, right in my Beacons Link in Bio."',
            name: 'Theoriisworld',
            role: 'Gaming creator'
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
            quote: '"Beacons helped me decide to start sending emails to my fans as a marketing strategy! Beacons made it so easy to send my first email."',
            name: 'Keegan Robin',
            role: 'Photographer'
        },
        {
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
            quote: '"It saves me so much time knowing my media kit automatically updates."',
            name: 'Suki Lu',
            role: 'Lifestyle Creator / Beacons OG'
        },
        {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
            quote: '"Beacons is great for anyone with a social media presence that wants to turn it into a business, no matter how big or small."',
            name: 'FlavorsbyFrangipane',
            role: 'Cooking creator'
        },
        {
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop',
            quote: '"The analytics and insights help me understand my audience better and make data-driven decisions for my content strategy."',
            name: 'Sarah Martinez',
            role: 'Fashion influencer'
        },
        {
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop',
            quote: '"Being able to monetize my content directly through Beacons has been a game-changer for my creator journey."',
            name: 'Alex Chen',
            role: 'Tech reviewer'
        }
    ];

    // Duplicate testimonials for infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                {/* Section Header */}
                <div className="text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
                        The most ambitious creators love Creative Klux. You will too.
                    </h2>
                </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative w-full">
                <div className="flex gap-6 animate-scroll-left">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-33.333%);
                    }
                }
                
                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                    width: max-content;
                }
                
                .animate-scroll-left:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}

function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white flex flex-col justify-between rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-96 shrink-0">
            <div className="flex flex-col">
            {/* Profile Image */}
            <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Quote */}
            <blockquote className="mb-4">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {testimonial.quote}
                </p>
            </blockquote>
            </div>

            {/* Author Info */}
            <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                    {testimonial.role}
                </p>
            </div>
        </div>
    );
}