import '../output.css';
import React from 'react';

function Hero() {
  return (
    <section className="bg-[#ffffff] w-full text-center px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
          Unlock Your Application’s Potential
        </h1>
        <p className="text-gray-500 text-base md:text-lg font-medium mb-8">
          Smart APIs for your Website <br />
          Low Latency, Low Pricing, High Benefit
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition">
            Get Started Free
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition">
            See All APIs &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
