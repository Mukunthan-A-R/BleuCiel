export default function TopBanner() {
  return (
      // fixed top-0 left-0
    <div className="     w-full bg-neutral-900 text-white text-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Left spacer to keep center text perfectly centered */}
        <div className="hidden md:block w-1/4"></div>

        {/* Center banner message */}
        <p className="text-center flex-1 text-xs md:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#" className="underline font-medium ml-2">
            Shop Now
          </a>
        </p>

        {/* Language selector (~3/4 position instead of extreme right) */}
        <div className="w-auto md:w-1/4 flex justify-end pr-4">
          <select className="bg-transparent text-white outline-none cursor-pointer text-xs md:text-sm">
            {/* Full names for UI, backend can map to codes */}
            <option className="text-black">English</option>
            <option className="text-black">French</option>
            <option className="text-black">Spanish</option>
          </select>
        </div>

      </div>
    </div>
  )
}