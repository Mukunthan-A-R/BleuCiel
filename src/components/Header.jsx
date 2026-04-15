import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5 md:py-7">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          BleuCiel
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium">
          <a href="#" className="hover:text-gray-600">
            Home
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
          </a>
          <a href="#" className="hover:text-gray-600">
            About
          </a>
          <a href="#" className="hover:text-gray-600">
            Sign Up
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5 md:gap-7">
          {/* Search */}
          <div className="hidden sm:flex items-center bg-gray-100 px-5 py-3 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm md:text-base w-40 md:w-64"
            />
            <Search size={20} className="text-gray-500" />
          </div>

          {/* Icons */}
          <Heart size={22} className="cursor-pointer" />
          <ShoppingCart size={22} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
