import Image from "next/image";
import React from "react";

interface multiuse {
  id: number;
  img: string;
  title: string;
}

const Offer = () => {
  const data: multiuse[] = [
    {
      id: 1,
      img: "/free-delivery 1.png",
      title: "Free Delivery",
    },
    {
      id: 2,
      img: "/cashback 1.png",
      title: "100% Cash Back",
    },
    {
      id: 3,
      img: "/premium-quality 1.png",
      title: "Quality Product",
    },
    {
      id: 4,
      img: "/24-hours-support 1.png",
      title: "24/7 Support",
    },
  ];

  return (
    <div className="px-6 md:px-14">
      <div className="w-full text-[32px] md:text-[42px] text-[#1A0B5B] font-bold flex justify-center mt-10 md:mt-[65px] text-center">
        What Shopex Offer!
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-evenly mt-10 md:mt-16 ">
        {data.map((item) => (
          <div
            className="w-[270px] h-[320px] shadow-[0_8px_40px_0px] shadow-[#31208A0D] flex flex-col gap-6 justify-center bg-white p-4 md:p-6 transition-transform transform hover:scale-105 "
            key={item.id}
          >
            <div className="mx-auto">
              <Image src={item.img} alt="offer" width={65} height={65} />
            </div>
            <div className="text-center">
              <h1 className="text-[20px] md:text-[22px] leading-[25.78px] text-[#151875] font-semibold">
                {item.title}
              </h1>
              <p className="text-[14px] md:text-[16px] leading-[25.6px] text-[#1A0B5B4D] font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
