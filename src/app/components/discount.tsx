import { fetchDiscountproduct } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Product } from "@/types";

const Discount = async () => {
  const fetchproduct: Product[] = await fetchDiscountproduct();
  return (
    <div className="body px-6 sm:px-8 md:px-14 justify-center container">
      {fetchproduct.map((product) => (
        <Link key={product.slug} href={`/product/${product.slug}`}>
          {/* Heading */}
          <div className="w-full wrapper h-[42px] mt-[80px] md:mt-[120px] text-[32px] md:text-[42px] text-[#1A0B5B] font-bold flex justify-center">
            Discount Item
          </div>

          {/* Main Container */}
          <div className="max-w-[1214px] w-full h-auto md:h-[597px] wrapper mt-10 px-4 sm:px-6 md:px-14">
            {/* Options div */}
            <div className="flex flex-wrap justify-center md:space-x-4 items-center text-[#151875] font-medium text-[16px] md:text-[18px] space-x-4  wrapper">
              <h1 className="hover:text-[#FB2E86] hover:underline cursor-pointer">
                Wood Chair
              </h1>
              <h1 className="hover:text-[#FB2E86] hover:underline cursor-pointer">
                Plastic Chair
              </h1>
              <h1 className="hover:text-[#FB2E86] hover:underline cursor-pointer">
                Sofa Collection
              </h1>
            </div>

            {/* Flex Container for Content & Image */}
            <div className="flex flex-col md:flex-row items-center mt-8 md:mt-12 gap-6 md:gap-12">
              {/* Text Content */}
              <div className="w-full md:max-w-[50%]">
                <h1 className="text-[28px] md:text-[35px] tracking-[1.5%] text-[#151875] font-bold">
                  20% Discount On All Products
                </h1>
                <p className="text-[18px] md:text-[21px] tracking-[1.5%] text-[#FB2E86] mt-4">
                  Eams Sofa Compact
                </p>
                <p className="text-[15px] md:text-[17px] leading-[28px] md:leading-[30px] tracking-[2%] font-normal text-[#B7BACB] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget feugiat habitasse nec, bibendum condimentum.
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-2 md:gap-4 mt-4">
                  <p className="flex gap-2 text-[15px] md:text-[16px] text-[#B7BACB]">
                    <FaCheck className="text-[#7569B2]" /> Material expose like
                    metals
                  </p>
                  <p className="flex gap-2 text-[15px] md:text-[16px] text-[#B7BACB]">
                    <FaCheck className="text-[#7569B2]" /> Clear lines and
                    geometric figures
                  </p>
                  <p className="flex gap-2 text-[15px] md:text-[16px] text-[#B7BACB]">
                    <FaCheck className="text-[#7569B2]" /> Simple neutral
                    colors.
                  </p>
                  <p className="flex gap-2 text-[15px] md:text-[16px] text-[#B7BACB]">
                    <FaCheck className="text-[#7569B2]" /> Material expose like
                    metals
                  </p>
                </div>

                {/* Shop Now Button */}
                <button className="w-full sm:w-[200px] mt-6 md:mt-10 h-[50px] md:h-[57px] bg-[#FB2E86] text-white text-[16px] md:text-[17px] rounded-[2px] tracking-[2%] text-center">
                  Shop Now
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full md:max-w-[50%] flex justify-center">
                {/* Pink Circle (Responsive) */}
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[472px] md:h-[472px] rounded-full bg-[#FCECF1] flex justify-center items-center">
                  {/* Product Image */}
                  <Image
                    src={product.imageUrl}
                    alt="chair"
                    width={350}
                    height={350}
                    className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Discount;
