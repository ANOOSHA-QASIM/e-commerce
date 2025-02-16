import { fetchhero2pic } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/types";

const Hero2 = async () => {
  const fetchproducts: Product[] = await fetchhero2pic();

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-10 bg-[#F1F0FF] flex items-center justify-center mt-16">
      {fetchproducts.map((product) => (
        <Link href={`/product/${product.slug}`} key={product.slug} className="w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-8">

            {/* Image Section */}
            <div 
              className=" max-w-[450px] h-auto w-auto bg-cover bg-center flex justify-center items-center p-6 rounded-full"
              style={{ backgroundImage: "url(/image.bg.png)" }}
            >
              <Image
                src={product.imageUrl}
                alt="chair"
                width={509}
                height={550}
                className="w-full max-w-[400px] sm:max-w-[420px] md:max-w-[481px] object-contain"
              />
            </div>

            {/* Text Content Section */}
            <div className="text-center sm:text-left max-w-lg">
              <h1 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#151875] leading-tight">
                Unique Features Of Latest & Trending Products
              </h1>

              {/* Feature Points */}
              <div className="space-y-5 mt-6">
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="w-3 h-3 rounded-full bg-[#F52B70] mt-1" />
                  <p className="text-[14px] sm:text-[16px] text-[#ACABC3] font-semibold leading-[24px] max-w-md">
                    All frames constructed with hardwood solids and laminates
                  </p>
                </div>
                
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="w-3 h-3 rounded-full bg-[#2B2BF5] mt-1" />
                  <p className="text-[14px] sm:text-[16px] text-[#ACABC3] font-semibold leading-[24px] max-w-md">
                    Reinforced with double wood dowels, glue, screw-nails, and machine nails
                  </p>
                </div>

                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="w-3 h-3 rounded-full bg-[#2BF5CC] mt-1" />
                  <p className="text-[14px] sm:text-[16px] text-[#ACABC3] font-semibold leading-[24px] max-w-md">
                    Arms, backs, and seats are structurally reinforced
                  </p>
                </div>
              </div>

              {/* Button and Price Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 sm:justify-start">
                <button className="w-[157px] h-[45px] bg-[#FB2E86] text-white text-[17px] rounded-lg shadow-md hover:bg-[#E02270] transition">
                  Add To Cart
                </button>
                <p className="text-[16px] text-[#151875] font-semibold sm:ml-4">
                  B&B Italian Sofa  
                  <span className="block text-[14px] font-normal text-[#151875]">$32.00</span>
                </p>
              </div>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Hero2;
