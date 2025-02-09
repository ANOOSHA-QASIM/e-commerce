import React from "react";
import Common from "../components/common";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types"; 
import { fetchAllProducts } from "@/lib/queries";

const colours = (
  <div className="h-[10px] flex gap-1 items-center justify-center mt-2">
    <div className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></div>
    <div className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></div>
    <div className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></div>
  </div>
);

const Page = async () => {
  const fetchproduct: Product[] = await fetchAllProducts()
  

  return (
    <div className="container mx-auto px-4 md:px-0">
      <Common title="Shop Grid Default" subtitle="Shop Grid Default" />
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:px-14">
        {fetchproduct.map((product) => (
          <Link href={`/product/${product.slug}`} key={product._id} className="flex justify-center">
            <div className="w-full max-w-[270px] h-auto mt-8 sm:mt-12 transition-transform transform hover:scale-105">
              <div className="bg-[#F6F7FB] p-1 hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={201}
                  height={201}
                  className="w-[80%] sm:w-[201px] h-auto mx-auto mt-6"
                />
              </div>
              <h1 className="text-[#151875] text-[16px] sm:text-[18px] font-bold text-center mt-3">{product.name}</h1>
              <div className="flex justify-center items-center">{colours}</div>
              <p className="text-[#151875] text-[14px] sm:text-[16px] font-normal text-center mt-3">
                ${product.price}
                <span className="text-[#FB2E86] ml-2">{product.discountPercentage}%</span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Full Image */}
      <div className="w-full mt-16 sm:mt-24 px-4 sm:px-0 flex justify-center">
        <Image src="/full img.png" alt="full img" width={904} height={93} className="w-full max-w-[904px] h-auto" />
      </div>
    </div>
  );
};

export default Page;
