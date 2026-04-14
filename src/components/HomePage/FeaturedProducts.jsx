import ps5 from "../../assets/featuredProducts/ps5.jpg"
import women from "../../assets/featuredProducts/women.png"
import speakers from "../../assets/AdBanner/azus.jpg"
import perfume from "../../assets/AdBanner/azus.jpg"

export default function FeaturedProducts() {
  return (
    <section className="w-full py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-6 bg-red-500 rounded"></div>
          <h2 className="font-semibold text-red-600">Featured</h2>
        </div>
        <h2 className="my-3 mb-5 text-xl font-semibold">Newely Featured Products</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Large PS5 Card */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden flex items-end p-8 min-h-105">
            <img
              src={ps5}
              alt="Playstation"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="relative z-10 max-w-xs">
              <h3 className="text-3xl font-bold mb-2">
                PlayStation 5
              </h3>
              <p className="text-sm font-medium mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="underline text-sm font-sans">Shop Now</button>
            </div>
          </div>

          {/* Right side layout */}
          <div className="grid grid-rows-2 gap-6">

            {/* Women Collection */}
            <div className="relative bg-black text-white rounded-lg overflow-hidden p-8 min-h-[200px] flex items-end">
              <img
                src={women}
                alt="Women"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />

              <div className="relative z-10 max-w-xs">
                <h3 className="text-xl font-semibold mb-2">
                  Women’s Collections
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="underline text-sm">Shop Now</button>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Speakers */}
              <div className="relative bg-black text-white rounded-lg overflow-hidden p-6 flex items-end min-h-[180px]">
                <img
                  src={speakers}
                  alt="Speakers"
                  className="absolute inset-0 w-full h-full object-contain"
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">Speakers</h3>
                  <p className="text-xs text-gray-300">
                    Amazon wireless speakers
                  </p>
                  <button className="underline text-xs mt-1">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative bg-black text-white rounded-lg overflow-hidden p-6 flex items-end min-h-[180px]">
                <img
                  src={perfume}
                  alt="Perfume"
                  className="absolute inset-0 w-full h-full object-contain"
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">Perfume</h3>
                  <p className="text-xs text-gray-300">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="underline text-xs mt-1">
                    Shop Now
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}