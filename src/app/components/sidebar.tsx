import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

interface Product {
  id: number;
  title: string;
  image: string;
  sidetitle: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Dictum morbi",
    image: "/side1.png",
    sidetitle: "Product Brand",
  },
  {
    id: 2,
    title: "Sodales sit",
    image: "/side2.png",
    sidetitle: "Product Brand",
  },
  {
    id: 3,
    title: "Nibh varius",
    image: "/side3.png",
    sidetitle: "Product Brand",
  },
  {
    id: 4,
    title: "Mauris quis",
    image: "/side4.png",
    sidetitle: "Product Brand",
  },
  {
    id: 5,
    title: "Morbi sagittis",
    image: "/side5.png",
    sidetitle: "Product Brand",
  },
  {
    id: 6,
    title: "Ultricies venenatis",
    image: "/side6.png",
    sidetitle: "Product Brand",
  },
  {
    id: 7,
    title: "Scelerisque dignissim",
    image: "/side7.png",
    sidetitle: "Product Brand",
  },
];

const Sidebar = ({
  title,
  image,
}: {
  title: string;
  image: string;
  sidetitle: string;
}) => {
  return (
    <div className="w-full mt-6 px-2 sm:px-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 shadow-md shadow-[#F8F6FDBF] rounded-lg">
        {/* Image Section */}
        <div className="w-full sm:w-[250px] flex justify-center">
          <Image
            src={image}
            alt="list1"
            width={250}
            height={180}
            className="w-full sm:w-[250px] h-auto rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between w-full">
          {/* Title */}
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-[16px] sm:text-[18px] text-[#111C85] font-semibold">
              {title}
            </h1>
            <div className="flex space-x-1 mt-2 sm:mt-0">
              <div className="w-3 h-3 bg-[#DE9034] rounded-full"></div>
              <div className="w-3 h-3 bg-[#E60584] rounded-full"></div>
              <div className="w-3 h-3 bg-[#5E37FF] rounded-full"></div>
            </div>
          </div>

          {/* Price and Rating */}
          <div className="flex flex-wrap items-center mt-2">
            <p className="text-[#111C85] text-[14px] font-medium">
              $26.00
              <span className="text-[#FF2AAA] line-through ml-2 text-[12px]">
                $52.00
              </span>
            </p>

            <div className="flex ml-4 space-x-1">
              <FaStar className="text-[#FFC416] w-[12px] sm:w-[14px] h-[12px] sm:h-[14px]" />
              <FaStar className="text-[#FFC416] w-[12px] sm:w-[14px] h-[12px] sm:h-[14px]" />
              <FaStar className="text-[#FFC416] w-[12px] sm:w-[14px] h-[12px] sm:h-[14px]" />
              <FaStar className="text-[#FFC416] w-[12px] sm:w-[14px] h-[12px] sm:h-[14px]" />
              <FaStar className="text-[#B2B2B2] w-[12px] sm:w-[14px] h-[12px] sm:h-[14px]" />
            </div>
          </div>

          {/* Description */}
          <p className="text-[#9295AA] text-[13px] sm:text-[14px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          {/* Icons */}
          <div className="flex gap-4 items-center mt-3">
            <FiShoppingCart className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#535399] cursor-pointer hover:text-[#333]" />
            <FaRegHeart className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#535399] cursor-pointer hover:text-[#333]" />
            <FaSearchPlus className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#535399] cursor-pointer hover:text-[#333]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarList = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4">
      {products.map((product) => (
        <Sidebar
          key={product.id}
          title={product.title}
          image={product.image}
          sidetitle={product.sidetitle}
        />
      ))}
    </div>
  );
};

export default SidebarList;
