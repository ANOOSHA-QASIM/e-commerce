"use client"

import React, { useState } from "react";
import { FiGrid, FiMenu } from "react-icons/fi";
import Common from "../components/common";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Same from "../components/same";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar Toggle State

  return (
    <div className="body container mx-auto px-4">
      <Common title="Shop Left Sidebar" subtitle="Shop Left Sidebar" />
      <Same />

      {/* Responsive Sidebar Button */}
      <div className="flex justify-between items-center mt-6 lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-[#151875] text-white px-4 py-2 rounded-md"
        >
          {sidebarOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row md:max-w-[1920px] h-full mt-6 gap-6">
        {/* Sidebar (Hidden on Small Screens) */}
        <div
          className={`w-full md:max-w-[240px] items-center mt-8 p-4 bg-white shadow-md rounded-md transition-all duration-300 ${
            sidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <h1 className="text-lg font-bold text-[#151875] text-center underline underline-offset-4 decoration-black">
            Product Brand
          </h1>

          {/* Filter Items */}
          {[
            "Coaster Furniture",
            "Fusion Dot High Fashion",
            "Unique Furniture Restor",
            "Dream Furniture Flipping",
            "Young Repurposed",
            "Green DIY Furniture",
          ].map((brand, index) => (
            <div key={index} className="flex items-center gap-2 mt-2 cursor-pointer">
              <IoMdCheckmark className="w-[16px] h-[16px] bg-[#E5E0FC] text-[#603EFF] hover:bg-[#603EFF] hover:text-white" />
              <p className="text-[16px] text-[#7E81A2]">{brand}</p>
            </div>
          ))}

          {/* Discount Section */}
          <h1 className="text-lg font-bold text-[#151875] text-center mt-6 underline">Discount Offer</h1>
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map((discount, index) => (
            <div key={index} className="flex items-center gap-2 mt-2 cursor-pointer">
              <IoMdCheckmark className="w-[16px] h-[16px] bg-[#FFDBF1] text-[#FF3EB2] hover:bg-[#FF3EB2] hover:text-white" />
              <p className="text-[16px] text-[#7E81A2]">{discount}</p>
            </div>
          ))}

          {/* Price Filter */}
          <h1 className="text-lg font-bold text-[#151875] text-center mt-6 underline">Price Filter</h1>
          {["$0.00 - $150.00", "$150.00 - $350.00", "$150.00 - $504.00", "$450.00 +"].map((price, index) => (
            <div key={index} className="flex items-center gap-2 mt-2 cursor-pointer">
              <IoMdCheckmark className="w-[16px] h-[16px] bg-[#FFDBF1] text-[#FF3EB2] hover:bg-[#FF3EB2] hover:text-white" />
              <p className="text-[16px] text-[#7E81A2]">{price}</p>
            </div>
          ))}

          {/* Search Box */}
          <div className="w-full flex items-center border-[1px] border-[#BCBDDB] rounded-md px-2 py-1 mt-4">
            <input type="text" placeholder="$10.00 - 20000$" className="w-full bg-transparent outline-none" />
            <CiSearch size={16} className="text-[#BCBDDB]" />
          </div>
        </div>

        {/* Product Section */}
        <div className="flex-1">
          <Sidebar />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:max-w-[904px] wrapper px-4 mt-12 mb-10">
        <Image src="/full img.png" alt="full img" width={904} height={93} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Page;
