"use client";

import React, { useState } from "react";
import Common from "../components/common";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { useWishlist } from "../whishlist/WishlistContext";

const Hektodemo = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Header */}
      <div>
        <Common title="Hekto Demo" subtitle="Hekto Demo" />
      </div>

      {/* Main Content */}
      <div className="wrapper mb-20 px-4 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row gap-6 mt-16">
          {/* Left Side */}
          <div className="flex-1">
            <h1 className="text-[#1D3178] text-lg sm:text-xl font-bold">
              Hekto Demo
            </h1>
            <p className="text-[#1D3178] text-sm sm:text-base font-medium mt-2">
              Cart/ Information/ Shipping/ Payment
            </p>

            <div className="bg-[#F8F8FD] p-4 sm:p-6 md:p-8 mt-4">
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-[#1D3178] text-lg font-bold">
                    Contact Information
                  </h1>
                  <p className="text-[#C1C8E1] text-sm flex gap-1">
                    Already have an account?
                    <span className="text-[#C1C8E1] font-medium">Log in</span>
                  </p>
                </div>

                {/* Email Input */}
                <div
                  className={`border-b-2 h-10 mt-6 transition-all duration-300 ${
                    focusedInput === "email"
                      ? "border-[#FB2E86]"
                      : "border-[#BFC6E0]"
                  }`}
                >
                  <input
                    className="w-full h-full bg-transparent outline-none text-sm text-[#1D3178] px-2"
                    placeholder="Email or mobile phone number"
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <IoIosCheckmark
                    size={14}
                    className="bg-[#19D16F] text-white rounded-full"
                  />
                  <p className="text-[#8A91AB] text-sm">
                    Keep me up to date on news and exclusive offers
                  </p>
                </div>

                <h1 className="text-[#1D3178] text-lg mt-16 font-bold">
                  Shipping address
                </h1>

                {/* Input Fields */}
                {[
                  "First name (optional)",
                  "Last name",
                  "Address",
                  "Apartment, suite, etc. (optional)",
                  "City",
                  "Bangladesh",
                  "Postal Code",
                ].map((placeholder, index) => (
                  <div
                    key={index}
                    className={`border-b-2 h-10 mt-6 transition-all duration-300 ${
                      focusedInput === placeholder
                        ? "border-[#FB2E86]"
                        : "border-[#BFC6E0]"
                    }`}
                  >
                    <input
                      className="w-full h-full bg-transparent outline-none text-sm text-[#1D3178] px-2"
                      placeholder={placeholder}
                      onFocus={() => setFocusedInput(placeholder)}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                ))}

                <button className="w-full sm:w-[200px] h-[44px] bg-[#FB2E86] mt-10 rounded-md text-white text-base font-medium">
                  Continue Shipping
                </button>
              </div>
            </div>
          </div>

          {/* Right Side (Wishlist) */}
          <div className="flex-1">
            <div className="bg-[#F8F8FD] p-4 sm:p-6 md:p-8 mt-4">
              {wishlist.length === 0 ? (
                <p className="text-[#1D3178] text-lg font-bold text-center">
                  Your Wishlist is Empty!
                </p>
              ) : (
                wishlist.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b-2 py-4"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-24 h-24 relative">
                        <Image
                          src={item.imageUrl || "/placeholder.png"}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-black text-sm font-medium">
                          {item.name}
                        </h3>
                        <p className="text-[#A1A8C1] text-xs">
                          Price: {item.price}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Summary Box */}
            <div className="bg-[#F4F4FC] rounded-md p-6 mt-6">
              <p className="text-[#1D3178] text-lg font-medium flex justify-between border-b-2 pb-2">
                Subtotals:
                <span className="text-[#15245E] text-base font-normal">
                  £219.00
                </span>
              </p>
              <p className="text-[#1D3178] text-lg font-medium flex justify-between border-b-2 pb-2 mt-4">
                Totals:
                <span className="text-[#15245E] text-base font-normal">
                  £325.00
                </span>
              </p>
              <div className="flex items-center gap-2 mt-6">
                <IoIosCheckmark
                  size={14}
                  className="bg-[#19D16F] text-white rounded-full"
                />
                <p className="text-[#8A91AB] text-xs">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              <button className="w-full bg-[#19D16F] hover:bg-[#17B861] transition-colors duration-300 mt-6 rounded-md text-white font-bold text-sm py-2 shadow-md">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hektodemo;
