import { Truck, Headphones, BadgeCheck } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      
      {/* Icon Badge */}
      <div className="relative mb-4">
        {/* Outer circle */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  flex items-center justify-center">
          
          {/* Inner circle */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center">
            <Icon size={20} className="text-white" strokeWidth={2} />
          </div>

        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-semibold tracking-wide text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-55">
        {description}
      </p>
    </div>
  );
};

const FeatureHighlights = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        <FeatureItem
          icon={Truck}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />

        <FeatureItem
          icon={Headphones}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />

        <FeatureItem
          icon={BadgeCheck}
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />

      </div>
    </div>
  );
};

export default FeatureHighlights;