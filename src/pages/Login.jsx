import React from "react";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
    <div className="min-h-screen">
      <TopBanner></TopBanner>
      <Header></Header>
      <div className=" flex">
        {/* Left Image Section */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[#d9e6ec]">
          <img
            src="/login-image.png"
            alt="shopping"
            className="object-contain h-[80%]"
          />
        </div>

        {/* Right Login Section */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="text-3xl font-semibold mb-2">Log in to Exclusive</h1>

            <p className="text-gray-500 mb-8">Enter your details below</p>

            {/* Form */}
            <form className="space-y-6">
              {/* Email */}
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-black transition"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-black transition"
              />

              {/* Button + Forgot */}
              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Log In
                </button>

                <span className="text-red-500 text-sm cursor-pointer hover:underline">
                  Forget Password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
