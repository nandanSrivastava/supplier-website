'use client';

const Brands = () => {
  const brands = [
    { name: 'ABB', logo: '/brands/abb.png' },
    { name: 'Bharat Bijlee', logo: '/brands/bharat bijlee.jpg' },
    { name: 'Havells', logo: '/brands/havells.png' },
    { name: 'Milton Roy', logo: '/brands/milton roy.png' },
    { name: 'PSP Pumps', logo: '/brands/psp pumps.png' },
    { name: 'Rotork', logo: '/brands/rotork.jpg' },
    { name: 'Schneider Electric', logo: '/brands/schneider.png' },
    { name: 'Siemens', logo: '/brands/seimens.png' },
    { name: 'Shakti', logo: '/brands/shakti.png' },
    { name: 'SPX Flow', logo: '/brands/spxflow.png' }
  ];

  return (
    <div className="py-0.5 sm:py-1">
      {/* Compact Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1">
        <div className="max-w-5xl mx-auto px-2 text-center">
          <h1 className="text-xs sm:text-sm font-bold mb-0.5">Trusted Brand Partners</h1>
          <p className="text-[10px] opacity-90">We partner with world-renowned brands</p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="bg-gray-50 py-1">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-base sm:text-xl font-bold text-center mb-4">Our Brand Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-28 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
