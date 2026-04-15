import { Heart, Eye, Star } from "lucide-react";

export default function RelatedItems() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 5,
      reviews: 88,
      image: "/images/gamepad.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "/images/keyboard.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "/images/monitor.png",
    },
    {
      id: 4,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 65,
      image: "/images/cooler.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-4 h-8 bg-red-500 rounded-sm"></div>
          <h2 className="text-red-500 font-semibold">Related Item</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image Box */}
              <div className="relative bg-gray-100 rounded-md h-56 flex items-center justify-center p-6 overflow-hidden">
                {/* Discount */}
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}

                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="bg-white p-1.5 rounded-full shadow">
                    <Heart size={16} />
                  </button>

                  <button className="bg-white p-1.5 rounded-full shadow">
                    <Eye size={16} />
                  </button>
                </div>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-36 object-contain"
                />

                {/* Add to Cart */}
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Add To Cart
                </button>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-medium">{product.name}</h3>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-red-500 font-semibold">
                    ${product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < product.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  <span className="text-gray-500">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
