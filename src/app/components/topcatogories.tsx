import { fetchtopcatogories } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topcatogories = async () => {
  const fetchproduct = await fetchtopcatogories();
  return (
    <div className="body container">
      <div className="w-full wrapper h-[42px] mt-[90px] text-[42px] leading-[49.22px] text-[#1A0B5B] font-bold items-center flex justify-center ">
        Top Categories
      </div>
     
     {/* Category Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 body justify-center items-center place-items-center sm:mt-16 md:mt-20 lg:mt-24 mt-[55px]">


        {fetchproduct.map((product: any) => (
          <Link key={product.slug} href={`/product/${product.slug}`}>
            {/* Category Box */}
            <div className="w-[269px] h-[345px] md:w-[200px] sm:w-[160px] justify-center items-center transition-transform transform hover:scale-105">
              <div className="bg-[#9877E7] w-[269px] h-[269px] rounded-full box-shadow p-10">
                <div className="bg-[#F6F7FB] w-[269px] h-[269px] rounded-full box-shadow p-10 relative bottom-[50px] right-9 object-cover hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out">
                  <Image
                    src={product.imageUrl}
                    alt="chair"
                    width={178}
                    height={178}
                  />
                  <button className="w-[94px] h-[29px] bg-[#08D15F] text-[12px] text-[#FFFFFF] ml-10 font-medium rounded-[2px]">
                    View Shop
                  </button>
                </div>
              </div>
              <div className="grid justify-center items-center gap-3 mt-3">
              <p className="font-medium text-[20px] sm:text-[16px] text-[#151875] text-center">
  {product.name}
</p>
<p className="text-[16px] sm:text-[14px] text-[#151875] text-center font-normal">
  {product.price}
</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Section with background */}
      <div
        className="container body h-[462px] mt-40 flex justify-center items-center"
        style={{ backgroundImage: "url(/bg-image.png)" }}
      >
        <div className="w-[574px] h-[185px] flex justify-center items-center flex-col gap-6">
          <h1 className="md:max-w-[574px] font-sans h-[108px] text-[35px] leading-[55px] tracking-[1.5%] text-[#151875] text-center font-bold">
            Get Latest Update By Subscribe Our Newsletter
          </h1>
          <button className="bg-[#FB2E86] w-[173px] h-[49px] text-[17px] rounded-[2px] tracking-[2%] text-[#FFFFFF] font-normal sm:mt-0 mt-10">
            Shop Now
          </button>
        </div>
      </div>

      {/* Full Image */}
      <div className="w-full sm:w-[400px] md:w-[904px] wrapper px-14 mt-24">
        <Image
          src={"/full img.png"}
          alt="full img"
          width={904}
          height={93}
        />
      </div>
    </div>
  );
};

export default Topcatogories;
