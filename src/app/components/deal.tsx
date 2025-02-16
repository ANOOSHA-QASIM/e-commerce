import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchDealproducts } from "@/lib/queries";
import Dealright from "./Dealright";
import { Product } from "@/types";

const Deal = async () => {
  const fetchproduct: Product[] = await fetchDealproducts();

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-6 sm:px-10 lg:px-14 items-center justify-center mt-10 w-full">
      
      {/* Deal Section */}
      <div className="flex flex-col sm:flex-col md:flex-row gap-4 items-center justify-center w-full">
        {fetchproduct.map((product) => (
          <Link href={`/product/${product.slug}`} key={product._id} className="w-full flex justify-center">
            <div className="w-full sm:w-[400px] md:w-[420px] h-[270px] bg-[#FFF6FB] shadow-lg hover:scale-105 hover:bg-pink-100 transition duration-300 flex flex-col justify-between p-6 relative">
              
              {/* Text Section */}
              <div className="text-center">
                <h1 className="text-[#151875] font-semibold text-[22px] sm:text-[24px] md:text-[26px]">
                  23% off in all products
                </h1>
                <button className="text-[#FB2E86] font-semibold text-[14px] sm:text-[16px] mt-2 underline underline-offset-4">
                  Shop Now
                </button>
              </div>
              
              {/* Image Section */}
              <div className="w-[180px] sm:w-[190px] md:w-[213px] h-[180px] sm:h-[190px] md:h-[207px] absolute right-4 bottom-0">
                <Image
                  src={product.imageUrl}
                  alt="img"
                  width={213}
                  height={207}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full flex justify-center">
        <Dealright />
      </div>
    </div>
  );
};

export default Deal;
