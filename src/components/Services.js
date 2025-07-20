'use client';

import { useState, useMemo, useCallback } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = useMemo(() => [
    {
      id: 1,
      icon: '🏭',
      title: 'Fabrication Works',
      description: 'Custom fabrication for Sugar, Power, Cement & Other Industries.',
      features: ['Custom solutions', 'Industry-specific designs', 'Quality materials', 'Expert engineering'],
      stats: { cost: '20%', time: '30%', suppliers: '200+' }
    },
    {
      id: 2,
      icon: '🚚',
      title: 'End-to-End Procurement',
      description: 'Complete procurement from factory prices to site delivery.',
      features: ['Factory pricing', 'Complete documentation', 'Export & import', 'Door-to-door delivery'],
      stats: { cost: '25%', time: '40%', suppliers: '500+' }
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Spare Parts Consolidation',
      description: 'Helping Factories/Plants for Estimating Their Annual Maintenance Budget By Consolidating Spare Parts Prices and Later Consolidating & Supplying to Site.',
      features: ['Annual budget estimation', 'Price consolidation', 'Bulk procurement savings', 'Scheduled delivery'],
      stats: { cost: '30%', time: '50%', suppliers: '300+' }
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Emergency Supply',
      description: 'Critical parts with air freight priority delivery.',
      features: ['Ready stock', 'Air freight delivery', 'Priority handling', '24/7 support'],
      stats: { cost: '15%', time: '80%', suppliers: '150+' }
    }
  ], []);

  const benefits = useMemo(() => [
    {
      title: 'Cost Savings',
      value: '20-30%',
      description: 'Reduced procurement costs through strategic sourcing'
    },
    {
      title: 'Fast Delivery',
      value: '24-48hrs',
      description: 'Emergency deliveries with air freight priority'
    },
    {
      title: 'Industries Served',
      value: '15+',
      description: 'Sugar, Power, Cement and other major industries'
    },
    {
      title: 'Risk-Free',
      value: '99.5%',
      description: 'Success rate with complete documentation'
    }
  ], []);

  const handleServiceClick = useCallback((index) => {
    setActiveService(index);
  }, []);

  return (
    <section className="py-2 sm:py-3 bg-gray-50 overflow-hidden">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-3 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Services We Provide
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            Services to Make Your Purchase Easy, Risk-Free & Fast With Cost Savings.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3 px-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white rounded p-2 shadow-sm">
              <div className="text-sm sm:text-base font-bold text-blue-600 mb-1">
                {benefit.value}
              </div>
              <h3 className="text-xs font-semibold text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="px-2">
          {/* Service Tabs */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 text-center">
              Comprehensive Service Portfolio
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`p-3 sm:p-4 rounded cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm'
                  }`}
                  onClick={() => handleServiceClick(index)}
                >
                  <div className="flex items-start space-x-2">
                    <div className="text-base sm:text-lg flex-shrink-0">{service.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold mb-1">
                        {service.title}
                      </h4>
                      <p className={`text-xs ${
                        activeService === index ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
