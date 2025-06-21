import React from 'react';
import api1 from "../assets/api1.png";
import api2 from "../assets/api2.png";
import api3 from "../assets/api3.png";
import api4 from "../assets/api4.png";
import '../output.css';

const APIcard = [
  {
    icon: api1,
    title: "Resume Scorer",
    description: "Optimize your resume with AI-driven insights. Stand out to recruiters."
  },
  {
    icon: api2,
    title: "Internship Scorer",
    description: "Evaluate your Internship experience & get feedback to improve impact."
  },
  {
    icon: api3,
    title: "Salary Estimator",
    description: "Calculate your expected Salary with accurate industry data."
  },
  {
    icon: api4,
    title: "Authentication",
    description: "Integrate the API, and we will handle the security of users."
  }
];

function APIs() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-800">
        Our APIs
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {APIcard.map((api, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
          >
            <img
              src={api.icon}
              alt={api.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-center text-gray-800 mb-2">
              {api.title}
            </h4>
            <p className="text-sm text-gray-600 text-center mb-4">
              {api.description}
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-700 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition">
                Try Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default APIs;
