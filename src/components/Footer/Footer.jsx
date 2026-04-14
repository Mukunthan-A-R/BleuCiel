import { Send } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Exclusive */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Exclusive</h2>
            <p className="font-medium mb-3">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>

            <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 text-sm w-full outline-none placeholder:text-gray-500"
              />
              <button className="px-3 hover:text-white transition">
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Support</h2>
            <p className="text-sm mb-2 leading-relaxed">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm mb-2">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Account</h2>
            <ul className="space-y-2 text-sm">
              {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Quick Link</h2>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SOCIAL + COPYRIGHT */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[ FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn].map((Icon, idx) => (
              <span
                key={idx}
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center md:text-right">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>

      </div>
    </footer>
  );
}