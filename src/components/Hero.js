'use client';

import { useState, useEffect } from 'react';

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
      setActiveSection('contact');
    }
  };

  const handleLearnMore = () => {
    if (setActiveSection) {
      setActiveSection('about');
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section relative min-h-screen overflow-hidden max-w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 max-w-full">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 max-w-full ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url("/big factory.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
          role="img"
          aria-label="Industrial factory background"
        >
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 max-w-full"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>
        
        {/* Fallback background color */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-16 pb-4 px-1 xs:px-2 sm:px-0">
        <div className="container-responsive w-full max-w-full">
          <div className="text-center max-w-5xl mx-auto w-full">
            <div className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight px-1 xs:px-2 max-w-full">
                <span className="block mb-1 xs:mb-1 sm:mb-2">One Stop for</span>
                <span className="block text-blue-300 mb-1 xs:mb-1 sm:mb-2">Global Industrial</span>
                <span className="block">Procurement Solutions</span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 mb-3 xs:mb-4 sm:mb-6 leading-relaxed max-w-full sm:max-w-3xl mx-auto px-1 xs:px-2 sm:px-4">
                Optimize <span className="text-yellow-300 font-semibold">Costs 20%+</span> & 
                <span className="text-green-300 font-semibold"> Delivery 30%+</span> with 
                End-to-End Global Procurement.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-1 xs:px-2 sm:px-4 max-w-full sm:max-w-2xl mx-auto">
                <button
                  onClick={handleGetStarted}
                  className="w-full xs:w-full sm:w-auto btn-primary text-xs xs:text-xs sm:text-sm md:text-base px-3 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-2 sm:py-3 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 min-w-0 max-w-full"
                  aria-label="Get started with our services"
                >
                  <span className="flex items-center justify-center">
                    Get Started Today
                    <svg className="ml-2 w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Key Benefits */}
            <div className={`mt-4 xs:mt-6 sm:mt-8 transition-all duration-1000 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-2 sm:gap-3 lg:gap-4 max-w-full sm:max-w-4xl mx-auto px-1 xs:px-2 sm:px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 xs:p-3 sm:p-4 lg:p-6 text-center max-w-full">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-1 xs:mb-1 sm:mb-2">20%+</div>
                  <div className="text-white text-xs xs:text-sm sm:text-base lg:text-lg font-medium">Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 xs:p-3 sm:p-4 lg:p-6 text-center max-w-full">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-green-300 mb-1 xs:mb-1 sm:mb-2">30%+</div>
                  <div className="text-white text-xs xs:text-sm sm:text-base lg:text-lg font-medium">Faster Delivery</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 xs:p-3 sm:p-4 lg:p-6 text-center max-w-full">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-blue-300 mb-1 xs:mb-1 sm:mb-2">80+</div>
                  <div className="text-white text-xs xs:text-sm sm:text-base lg:text-lg font-medium">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
