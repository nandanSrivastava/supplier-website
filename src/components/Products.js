'use client';
import { useState, useEffect } from 'react';

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Pumps & Spares',
      desc: 'Industrial pumps and spare parts for various applications',
      image: '/centrifugal pumps.jpeg',
      icon: '🔧'
    },
    {
      id: 2,
      name: 'Gearboxes & Spares',
      desc: 'Industrial gearboxes and components',
      image: '/gearboxes-spares.jpg',
      icon: '⚙️'
    },
    {
      id: 3,
      name: 'Motors & Spares',
      desc: 'Electric motors and replacement parts',
      image: '/motors-spares.jpg',
      icon: '⚡'
    },
    {
      id: 4,
      name: 'Valves & Spares',
      desc: 'Industrial valves and control components',
      image: '/valve-spares.jpg',
      icon: '🔩'
    },
    {
      id: 5,
      name: 'Electrical Spares',
      desc: 'Complete electrical house for industries',
      image: '/electrical-spares.png',
      icon: '🔌'
    },
    {
      id: 6,
      name: 'Mechanical Spares',
      desc: 'Complete mechanical house for industries',
      image: '/mechanical-spares.jpeg',
      icon: '🔧'
    },
    {
      id: 7,
      name: 'I&C Spares',
      desc: 'Instrumentation & control spare parts',
      image: '/i &c  spares.jpeg',
      icon: '📊'
    },
    {
      id: 8,
      name: 'Other Spares',
      desc: 'Specialized components for various industries',
      image: '/other-spares.jpg',
      icon: '🔩'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="py-3 sm:py-4">
      {/* Compact Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-base sm:text-lg lg:text-xl font-bold mb-1">Industrial Products & Spare Parts</h1>
          <p className="text-xs sm:text-sm opacity-90">Comprehensive solutions for Sugar, Power, Cement, Steel Mining & Other Industries</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-sm sm:text-base font-bold text-center mb-4">Our Products</h2>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              {/* Single Product Display */}
              <div className="bg-white rounded-xl p-6 shadow-2xl border border-gray-200 mx-auto max-w-xs sm:max-w-sm text-center" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                {/* Fixed size image */}
                <img 
                  src={products[currentSlide].image} 
                  alt={products[currentSlide].name}
                  className="w-full h-64 object-contain rounded-lg mb-6"
                  style={{ minHeight: '256px', maxHeight: '256px' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="text-xl hidden">{products[currentSlide].icon}</div>
                
                {/* Text content below image, centered */}
                <h4 className="text-lg font-bold text-gray-900 mb-3">{products[currentSlide].name}</h4>
                <p className="text-base text-gray-600 leading-relaxed">{products[currentSlide].desc}</p>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md transition-all z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md transition-all z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
            
            {/* Product Counter */}
            <div className="text-center mt-2 text-xs text-gray-500">
              {currentSlide + 1} of {products.length}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-2 md:gap-3">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded p-2 md:p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-2">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-16 md:h-20 object-contain rounded mb-1"
                    style={{ minHeight: '64px', maxHeight: '80px' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-sm hidden">{product.icon}</div>
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 leading-tight">{product.name}</h4>
                <p className="text-xs text-gray-600 leading-tight">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
