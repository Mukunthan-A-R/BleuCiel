import { useState } from "react";
import { Heart, Eye, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Casual Jacket",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg",
    price: 260,
    rating: 5,
  },
  {
    id: 2,
    name: "Luxury Travel Bag",
    img: "https://m.media-amazon.com/images/I/71vz71m5usL._AC_UY1000_.jpg",
    price: 960,
    rating: 4,
  },
  {
    id: 3,
    name: "RGB Liquid Cooler",
    img: "/products/cooler.png",
    price: 160,
    rating: 4,
  },
  {
    id: 4,
    name: "Wooden Side Table",
    img: "/products/table.png",
    price: 360,
    rating: 5,
  },
  {
    id: 5,
    name: "Running Shoes",
    img: "/products/shoes.png",
    price: 120,
    rating: 4,
  },
  {
    id: 6,
    name: "Classic Watch",
    img: "/products/watch.png",
    price: 220,
    rating: 5,
  },
  {
    id: 7,
    name: "Wireless Headphones",
    img: "/products/headphones.png",
    price: 180,
    rating: 4,
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    img: "/products/keyboard.png",
    price: 140,
    rating: 4,
  },
];

export default function BestSellers() {
  const [expanded, setExpanded] = useState(false);

  const visibleProducts = expanded ? products : products.slice(0, 4);

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-6 bg-red-500 rounded"></div>
            <h2 className="text-lg font-semibold">Best Sellers</h2>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-red-500 text-white px-6 py-2 rounded text-sm hover:bg-red-600 transition"
          >
            {expanded ? "Collapse" : "View All"}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {visibleProducts.map((p, index) => {
            const isNewItem = expanded && index >= 4;

            return (
              <div
                key={p.id}
                className={`group ${
                  isNewItem ? "opacity-0 translate-y-4 animate-fadeIn" : ""
                }`}
                style={
                  isNewItem
                    ? {
                        animationDelay: `${(index - 4) * 80}ms`,
                        animationFillMode: "forwards",
                      }
                    : {}
                }
              >
                {/* Image card */}
                <div className="relative bg-gray-100 rounded-lg flex items-center justify-center h-56">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-40 object-contain"
                  />

                  {/* Action icons */}
                  <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
                      <Heart size={16} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow hover:scale-105 transition">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="mt-4 text-sm font-medium text-gray-900">
                  {p.name}
                </h3>

                {/* Price */}
                <p className="text-red-500 mt-1 font-semibold">${p.price}</p>

                {/* Rating */}
                <div className="flex gap-1 mt-1">
                  {[...Array(p.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease forwards;
          }
        `}
      </style>
    </section>
  );
}
