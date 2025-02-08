import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";

const Footer2 = () => {
  return (
    <div className="body container h-[53px] bg-[#E7E4F8] flex justify-between items-center">
    
        <div className="wrapper"> 
          <p className="text-[16px] leading-[19.2px] font-medium text-[#9DA0AE]">
            ©Webecy - All Rights Reserved
          </p>
        </div>
        <div className="flex items-center gap-2 wrapper">
          <FaFacebook  className="w-[19.42px] h-[19.42px] bg-[#FFFFFF] text-[#151875] rounded-full "/>
          <RiInstagramLine   className="w-[19.42px] h-[19.42px] bg-[#FFFFFF] text-[#151875] rounded-full " />
          <IoLogoTwitter   className="w-[19.42px] h-[19.42px] bg-[#FFFFFF] text-[#151875] rounded-full " />
        </div>
      </div>
   
  );
};

export default Footer2;
