'use client';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: 'Power (Thermal, Hydro Etc.)',
      desc: 'Power generation and distribution equipment',
      icon: '⚡'
    },
    {
      id: 2,
      name: 'Sugar Factory',
      desc: 'Sugar manufacturing and processing equipment',
      icon: '🏭'
    },
    {
      id: 3,
      name: 'Cement Factory',
      desc: 'Cement production and processing machinery',
      icon: '🏗️'
    },
    {
      id: 4,
      name: 'Pharmaceutical Plant',
      desc: 'Pharmaceutical manufacturing equipment',
      icon: '💊'
    },
    {
      id: 5,
      name: 'Steel Plant',
      desc: 'Steel production and processing equipment',
      icon: '🔧'
    },
    {
      id: 6,
      name: 'Mining & Minerals',
      desc: 'Mining and mineral processing equipment',
      icon: '⛏️'
    },
    {
      id: 7,
      name: 'Food & Beverages',
      desc: 'Food processing and beverage production',
      icon: '🍽️'
    },
    {
      id: 8,
      name: 'Other Various Industries',
      desc: 'Diverse industrial solutions and equipment',
      icon: '🏢'
    }
  ];

  return (
    <div className="py-3 sm:py-4">
      {/* Compact Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-base sm:text-lg lg:text-xl font-bold mb-1">Industries We Are Supporting</h1>
          <p className="text-xs sm:text-sm opacity-90">Our Vision - To Solve End to End Procurement for Factories/Plants.</p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-sm sm:text-base font-bold text-center mb-4">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-md p-2 md:p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-base md:text-lg mb-1">{industry.icon}</div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 leading-tight">{industry.name}</h4>
                <p className="text-xs text-gray-600 leading-tight">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
