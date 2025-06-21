import React from 'react';
import kf1 from "../assets/kf1.png";
import kf2 from "../assets/kf2.png";
import kf3 from "../assets/kf3.png";
import '../output.css';
import kf4 from "../assets/kf4.png";

const kfcard = [
  {
    image: kf1,
    title: "Built for Developers",
    description: "Every API is crafted for Developers, from fresher to experienced."
  },
  {
    image: kf2,
    title: "Backed by Documentation",
    description: "Get well documentations of industry standards and in easy to learn format."
  },
  {
    image: kf3,
    title: "Instant Insights",
    description: "Real-time logging and cost estimations with AI powered optimizations."
  },
  {
    image: kf4,
    title: "Scalable for upto 100k req/s",
    description: "Don’t let technical limitations to stop your business from growing."
  }
];

function Features() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        Key Features
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {kfcard.map((kf, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
          >
            <img
              src={kf.image}
              alt={kf.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{kf.title}</h4>
              <p className="text-sm text-gray-600">{kf.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
