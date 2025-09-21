"use client";

import React, { useState, useMemo, useCallback } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = useMemo(
    () => [
      {
        id: 1,
        icon: "🏭",
        title: "Fabrication Works",
        description:
          "Custom fabrication for Sugar, Power, Cement & other industries.",
        features: [
          "Custom solutions",
          "Industry-specific designs",
          "Quality materials",
          "Expert engineering",
        ],
        stats: { cost: "20%", time: "30%", suppliers: "200+" },
      },
      {
        id: 2,
        icon: "🚚",
        title: "End-to-End Procurement",
        description:
          "Complete procurement from factory prices to site delivery.",
        features: [
          "Factory pricing",
          "Complete documentation",
          "Export & import",
          "Door-to-door delivery",
        ],
        stats: { cost: "25%", time: "40%", suppliers: "500+" },
      },
      {
        id: 3,
        icon: "🔧",
        title: "Spare Parts Consolidation",
        description:
          "Estimate annual maintenance budgets by consolidating spare parts prices and schedules.",
        features: [
          "Annual budget estimation",
          "Price consolidation",
          "Bulk procurement savings",
          "Scheduled delivery",
        ],
        stats: { cost: "30%", time: "50%", suppliers: "300+" },
      },
      {
        id: 4,
        icon: "⚡",
        title: "Emergency Supply",
        description:
          "Critical parts with air-freight priority and 24/7 support.",
        features: [
          "Ready stock",
          "Air freight delivery",
          "Priority handling",
          "24/7 support",
        ],
        stats: { cost: "15%", time: "80%", suppliers: "150+" },
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        title: "Cost Savings",
        value: "20-30%",
        description: "Reduced procurement costs through strategic sourcing",
      },
      {
        title: "Fast Delivery",
        value: "24-48 hrs",
        description: "Emergency deliveries with air freight priority",
      },
      {
        title: "Industries Served",
        value: "15+",
        description: "Sugar, Power, Cement and other industries",
      },
      {
        title: "Risk-Free",
        value: "99.5%",
        description: "High success rate with full documentation",
      },
    ],
    []
  );

  const handleServiceClick = useCallback(
    (index) => setActiveService(index),
    []
  );

  const active = services[activeService];

  return (
    <section className="flex items-start w-full py-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Full-bleed hero */}
      <div className="w-full py-3 mb-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 sm:py-4">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <h1 className="mb-1 text-lg font-bold sm:text-2xl lg:text-3xl">
            Services we provide
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            Services to make your purchase easy, risk-free & fast with
            measurable cost savings.
          </p>
        </div>
      </div>
      <div className="w-full py-12 container-responsive">
        <div className="max-w-6xl mx-auto">
          {/* Intro text removed — compact hero above provides the intro */}

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-4 px-2 mb-8 md:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-4 text-center bg-white rounded-lg shadow-sm backshadow"
              >
                <div className="mb-1 text-lg font-bold text-blue-600">
                  {b.value}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {b.title}
                </h3>
                <p className="mt-1 text-xs text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>

          {/* Services: list + detail */}
          <div className="px-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* List */}
              <div className="space-y-3 md:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  Comprehensive Service Portfolio
                </h3>
                <div className="flex flex-col">
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceClick(index)}
                      className={`text-left p-4 rounded-lg mb-2 transition-transform duration-200 focus:outline-none w-full flex items-start space-x-3 ${
                        activeService === index
                          ? "bg-blue-600 text-white transform scale-100 shadow-lg backshadow"
                          : "bg-white text-gray-900 hover:shadow-md backshadow"
                      }`}
                    >
                      <div className="flex-shrink-0 text-2xl">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold sm:text-base">
                          {service.title}
                        </div>
                        <div
                          className={`text-xs mt-1 ${
                            activeService === index
                              ? "text-blue-100"
                              : "text-gray-600"
                          }`}
                        >
                          {service.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2 backshadow">
                <div className="flex flex-col items-start justify-between md:flex-row">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {active.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      {active.description}
                    </p>

                    <ul className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
                      {active.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2 text-sm text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 mt-1 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex w-full gap-2 mt-4 md:w-40 md:ml-4 md:mt-0 md:flex-col">
                    <div className="flex-1 p-3 text-center bg-gray-100 rounded">
                      <div className="text-xs text-gray-500">Cost</div>
                      <div className="text-lg font-bold text-gray-900">
                        {active.stats.cost}
                      </div>
                    </div>
                    <div className="flex-1 p-3 text-center bg-gray-100 rounded">
                      <div className="text-xs text-gray-500">Avg Lead</div>
                      <div className="text-lg font-bold text-gray-900">
                        {active.stats.time}
                      </div>
                    </div>
                    <div className="flex-1 p-3 text-center bg-gray-100 rounded">
                      <div className="text-xs text-gray-500">Suppliers</div>
                      <div className="text-lg font-bold text-gray-900">
                        {active.stats.suppliers}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mt-6 space-x-3">
                  <a
                    href="#contact"
                    className="inline-block w-full px-4 py-3 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow md:w-auto"
                  >
                    Request Quote
                  </a>
                  <a
                    href="#contact"
                    className="inline-block w-full text-sm text-center text-gray-600 underline md:w-auto"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
