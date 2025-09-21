"use client";
import { useState, useEffect } from "react";

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Pumps & Spares",
      desc: "Industrial pumps and spare parts for various applications",
      image: "/centrifugal pumps.jpeg",
      icon: "🔧",
    },
    {
      id: 2,
      name: "Gearboxes & Spares",
      desc: "Industrial gearboxes and components",
      image: "/gearboxes-spares.jpg",
      icon: "⚙️",
    },
    {
      id: 3,
      name: "Motors & Spares",
      desc: "Electric motors and replacement parts",
      image: "/motors-spares.jpg",
      icon: "⚡",
    },
    {
      id: 4,
      name: "Valves & Spares",
      desc: "Industrial valves and control components",
      image: "/valve-spares.jpg",
      icon: "🔩",
    },
    {
      id: 5,
      name: "Electrical Spares",
      desc: "Complete electrical house for industries",
      image: "/electrical-spares.png",
      icon: "🔌",
    },
    {
      id: 6,
      name: "Mechanical Spares",
      desc: "Complete mechanical house for industries",
      image: "/mechanical-spares.jpeg",
      icon: "🔧",
    },
    {
      id: 7,
      name: "I&C Spares",
      desc: "Instrumentation & control spare parts",
      image: "/i &c  spares.jpeg",
      icon: "📊",
    },
    {
      id: 8,
      name: "Other Spares",
      desc: "Specialized components for various industries",
      image: "/other-spares.jpg",
      icon: "🔩",
    },
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
    <div className="py-2 sm:py-1">
      {/* Compact Hero */}
      <div className="py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 sm:py-4">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <h1 className="mb-1 text-lg font-bold sm:text-3xl lg:text-3xl">
            Industrial Products & Spare Parts
          </h1>
          <p className="text-sm sm:text-xl opacity-90">
            Comprehensive solutions for Sugar, Power, Cement, Steel Mining &
            Other Industries
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-4 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-4 text-sm font-bold text-center sm:text-lg md:text-xl">
            Our Products
          </h2>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              {/* Single Product Display */}
              <div
                className="max-w-md p-8 mx-auto text-center bg-white border border-gray-200 shadow-2xl rounded-xl sm:max-w-lg"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                {/* Fixed size image */}
                <img
                  src={products[currentSlide].image}
                  alt={products[currentSlide].name}
                  className="object-cover w-full mb-6 rounded-lg h-80"
                  style={{ minHeight: "320px", maxHeight: "400px" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "block";
                  }}
                />
                <div className="hidden text-xl">
                  {products[currentSlide].icon}
                </div>

                {/* Text content below image, centered */}
                <h4 className="mb-3 text-2xl font-bold text-gray-900">
                  {products[currentSlide].name}
                </h4>
                <p className="text-lg leading-relaxed text-gray-600">
                  {products[currentSlide].desc}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 text-white transition-all transform -translate-y-1/2 bg-blue-600 rounded-full shadow-md top-1/2 hover:bg-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 text-white transition-all transform -translate-y-1/2 bg-blue-600 rounded-full shadow-md top-1/2 hover:bg-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
                    currentSlide === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Product Counter */}
            <div className="mt-2 text-xs text-center text-gray-500">
              {currentSlide + 1} of {products.length}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-4 text-center transition-shadow bg-white rounded-lg shadow-sm md:p-6 hover:shadow-md"
              >
                <div className="mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-32 mb-2 rounded md:h-40"
                    style={{ minHeight: "128px", maxHeight: "200px" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "block";
                    }}
                  />
                  <div className="hidden text-sm">{product.icon}</div>
                </div>
                <h4 className="mb-2 text-base font-semibold leading-tight text-gray-900 md:text-lg">
                  {product.name}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
