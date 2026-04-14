import { useEffect, useState } from "react"
import iphoneImage from "../../assets/AdBanner/iphone.png"
import AzusImage from "../../assets/AdBanner/azus.jpg"

const banners = [
  { image: iphoneImage },
  { image: AzusImage },
  { image: iphoneImage },
]

export default function AddBannerScroller() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black overflow-hidden">

      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="min-w-full h-[220px] md:h-[380px] flex items-center justify-center"
          >
            <img
              src={banner.image}
              alt="banner"
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 py-4">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-red-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  )
}