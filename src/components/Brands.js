"use client";

const Brands = () => {
  const brands = [
    "3M.png",
    "abb.png",
    "Ador.png",
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
          <div className="relative lg:hidden">
            <div className="flex items-center">
              <button
                aria-label="Previous brands"
                className="p-2 mr-2 rounded shadow prev-brand bg-white/80 focus-ring"
                onClick={() => {
                  const el = document.querySelector("#brands-scroll");
                  if (el) el.scrollBy({ left: -200, behavior: "smooth" });
                }}
              >
                ‹
              </button>
              <div
                id="brands-scroll"
                className="flex gap-3 px-1 py-2 overflow-x-auto no-scrollbar snap-x snap-mandatory touch-pan-x"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-shrink-0 p-2 bg-white rounded-lg snap-start"
                    style={{ width: 96 }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      className="object-contain w-20 h-20"
                    />
                  </div>
                ))}
              </div>
              <button
                aria-label="Next brands"
                className="p-2 ml-2 rounded shadow next-brand bg-white/80 focus-ring"
                onClick={() => {
                  const el = document.querySelector("#brands-scroll");
                  if (el) el.scrollBy({ left: 200, behavior: "smooth" });
                }}
              >
                ›
              </button>
            </div>
          </div>

          {/* Desktop: grid */}
          <div className="hidden lg:block">
            <div className="grid items-center grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="object-contain w-24 h-24 md:w-28 md:h-28"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
