import { Heart, Eye, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full">
      {/* Image Container */}
      <div className="relative bg-gray-100 rounded-lg flex items-center justify-center h-56">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />

        {/* Floating Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition">
            <Heart size={16} className="text-gray-600" />
          </button>

          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition">
            <Eye size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-semibold">${product.price}</span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < product.rating ? "#facc15" : "none"}
                stroke="#facc15"
              />
            ))}
          </div>
          <span>({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
