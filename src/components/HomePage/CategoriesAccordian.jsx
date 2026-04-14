import { useState } from "react";
import { ChevronRight } from "lucide-react";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left gap-4 sm:gap-8 md:gap-14"
      >
        <span className="text-base sm:text-lg font-medium text-gray-900">
          {title}
        </span>

        <ChevronRight
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default function CategoriesAccordian() {
  return (
    <div className="px-4 py-6 ">
      <AccordionItem title="Women's Fashion">
        <ul className="space-y-2 sm:text-lg">
          <li>Men</li>
          <li>Women</li>
          <li>Electronics</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Men's Fashion">
        <ul className="space-y-2 sm:text-lg">
          <li>My Account</li>
          <li>Orders</li>
          <li>Wishlist</li>
        </ul>
      </AccordionItem>

      {/* <AccordionItem title="Help"> */}
      <ul className=" text-base sm:text-lg font-medium text-gray-900 space-y-6 mt-3">
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
        <li>Sports & Outdoor</li>
      </ul>
      {/* </AccordionItem> */}
    </div>
  );
}
