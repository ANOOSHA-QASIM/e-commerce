import { fetchTrendingproducts } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Deal from "./deal";
import { Product } from "@/types"; 



const Trendingproducts = async () => {
  const fetchproduct: Product[]  = await fetchTrendingproducts();

  return (
    <div className="wrapper">
      <div className="text-center wrapper h-[42px] mt-[120px] text-[42px] text-[#1A0B5B] font-bold items-center flex justify-center">
        Trending Products
      </div>
      <div className="flex flex-wrap gap-4 px-6 sm:px-14 body justify-evenly items-center mt-[45px] h-auto">
        {fetchproduct.map((product) => (
          <Link href={`/product/${product.slug}`} key={product._id} >
           
            <div className="w-full sm:w-[270px] h-auto box-shadow transition-transform transform hover:scale-105">
              <div className="bg-[#F5F6F8] w-full sm:w-[247px] h-[244px] mx-auto mt-[11px] p-10 object-cover hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out">
                <Image
                  src={product.imageUrl}
                  alt="offer"
                  width={171}
                  height={171}
                />
              </div>
              <div className="grid justify-center items-center gap-3 mt-3">
                <p className="font-bold text-[16px] text-center text-[#151875] mt-2">
                  {product.name}
                </p>

                <p className="text-[14px] text-[#151875] font-normal text-center">
                  {product.price}
                  <span className="text-[12px] text-[#1518754D] line-through font-normal ml-3">
                    {product.discountPercentage}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Deal />
    </div>
  );
};

export default Trendingproducts;
