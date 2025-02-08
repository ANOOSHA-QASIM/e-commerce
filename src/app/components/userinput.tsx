import React from "react";
import { FiGrid, FiMenu } from "react-icons/fi";
import Common from "../components/common";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Page = () => {
  return (
    <div className="body container mx-auto"> {/* Added mx-auto for centering */}
      <div>
        <Common title="Shop Left Sidebar" subtitle="Shop Left Sidebar" />
      </div>
      <div className="md:max-w-[1171px] w-full h-[44px] flex flex-col md:flex-row justify-between items-center mt-24 wrapper mb-16">
        {/* Left Side */}
        <div className="h-full">
          <h1 className="text-[22px] font-bold text-[#151875]">
            Ecommerce Accesories & Fashion item
          </h1>
          <p className="text-[12px] text-[#8A8FB9] font-normal">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8 mt-4 md:mt-0"> {/* Added mt-4 for mobile spacing */}
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="page"
              className="text-[16px] text-[#3F509E] font-normal"
            >
              Per Page:
            </label>
            <input className="w-full md:w-[55px] h-[25px] outline-none border-[1px]" />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 relative w-full md:w-[160px]">
            <div className="text-[16px] text-[#3F509E] font-normal w-[56px] h-[28px]">
              Sort By:
            </div>
            <div className="w-full md:max-w-[96px] h-[28px] border-[1px] border-[#E7E6EF] items-center flex justify-start gap-1 text-center">
              <p className="font-normal text-[#8A8FB9] text-[12px]">
                Best Match
              </p>
              <IoIosArrowDown size={12} className="text-[#8A8FB9]" />
            </div>
          </div>

          {/* View Icons */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-[16px] text-[#3F509E] font-normal"
            >
              View:
            </label>
            <FiGrid className="text-[#191970] text-lg cursor-pointer" />
            <FiMenu className="text-[#191970] text-lg cursor-pointer" />
            <input className="w-full md:w-[162px] h-[30px] outline-none border-[1px]" />
          </div>
        </div>
      </div>


      {/* ... rest of your component ... */}
    </div>
  );
};

export default Page;