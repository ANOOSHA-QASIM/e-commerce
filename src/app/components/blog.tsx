import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

interface Data {
  id: number;
  img: string;
}

const Blog = () => {
  const data1: Data[] = [
    { id: 1, img: "/blog1.png" },
    { id: 2, img: "/blog2.png" },
    { id: 3, img: "/blog3.png" },
  ];

  return (
    <div className='wrapper'>
      <div className='w-full wrapper h-[42px] mt-[100px] text-[42px] text-[#1A0B5B] font-bold items-center flex justify-center'>
        Latest Blog
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-4 lg:px-14 body items-center justify-center mt-[45px] md:gap-6 md:items-center md:justify-center ">
        {data1.map((item) => (
          <div className="w-full h-auto box-shadow mt-5 rounded-[5px] transition-transform transform hover:scale-105" key={item.id}>
            <div className="bg-[#F5F6F8] w-full h-[255px] rounded-[5px]">
              <Image
                src={item.img}
                alt="offer"
                width={370}
                height={255}
                className="object-cover w-full h-full rounded-[5px]"
              />
            </div>
            <div className="grid ml-4 items-center gap-5 mt-2">
              <div className="w-full text-center flex mt-4 items-center border-2">
                <div className="w-[16px] h-[16px] text-[#FB2E86] mt-1">
                  <FaPenNib size={12} />
                </div>
                <div className="font-normal text-[14px] leading-[16.41px] text-[#151875]">
                  SaberAli
                </div>
                <div className="w-[16px] h-[16px] text-[#FFA454] text-center ml-[26px]">
                  <LuCalendarDays size={14} />
                </div>
                <div className='w-[97px] font-normal text-[14px] leading-[16.41px] text-[#151875]'>
                  21 August, 2020
                </div>
              </div>

              <h1 className='text-[18px] leading-[21.09px] text-[#151875] font-bold hover:text-[#FB2E86] cursor-pointer'>
                Top Essential Trends in 2021
              </h1>
              <p className='font-normal text-[16px] leading-[30px] text-[#72718F]'>
                More of this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <Link href="/blog-page" className='w-[78px] h-[38px] text-[#151875] underline font-normal text-[16px] leading-[30px] hover:text-[#FB2E86]'>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;
