import Image from "next/image";
import React from "react";
import { Product } from "@/types";

import Link from "next/link";
import { fetchLatestproducts } from "@/lib/queries";

const Latestproducts = async () => {
  const fetchproduct: Product[] = await fetchLatestproducts();
  
  return (
    <div className="body  wrapper">
      {/* latest product */}
      <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-3 mt-14 mr-6">
  <div className="w-6 h-1 bg-[#FB2E86] rounded-full"></div>
  <div className="w-4 h-1 bg-[#FEBAD7] rounded-full"></div>
  <div className="w-4 h-1 bg-[#FEBAD7] rounded-full"></div>
  <div className="w-4 h-1 bg-[#FEBAD7] rounded-full"></div>
</div>

      <div className=" text-center wrapper h-[42px] mt-[65px] text-[42px] text-[#1A0B5B] font-bold items-center flex justify-center">
        Latest Products
      </div>

     {/* options div */}
<div className="flex flex-wrap justify-center md:justify-center items-center text-[#151875] font-medium text-[18px] mt-10 wrapper">
  <h1 className="hover:text-[#FB2E86] underline cursor-pointer mb-4 md:mb-0 md:text-left mx-2">
    New Arrival
  </h1>
  <h1 className="hover:text-[#FB2E86] underline cursor-pointer mb-4 md:mb-0 md:text-left mx-2">
    Best Seller
  </h1>
  <h1 className="hover:text-[#FB2E86] underline cursor-pointer mb-4 md:mb-0 md:text-left mx-2">
    Featured
  </h1>
  <h1 className="hover:text-[#FB2E86] underline cursor-pointer mb-4 md:mb-0 md:text-left mx-2">
    Special Offer
  </h1>
</div>


      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-6 px-4 sm:px-10 md:px-14 overflow-hidden wrapper mt-[45px]">
        {fetchproduct.map((product) => (
          <Link href={`/product/${product.slug}`} key={product._id}>
            {/* Card 1 */}
            <div className="w-full max-w-[365px] mx-auto transition-transform transform hover:scale-105 hover:bg-slate-200 ">
              <div className="w-full">
                <div className="h-[269.96px] w-full bg-[#F7F7F7] flex justify-center items-center">
                  <div className="max-w-[223px] w-full h-[229px] flex justify-center items-center object-cover">
                     <Image
                      src={product.imageUrl}
                      alt="latest-1"
                      width={223}
                      height={229}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2">
                  <p className="text-[16px] text-[#151875] border-b-2 border-[#EEEFFB]">
                    {product.name}
                  </p>
                  <div className="text-right gap-3">
                    <p className="text-[14px] leading-[16.41px] text-[#151875]">
                      {product.price}
                      <span className="ml-2 text-[12px] text-[#FB2448]">
                        {product.discountPercentage}% off
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Latestproducts;
