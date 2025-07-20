'use client';

const About = () => {
  const values = [
    { icon: '😊', title: 'Customer Satisfaction', desc: 'Exceptional quality & service' },
    { icon: '🔐', title: 'Integrity & Ethics', desc: 'Honest & ethical conduct' },
    { icon: '🤝', title: 'Trust & Reliability', desc: 'Dependable partnerships' },
    { icon: '⭐', title: 'Quality & Excellence', desc: 'Superior results always' }
  ];

  const handleCTAClick = (section) => {
    window.dispatchEvent(new CustomEvent('showSection', { detail: section }));
  };

  return (
    <div className="py-3 sm:py-4">
      {/* Compact Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-base sm:text-lg lg:text-xl font-bold mb-1">About Industrial Solutions</h1>
          <p className="text-xs sm:text-sm opacity-90">Dedicated engineers resolving global industrial procurement challenges</p>
        </div>
      </div>

      {/* Vision & Mission - Centered Paragraphs */}
      <div className="max-w-4xl mx-auto px-4 py-4 text-center">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-center mb-2">
              <span className="text-lg mr-2">🌟</span>
              <h3 className="text-sm font-bold text-blue-900">Vision</h3>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Revolutionizing global industrial procurement by providing seamless solutions that bridge the gap between industries and suppliers worldwide.
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-2">
              <span className="text-lg mr-2">🎯</span>
              <h3 className="text-sm font-bold text-green-900">Mission</h3>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Deliver reliable, cost-effective procurement solutions with end-to-end logistics support, ensuring our clients receive the highest quality products and services.
            </p>
          </div>
        </div>
      </div>

      {/* Compact Values */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-sm sm:text-base font-bold text-center mb-4">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-md p-2 md:p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-base md:text-lg mb-1">{value.icon}</div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 leading-tight">{value.title}</h4>
                <p className="text-xs text-gray-600 leading-tight">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact CTA */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-sm font-bold mb-2">Ready to Transform Your Procurement?</h3>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={() => handleCTAClick('quote')}
              className="border border-white text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;