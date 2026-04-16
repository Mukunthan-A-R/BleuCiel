import React from "react";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";

const Signup = () => {
  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>

      <div className="flex">
        {/* Left Image Section */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[#d9e6ec]">
          <img
            src="/signup-image.png"
            alt="shopping"
            className="object-contain h-[80%]"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="text-3xl font-semibold mb-2">Create an account</h1>

            <p className="text-gray-500 mb-8">Enter your details below</p>

            {/* Form */}
            <form className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-black transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-black transition"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-black transition"
                />
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
              >
                Create Account
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Sign up with Google
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-500 text-sm">
                Already have account?{" "}
                <span className="text-black font-medium cursor-pointer">
                  Log in
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
