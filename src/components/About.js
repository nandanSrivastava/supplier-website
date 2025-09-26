"use client";

import { memo } from "react";

const About = memo(() => {
  const values = [
    { num: 1, title: "Customer Delight & Statisfaction." },
    { num: 2, title: "Integrity (Trust through Ethics)." },
    { num: 3, title: "Integrity" },
    { num: 4, title: "Trust" },
  ];

  const handleCTAClick = (section) => {
    window.dispatchEvent(new CustomEvent("showSection", { detail: section }));
  };

  return (
    <div className="py-3 sm:py-4">
      {/* Enhanced Hero */}
      <div className="py-8 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 sm:py-12">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            About Industrial Solutions
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Dedicated engineers resolving global industrial procurement challenges with innovative solutions
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="mr-3 text-3xl">🌟</span>
                <h3 className="text-2xl font-bold text-blue-900">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Unlocking & Solving Global Industrial Procurements.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="mr-3 text-3xl">🎯</span>
                <h3 className="text-2xl font-bold text-green-900">Mission</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                To Make Global Industrial Procurements Reliable, Cheaper, Easier,
                Risk & Hassle-Free With End to End Logistics Support.
              </p>
            </div>
          </div>

          {/* Group Description */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="mb-4 text-xl font-bold text-gray-900 text-center">Who We Are</h3>
            <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
              We are a group of engineers, aiming to unlock and solve global
              industrial procurements with reliability, cheaper prices, risk-
              and hassle-free processes, and end-to-end logistics support —
              while maintaining high standards for the quality of our products
              and services.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-8 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.num}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-colors duration-300">
                    {value.num}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Ready to Transform Your Procurement?
          </h3>
          <p className="mb-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help optimize your industrial procurement process
          </p>
          <button
            onClick={() => handleCTAClick("quote")}
            className="px-8 py-4 text-lg font-bold text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
