"use client";

import Image from "next/image";
import { memo, useState, useCallback } from "react";

const brands = [
  "3M.png",
  "abb.png",
  "ador.png",
  "Alfa Laval.jpg",
  "Allen Bradley.png",
  "Alstom.png",
  "Andritz.png",
  "Atlas Copco.png",
  "Balluff.png",
  "bharat bijlee.jpg",
  "BHEL.png",
  "Cummins Stamford.png",
  "Cummins.png",
  "D&H Welding.png",
  "Doosan Skoda Power.png",
  "EBM Papst.png",
  "FLSmidth.png",
  "Fluke.png",
  "havells.png",
  "IRI International.png",
  "ISGEC.png",
  "Kalpa Electrik.png",
  "Kobold.jpg",
  "MAN Energy Solutions.png",
  "Mecgale.jpg",
  "Mehru.jpg",
  "milton roy.png",
  "Minilec.jpeg",
  "Mitsubishi Electric.png",
  "Novotechnik.png",
  "Omron.png",
  "psp pumps.png",
  "Rockwell Automation.png",
  "rotork.jpg",
  "Ruttonsha.png",
  "Schaeffler.png",
  "schneider.png",
  "seimens.png",
  "Semikron.png",
  "shakti.png",
  "Shreem Electric.png",
  "Sika.png",
  "SKF.jpg",
  "spxflow.png",
  "Teknik Electric.jpg",
  "Thermax.png",
  "TImken.png",
  "WKV.png",
  "Woodward.png",
  "Yaskawa.png",
  "Yuken.png",
].map((file) => ({
  name: file.replace(/\.[^.]+$/, ""),
  logo: `/brands/${file}`,
}));

const Brands = memo(() => {
  return (
    <div className="py-0.5 sm:py-1">
      {/* Compact Hero */}
      <div className="py-1 text-white bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-5xl px-2 mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5">
            Trusted Brand Partners
          </h1>
          <p className="text-[15px] opacity-90">
            We partner with world-renowned brands
          </p>
        </div>
      </div>

      {/* Brands: responsive scroller on small screens, grid on larger */}
      <div className="py-1 mt-0 lg:mt-4 bg-gray-50">
        <div className="px-2 mx-auto max-w-7xl">
          {/* Mobile: horizontal scroller */}
          <div className="lg:hidden">
            <div
              id="brands-scroll"
              className="flex gap-3 px-1 py-2 overflow-x-auto no-scrollbar snap-x snap-mandatory"
              style={{ 
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain"
              }}
            >
              {brands.map((brand) => (
                <ImageComponent key={brand.name} brand={brand} isMobile={true} />
              ))}
            </div>
          </div>

          {/* Desktop: grid */}
          <div className="hidden lg:block">
            <div className="grid items-center grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {brands.map((brand) => (
                <ImageComponent key={brand.name} brand={brand} isMobile={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Brands.displayName = "Brands";

// Optimized ImageComponent with error handling and loading states
const ImageComponent = memo(({ brand, isMobile = false }) => {
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
      <div
        className={`flex items-center justify-center flex-shrink-0 p-2 bg-gray-100 rounded-lg ${
          isMobile ? "snap-start" : ""
        }`}
        style={isMobile ? { width: 96 } : {}}
      >
        <div className="flex items-center justify-center w-20 h-20 text-gray-400">
          <span className="text-xs text-center">{brand.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 p-2 bg-white rounded-lg ${
        isMobile ? "snap-start" : ""
      }`}
       style={isMobile ? { 
         width: 96,
         userSelect: "none"
       } : {}}
    >
      <div className="relative">
        {isLoading && (
          <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse ${
            isMobile ? "w-20 h-20" : "w-24 h-24 md:w-28 md:h-28"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        )}
        <Image
          src={encodeURI(brand.logo)}
          alt={brand.name}
          width={isMobile ? 80 : 112}
          height={isMobile ? 80 : 112}
          className={`object-contain transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${isMobile ? "w-20 h-20" : "w-24 h-24 md:w-28 md:h-28"}`}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6objMpSlKKEgghI//Z"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
});

ImageComponent.displayName = "ImageComponent";

export default Brands;
