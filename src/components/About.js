"use client";

const About = () => {
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
    <div>
      {/* Compact Hero */}
      <div className="py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 sm:py-4">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <h1 className="mb-1 text-xl font-bold sm:text-2xl lg:text-3xl">
            About Industrial Solutions
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            Dedicated engineers resolving global industrial procurement
            challenges
          </p>
        </div>
      </div>

      {/* Vision & Mission - Centered Paragraphs */}
      <div className="max-w-4xl px-4 py-4 mx-auto text-center">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-center mb-2">
              <span className="mr-2 text-lg">🌟</span>
              <h3 className="text-base font-bold text-blue-900">Vision</h3>
            </div>
            <p className="max-w-2xl mx-auto text-sm leading-relaxed text-gray-700">
              Unlocking & Solving Global Industrial Procurements.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center mb-2">
              <span className="mr-2 text-lg">🎯</span>
              <h3 className="text-base font-bold text-green-900">Mission</h3>
            </div>
            <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-700">
              To Make Global Industrial Procurements Reliable, Cheaper, Easier,
              Risk & Hassle-Free With End to End Logistics Support.{" "}
            </p>
          </div>
          {/* Group description added per user request */}
          <div>
            <p className="max-w-3xl mx-auto mt-2 text-sm font-semibold leading-relaxed text-gray-700">
              We are a group of engineers, aiming to unlock and solve global
              industrial procurements with reliability, cheaper prices, risk-
              and hassle-free processes, and end-to-end logistics support —
              while maintaining high standards for the quality of our products
              and services.
            </p>
          </div>
        </div>
      </div>

      {/* Compact Values (refined) */}
      <div className="py-6 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-6 text-xl font-bold text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.num}
                className="flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition duration-150"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold text-white bg-blue-600 rounded-full">
                    {value.num}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900">
                    {value.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact CTA */}
      <div className="py-3 text-black">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <h3 className="mb-2 text-base font-bold">
            Ready to Transform Your Procurement?
          </h3>
          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            <button
              onClick={() => handleCTAClick("quote")}
              className="border border-blue-600 bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
