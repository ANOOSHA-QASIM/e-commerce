import React from 'react';
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { fetchShop } from '@/lib/queries';
import Link from 'next/link';

const Shoplist = async () => {
    const fetchproduct = await fetchShop();
  return (
    <div className="wrapper px-4 sm:px-6 md:px-8 lg:px-12 ">
      {fetchproduct.map((product:any) => (
        <Link href={`/product/${product.slug}`} key={product.id}>
          <div className="md:max-w-[1141px] w-full h-auto md:h-[254px] mx-auto mt-6 p-4 flex flex-col md:flex-row items-center shadow-[0_0px_25px_5px] shadow-[#F6F6FD80]  rounded-lg">
            
            {/* Product Image */}
            <div className="w-full md:w-[314px] h-auto md:h-[218px] flex-shrink-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={314}
                height={218}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:ml-8 mt-4 md:mt-0">
              <div className="flex items-center">
                <h1 className="text-[16px] md:text-[20px] text-[#111C85] font-semibold">
                  {product.name}
                </h1>
                <div className="flex ml-4 space-x-1">
                  <div className="w-3 h-3 bg-[#DE9034] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#E60584] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#5E37FF] rounded-full"></div>
                </div>
              </div>

              {/* Price & Ratings */}
              <div className="flex items-center mt-2">
                <p className="text-[#111C85] text-[14px] md:text-[16px] font-medium">
                  ${product.price}
                  <span className="text-[#FF2AAA] text-[14px] md:text-[16px] line-through ml-3">
                    ${product.discountPercentage}
                  </span>
                </p>
                <div className="flex ml-4 space-x-1">
                  <FaStar className="text-[#FFC416] w-[14px] h-[14px]" />
                  <FaStar className="text-[#FFC416] w-[14px] h-[14px]" />
                  <FaStar className="text-[#FFC416] w-[14px] h-[14px]" />
                  <FaStar className="text-[#FFC416] w-[14px] h-[14px]" />
                  <FaStar className="text-[#B2B2B2] w-[14px] h-[14px]" />
                </div>
              </div>

              {/* Product Description */}
              <p className="text-[#9295AA] text-[14px] md:text-[18px] leading-[22px] md:leading-[40px] font-normal mt-2">
                {product.description}
              </p>

              {/* Icons Section */}
              <div className="flex gap-4 items-center mt-4">
                <FiShoppingCart className="w-[20px] h-[20px] text-[#535399] cursor-pointer hover:text-[#111C85]" />
                <FaRegHeart className="w-[19px] h-[19px] text-[#535399] cursor-pointer hover:text-[#111C85]" />
                <FaSearchPlus className="w-[17px] h-[17px] text-[#535399] cursor-pointer hover:text-[#111C85]" />
              </div>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Shoplist;
