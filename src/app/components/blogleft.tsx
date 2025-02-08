import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

interface Iblog {
  title: string;
  image: string;
}

const Blogleft: React.FC<Iblog> = ({ title, image }: Iblog) => {
  return (
    <div className="w-full md:max-w-[870px] mx-auto">
      {/* Blog Image */}
      <div className="w-full h-[453px]">
        <Image
          src={image}
          alt="blog image"
          width={870}
          height={453}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Info */}
      <div className="flex items-center mt-6 space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-[16px] h-[16px] text-[#FB2E86]">
            <FaPenNib size={12} />
          </div>
          <div className="px-2 py-1 rounded-[2px] bg-[#FFE7F9] text-[#151875] text-[14px] font-normal">
            Surf Auction
          </div>
        </div>

        <div className="flex items-center space-x-2 ml-auto">
          <div className="w-[16px] h-[16px] text-[#FFA454]">
            <LuCalendarDays size={14} />
          </div>
          <div className="px-2 py-1 rounded-[2px] bg-[#FFECE2] text-[#151875] text-[14px] font-semibold">
            Aug 09 2020
          </div>
        </div>
      </div>

      {/* Blog Title and Description */}
      <div className="mt-6">
        <h1 className="text-[#151875] text-[30px] font-bold">{title}</h1>
        <p className="mt-4 text-[#8A8FB9] text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
          malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
          purus, cursus vulputate id id dictum at.
        </p>
      </div>
    </div>
  );
};

export default Blogleft;
