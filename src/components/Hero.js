"use client";

import { useState, useEffect } from "react";

const Hero = ({ setActiveSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Preload the background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/big factory.jpg";
  }, []);

  const handleGetStarted = () => {
    if (setActiveSection) {
      setActiveSection("contact");
    }
  };

  const handleLearnMore = () => {
    if (setActiveSection) {
      setActiveSection("about");
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative max-w-full overflow-hidden hero-section"
      style={{ minHeight: "60vh" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 max-w-full">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 max-w-full ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("/big factory.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          role="img"
          aria-label="Industrial factory background"
        >
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 max-w-full bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>

        {/* Fallback background color */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900"></div>
        )}
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex items-center w-full px-1 pt-20 pb-4 xs:px-2 sm:px-0"
        style={{ minHeight: "inherit" }}
      >
        <div className="w-full max-w-full container-responsive">
          <div className="w-full max-w-5xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="max-w-full px-1 mb-2 text-lg font-bold leading-tight text-white xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xs:mb-3 sm:mb-4 xs:px-2">
                <span className="block mb-1 xs:mb-1 sm:mb-2">
                  We're One Stop for
                </span>
                <span className="block mb-1 text-blue-300 xs:mb-1 sm:mb-2">
                  end to end Global Industrial
                </span>
                <span className="block">Procurement Solutions</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="max-w-full px-1 mx-auto mb-3 text-xs leading-relaxed text-gray-100 xs:text-xs sm:text-sm md:text-base lg:text-lg xs:mb-4 sm:mb-6 sm:max-w-3xl xs:px-2 sm:px-4">
                Optimize on their Costs{" "}
                <span className="font-semibold text-yellow-300">
                  (Atleast Costs 30%)
                </span>{" "}
                by Procuring from Low Cost Countries and Managing their
                End-to-End Logistics to Deliver On Time.
              </p>

              {/* Coverage / Countries supported (added per user request) */}
              <p className="max-w-full px-1 mx-auto mb-4 text-xs leading-relaxed text-gray-200 xs:text-xs sm:text-sm md:text-sm lg:text-base xs:px-2 sm:px-4">
                We will support global industrial procurements from India,
                China, Vietnam, Indonesia, Malaysia, Philippines, Korea, Middle
                East, Europe, America, Africa, Australia and other countries.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col items-center justify-center max-w-full gap-2 px-1 mx-auto sm:flex-row sm:gap-3 xs:px-2 sm:px-4 sm:max-w-2xl">
                <button
                  onClick={handleGetStarted}
                  className="w-full max-w-full min-w-0 px-3 py-2 text-xs transition-all duration-300 transform shadow-2xl xs:w-full sm:w-auto btn-primary xs:text-xs sm:text-sm md:text-base xs:px-3 sm:px-4 md:px-6 xs:py-2 sm:py-3 hover:shadow-blue-500/25 hover:scale-105"
                  aria-label="Get started with our services"
                >
                  <span className="flex items-center justify-center">
                    Get Started Today
                    <svg
                      className="w-3 h-3 ml-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Key Benefits */}
            <div
              className={`mt-4 xs:mt-6 sm:mt-8 transition-all duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="grid max-w-full grid-cols-1 gap-2 px-1 mx-auto xs:grid-cols-1 sm:grid-cols-3 xs:gap-2 sm:gap-3 lg:gap-4 sm:max-w-4xl xs:px-2 sm:px-4">
                <div className="max-w-full p-2 text-center rounded-lg bg-white/10 backdrop-blur-sm xs:p-3 sm:p-4 lg:p-6">
                  <div className="mb-1 text-lg font-bold text-yellow-300 xs:text-xl sm:text-2xl lg:text-3xl xs:mb-1 sm:mb-2">
                    20%+
                  </div>
                  <div className="text-xs font-medium text-white xs:text-sm sm:text-base lg:text-lg">
                    Cost Savings
                  </div>
                </div>
                <div className="max-w-full p-2 text-center rounded-lg bg-white/10 backdrop-blur-sm xs:p-3 sm:p-4 lg:p-6">
                  <div className="mb-1 text-lg font-bold text-green-300 xs:text-xl sm:text-2xl lg:text-3xl xs:mb-1 sm:mb-2">
                    30%+
                  </div>
                  <div className="text-xs font-medium text-white xs:text-sm sm:text-base lg:text-lg">
                    Faster Delivery
                  </div>
                </div>
                <div className="max-w-full p-2 text-center rounded-lg bg-white/10 backdrop-blur-sm xs:p-3 sm:p-4 lg:p-6">
                  <div className="mb-1 text-lg font-bold text-blue-300 xs:text-xl sm:text-2xl lg:text-3xl xs:mb-1 sm:mb-2">
                    80+
                  </div>
                  <div className="text-xs font-medium text-white xs:text-sm sm:text-base lg:text-lg">
                    Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
