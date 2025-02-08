import React from 'react'
import { FiGrid, FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Same = () => {
  return (
    <div><div className="md:max-w-[1171px] w-full h-auto flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-24 wrapper mb-20">
            {/* Left Side */}
            <div className="h-full">
              <h1 className="text-[18px] md:text-[22px] font-bold text-[#151875]">
                Ecommerce Accessories & Fashion item
              </h1>
              <p className="text-[12px] text-[#8A8FB9] font-normal">
                About 9,620 results (0.62 seconds)
              </p>
            </div>
    
            {/* Right Side */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 mt-4 md:mt-0">
              {/* Per Page */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="page"
                  className="text-[14px] md:text-[16px] text-[#3F509E] font-normal"
                >
                  Per Page:
                </label>
                <input className="w-[55px] h-[25px] outline-none border-[1px]" />
              </div>
    
              {/* Sort By */}
<div className="flex items-center gap-2 w-full sm:w-auto">
  <span className="text-[14px] md:text-[16px] text-[#3F509E] font-normal">
    Sort By:
  </span>
  <div className="w-full sm:w-[120px] h-[30px] border border-[#E7E6EF] flex items-center justify-between px-2 cursor-pointer">
    <p className="font-normal text-[#8A8FB9] text-[12px] truncate">Best Match</p>
    <IoIosArrowDown size={12} className="text-[#8A8FB9]" />
  </div>
</div>
    
              {/* View Icons */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort"
                  className="text-[14px] md:text-[16px] text-[#3F509E] font-normal"
                >
                  View:
                </label>
                <FiGrid className="text-[#191970] text-lg cursor-pointer" />
                <FiMenu className="text-[#191970] text-lg cursor-pointer" />
                <input className="md:w-[162px] h-[30px] outline-none border-[1px] w-[80px]" />
              </div>
            </div>
          </div>
          </div>
  )
}

export default Same