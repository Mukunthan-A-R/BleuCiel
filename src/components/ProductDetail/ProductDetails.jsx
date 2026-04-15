import { useState } from "react";
import { Star, Heart, Truck, RotateCcw } from "lucide-react";
import headphones from "../../assets/general/headphones.png";
import watch from "../../assets/general/watch.png";

export default function ProductDetails() {
  const images = [
    headphones,
    watch,
    "/images/gamepad3.png",
    "/images/gamepad4.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(2);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("red");

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE IMAGES */}
        <div className="flex gap-4">
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer border rounded-md p-2 
                ${selectedImage === img ? "border-black" : "border-gray-200"}`}
              >
                <img src={img} alt="" className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="bg-gray-100 rounded-md flex items-center justify-center p-10 flex-1">
            <img
              src={selectedImage}
              alt="product"
              className="max-h-[420px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE PRODUCT INFO */}
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex text-yellow-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} />
            </div>

            <span className="text-gray-500">(150 Reviews)</span>

            <span className="text-green-600">In Stock</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold">$192.00</p>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            PlayStation 5 Controller Skin high quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal.
          </p>

          {/* Colors */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Colours:</span>

            <button
              onClick={() => setColor("red")}
              className={`w-5 h-5 rounded-full bg-red-500 border
              ${color === "red" ? "ring-2 ring-black" : ""}`}
            />

            <button
              onClick={() => setColor("gray")}
              className={`w-5 h-5 rounded-full bg-gray-400 border
              ${color === "gray" ? "ring-2 ring-black" : ""}`}
            />
          </div>

          {/* Size */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Size:</span>

            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 border rounded-md text-sm
                  ${size === s ? "bg-red-500 text-white border-red-500" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buy */}
          <div className="flex items-center gap-4">
            {/* Quantity */}
            <div className="flex border rounded-md overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 bg-gray-100"
              >
                -
              </button>

              <span className="px-4 flex items-center">{quantity}</span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 bg-red-500 text-white"
              >
                +
              </button>
            </div>

            {/* Buy Button */}
            <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition">
              Buy Now
            </button>

            {/* Wishlist */}
            <button className="border rounded-md p-2">
              <Heart size={18} />
            </button>
          </div>

          {/* Delivery Box */}
          <div className="border rounded-md divide-y">
            <div className="flex items-start gap-4 p-4">
              <Truck className="mt-1" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <RotateCcw className="mt-1" />
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
