"use client";

import React, { useState, useMemo, useCallback, memo } from "react";

const Services = memo(() => {
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
    <div className="py-3 sm:py-4">
      {/* Enhanced Hero */}
      <div className="py-8 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 sm:py-12">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Services We Provide
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Services to make your purchase easy, risk-free & fast with measurable cost savings
          </p>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable benefits that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="mb-4 text-3xl font-bold text-blue-600">
                  {b.value}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-8 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of specialized services designed for your industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Service List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceClick(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 focus:outline-none flex items-start space-x-4 ${
                    activeService === index
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-900 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
                  }`}
                >
                  <div className="flex-shrink-0 text-3xl">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold mb-2">
                      {service.title}
                    </div>
                    <div
                      className={`text-sm ${
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

            {/* Service Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {active.title}
                </h4>
                <p className="text-lg text-gray-600 mb-6">
                  {active.description}
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {active.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 mt-1 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Cost Savings</div>
                  <div className="text-xl font-bold text-gray-900">
                    {active.stats.cost}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Avg Lead Time</div>
                  <div className="text-xl font-bold text-gray-900">
                    {active.stats.time}
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Suppliers</div>
                  <div className="text-xl font-bold text-gray-900">
                    {active.stats.suppliers}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="flex-1 px-6 py-3 text-center font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300"
                >
                  Request Quote
                </a>
                <a
                  href="#contact"
                  className="flex-1 px-6 py-3 text-center font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Services.displayName = "Services";

export default Services;
