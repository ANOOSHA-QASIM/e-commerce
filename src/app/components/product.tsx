import Image from "next/image";
import React from "react";
import { fetchFeatureProducts } from "@/lib/queries";
import Link from "next/link";
import Cartbutton from "./cartbutton";
import type { Product } from "@/types"; 

const Product = async () => {
  const fetchproduct: Product[] = await fetchFeatureProducts();

  return (
    <div className="body wrapper">
      {/* heading div */}
      <div className="relative group w-full wrapper h-[42px] mt-[150] text-[42px] text-[#1A0B5B] font-bold items-center flex justify-center">
        Featured Products
      </div>
    

      {/* Responsive Grid */}
      <div className="body wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10 px-4 sm:px-10 md:px-14 mt-[45px]">
      
        {fetchproduct.map((product: Product) => (
          
          <Link href={`/product/${product.slug}`} key={product.slug}>
            <Cartbutton product={product} />
            {/* Box for each product */}
            <div className="w-full h-[361px] transition-transform transform hover:scale-105 flex flex-col justify-between">
              <div className="w-full h-[236px] bg-[#F6F7FB] p-10 flex justify-center items-center">
                <div className="md:max-w-[178px] md:max-h-[178px] w-full h-full flex items center justify-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={178}
                    height={178}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid justify-center items-center gap-2 flex-1">
                <p className="font-bold text-[18px] text-[#FB2E86] mt-2 text-center">
                  {product.name}
                </p>
                <div className="h-[4] flex justify-center gap-1">
                  <div className="bg-[#05E6B7] w-[14] h-[4] rounded-[10]"></div>
                  <div className="bg-[#F701A8] w-[14] h-[4] rounded-[10]"></div>
                  <div className="bg-[#00009D] w-[14] h-[4] rounded-[10]"></div>
                </div>
                <p className="text-[14px] text-[#151875] text-center">
                  Code - Y523201
                </p>
                <p className="text-[14px] font-normal text-[#151875] text-center">
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
