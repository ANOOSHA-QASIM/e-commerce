"use client"

import { fetchHomePic } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Product } from "@/types";

const Promotion = () => {
  const [fetchproduct, setFetchProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomePic();
      console.log("Fetched Data:", data);
      setFetchProduct(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-0 ">
      {fetchproduct.map((product: Product) => (
        <Link href={`/product/${product.slug}`} key={product.slug}>
          <div className="flex flex-col lg:flex-row items-center justify-center relative bg-[#F2F0FF] p-6 md:p-12 rounded-lg">
            {/* Left Side */}
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              {/* Image */}
              <div className="max-w-[200px] md:max-w-[387px]">
                <Image
                  src="/bell.png"
                  alt="bell"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
              {/* Text */}
              <div className="text-center lg:text-left mt-6 md:mt-10">
                <div className="text-[#FB2E86] text-lg font-bold">
                  Best Furniture For Your Castle
                </div>
                <h2 className="text-[30px] md:text-[45px] font-bold leading-tight">
                  New Furniture Collection Trends in 2020
                </h2>
                <p className="text-[#8A8FB9] mt-3 text-sm md:text-base max-w-[500px] sm:ml-20 lg:ml-0  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
              </div>
              {/* Button */}
              <div className="mt-6">
                <button className="bg-[#FB2E86] text-white px-6 py-3 text-lg rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative w-[300px] md:w-[500px] h-[300px] md:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
              {/* Background Circles */}
              <div className="absolute w-full h-full rounded-full bg-[#ECD2FA59] border-2"></div>
              <div className="absolute w-4/5 h-4/5 rounded-full bg-[#ECD2FA59] border-2"></div>

              {/* Product Image */}
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={product.imageUrl}
                  alt="sofa"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Promotion;
