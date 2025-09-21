"use client";

import Image from "next/image";

const Industries = () => {
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
      {/* Compact Hero */}
      <div className="py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 sm:py-4">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <h1 className="mb-1 text-base font-bold sm:text-lg lg:text-xl">
            Industries We Are Supporting
          </h1>
          <p className="text-xs sm:text-sm opacity-90">
            Our Vision - To Solve End to End Procurement for Factories/Plants.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-4 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 text-center transition-shadow bg-white rounded-md shadow-sm md:p-6 hover:shadow-md backshadow"
              >
                <div className="flex items-center justify-center mb-3">
                  <Image
                    src={industry.img}
                    alt={industry.name}
                    width={112}
                    height={112}
                    sizes="80px"
                    className="object-contain w-20 h-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
                  />
                </div>
                <h4 className="mb-2 text-sm font-semibold text-center text-gray-900 sm:text-base md:text-lg">
                  {industry.name}
                </h4>
                <p className="max-w-xs text-sm text-center text-gray-600 sm:text-base">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
