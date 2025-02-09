import { fetchhero2pic } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/types";

const Hero2 = async () => {
  const fetchproducts: Product[] = await fetchhero2pic();

  return (
    <div className="body h-full container px-14 md:min-h-[579px] mt-[150px] flex bg-[#F1F0FF] items-center justify-center">
      {fetchproducts.map((product) => (
        <Link href={`/product/${product.slug}`} key={product.slug}>
          <div className="wrapper flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-8">
            {/* Image Section */}
            <div
              className="w-[100%] sm:w-[420px] md:w-[481px] h-[450px] bg-cover bg-center"
              style={{ backgroundImage: "url(/image.bg.png)" }}
            >
              <div className="h-[450px] justify-center my-3 relative left-14 bottom-6">
                <Image
                  src={product.imageUrl}
                  alt="chair"
                  width={509}
                  height={550}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div className="mt-12 lg:mt-0 sm:mt-8 justify-center items-center text-center sm:text-left">
              <h1 className="w-[100%] sm:w-[350px] md:w-[507px] text-[28px] sm:text-[30px] lg:text-[35px] tracking-[1.5%] text-[#151875] font-bold">
                Unique Features Of Latest & Trending Products
              </h1>
              {/* Point 1 */}
              <div className="flex gap-3 items-center h-[21px] mt-9 justify-center sm:justify-start">
                <div className="w-[11px] h-[11px] rounded-full bg-[#F52B70]" />
                <p className="text-[14px] sm:text-[16px] tracking-[1.5%] font-semibold text-[#ACABC3]">
                  All frames constructed with hardwood solids and laminates
                </p>
              </div>
              {/* Point 2 */}
              <div className="flex gap-3 h-[56px] mt-4 justify-center sm:justify-start">
                <div className="w-[11px] h-[11px] rounded-full bg-[#2B2BF5] mt-2" />
                <p className="text-[14px] sm:text-[16px] w-[400px] sm:w-[450px] h-[56px] leading-[28px] tracking-[1.5%] font-semibold text-[#ACABC3]">
                  Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails
                </p>
              </div>
              {/* Point 3 */}
              <div className="flex gap-3 items-center h-[21px] mt-4 justify-center sm:justify-start">
                <div className="w-[11px] h-[11px] rounded-full bg-[#2BF5CC]" />
                <p className="text-[14px] sm:text-[16px] tracking-[1.5%] font-semibold text-[#ACABC3]">
                  Arms, backs, and seats are structurally reinforced
                </p>
              </div>

              {/* Button and Price */}
              <div className="flex mt-10 flex-col sm:flex-row items-center sm:items-start sm:gap-4 justify-center sm:justify-start">
                <button className="w-[157px] h-[45px] bg-[#FB2E86] text-center text-[17px] tracking-[2%] text-white rounded-[2px]">
                  Add To Cart
                </button>
                <p className="text-[14px] tracking-[2%] text-[#151875] flex flex-col justify-center ml-4 font-medium sm:ml-0">
                  B&B Italian Sofa
                  <span className="text-[14px] font-normal text-[#151875]">$32.00</span>
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
