"use client";

export default function TestimonialSection() {
  const testimonial = {
    image: "",
    quote:
      '"Creativeklux completely replaced my design workflow. I generate ad creatives, thumbnails, and social posts in minutes — what used to take me hours with a designer."',
    name: "Rex Morgan",
    role: "Social Media Manager",
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            The most ambitious creators love Creative Klux. You will too.
          </h2>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <TestimonialCard testimonial={testimonial} />
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-xl">
      <div className="flex flex-col">
        {testimonial.image && (
          <div className="mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
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
