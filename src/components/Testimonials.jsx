import React from 'react';
import profilepic from "../assets/profile.png";
import '../output.css';
import stars from "../assets/stars.png";

const testimonials = [
  {
    profile: profilepic,
    review: "Blazing-fast response times, even during high load. Scales effortlessly. It’s like having a CDN for testimonials. Perfect for high-traffic apps needing consistent performance.",
    name: "Neha Verma",
    post: "CTO of XYZ"
  },
  {
    profile: profilepic,
    review: "Super affordable without sacrificing quality. Transparent pricing, no hidden surprises. Finally, an API platform that understands startup budgets without compromising on speed or support.",
    name: "Ananya M.",
    post: "SDE-2 Engineer at ABC"
  },
  {
    profile: profilepic,
    review: "Documentation is clear, comprehensive, and developer-friendly. Got my integration running in under 30 minutes. Everything just works—no guesswork, no frustration.",
    name: "Neha Verma",
    post: "Senior Developer at XYZ"
  }
];

function Testimonials() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        What <span className="text-blue-600">Our Clients</span> Say
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <img src={stars} alt="stars" className="w-24 mb-4" />
            <p className="text-sm text-gray-700 mb-4">{testimonial.review}</p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={testimonial.profile}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold text-gray-900">{testimonial.name}</h5>
                <p className="text-xs text-gray-500">{testimonial.post}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
