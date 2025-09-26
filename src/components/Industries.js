"use client";

import Image from "next/image";
import { memo, useState, useCallback } from "react";

// Optimized IndustryImageComponent with shimmer loading and error handling
const IndustryImageComponent = memo(({ industry }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-sm sm:w-36 sm:h-36 md:w-40 md:h-40">
        <div className="flex items-center justify-center text-gray-500">
          <span className="text-sm font-medium text-center px-2">{industry.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center mb-4">
      <div className="relative group">
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl animate-pulse w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl"></div>
          </div>
        )}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden">
          <Image
            src={encodeURI(industry.img)}
            alt={industry.name}
            width={160}
            height={160}
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
            className={`object-contain transition-all duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            } w-full h-full p-2 group-hover:scale-105`}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6objMpSlKKEgghI//Z"
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
      </div>
    </div>
  );
});

IndustryImageComponent.displayName = "IndustryImageComponent";

const Industries = memo(() => {
  const industries = [
    {
      id: 1,
      name: "Power (Thermal, Hydro Etc.)",
      desc: "Power generation and distribution equipment",
      img: "/Industries/Power.png",
    },
    {
      id: 2,
      name: "Sugar Factory",
      desc: "Sugar manufacturing and processing equipment",
      img: "/Industries/Sugar Factory.png",
    },
    {
      id: 3,
      name: "Cement Factory",
      desc: "Cement production and processing machinery",
      img: "/Industries/Cement Factory.png",
    },
    {
      id: 4,
      name: "Pharmaceutical Plant",
      desc: "Pharmaceutical manufacturing equipment",
      img: "/Industries/Pharmaceutical Plant.jpeg",
    },
    {
      id: 5,
      name: "Steel Plant",
      desc: "Steel production and processing equipment",
      img: "/Industries/Steel Plant.jpg",
    },
    {
      id: 6,
      name: "Mining & Minerals",
      desc: "Mining and mineral processing equipment",
      img: "/Industries/Mining & Minerals.jpg",
    },
    {
      id: 7,
      name: "Food & Beverages",
      desc: "Food processing and beverage production",
      img: "/Industries/Food & Beverages.jpg",
    },
    {
      id: 8,
      name: "Other Various Industries",
      desc: "Diverse industrial solutions and equipment",
      img: "/Industries/Other Various Industries.png",
    },
  ];

  return (
    <div className="py-3 sm:py-4">
      {/* Enhanced Hero */}
      <div className="py-8 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 sm:py-12">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Industries We Are Supporting
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Our Vision - To Solve End to End Procurement for Factories/Plants.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group flex flex-col items-center p-6 text-center transition-all duration-300 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <IndustryImageComponent industry={industry} />
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Industries.displayName = "Industries";

export default Industries;
