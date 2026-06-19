"use client";

export default function TestimonialSection() {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      quote:
        '"Creativeklux completely replaced my design workflow. I generate ad creatives, thumbnails, and social posts in minutes — what used to take me hours with a designer."',
      name: "Theoriisworld",
      role: "Gaming Creator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      quote:
        '"I used to outsource my ad creatives for every campaign. Now I generate everything inside Creativeklux and my CTR has never been better."',
      name: "Keegan Robin",
      role: "Photographer & Content Creator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      quote:
        '"The AI understands my brand instantly. Every creative it generates looks like it came from a professional agency — not a template tool."',
      name: "Suki Lu",
      role: "Lifestyle Creator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      quote:
        '"Creativeklux is perfect for anyone who wants to grow their brand online without hiring a full creative team. The output quality is genuinely impressive."',
      name: "FlavorsbyFrangipane",
      role: "Food & Lifestyle Creator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
      quote:
        '"The analytics help me see exactly which creatives are performing — I can double down on what works and stop wasting budget on what doesn\'t."',
      name: "Sarah Martinez",
      role: "Fashion Influencer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop",
      quote:
        '"I publish directly to YouTube from Creativeklux. The whole flow — create, edit, publish, track performance — happens in one place. It\'s a no-brainer."',
      name: "Alex Chen",
      role: "Tech Reviewer",
    },
  ];

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            The most ambitious creators love Creative Klux. You will too.
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

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
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <blockquote className="mb-4">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {testimonial.quote}
          </p>
        </blockquote>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-1">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
}
