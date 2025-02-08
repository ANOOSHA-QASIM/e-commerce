import React from "react";
import Common from "../components/common";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
    <div className="body container">
      <div>
        <Common title="Order Completed" subtitle="Order Completed" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center relative">
        {/* image1 (clock) */}
        <div className="w-[94px] h-[94px] ml-32 mt-36 md:ml-0 md:mt-0 hidden">
          <Image src={"/clock.png"} alt="clock" width={94} height={94} />
        </div>
        <div className="w-full md:max-w-[625px] h-[326px] grid justify-center items-end mt-32 md:mt-0 md:ml-0">
          <div className="w-[88px] h-[81px] rounded-full mx-auto items-center justify-center mt-16">
            <Image src={"/orderbg.png"} alt="bg" width={88} height={81} />
            <div className="w-[65px] h-[65px] bg-[#FFFFFF] rounded-full flex items-center justify-center text-[#FF1788] relative bottom-[72px] left-[11px]">
              <FaCheck className="w-[47px] h-[37px]" />
            </div>
          </div>

          <h1 className="text-[#101750] text-[36px] leading-[42.19px] text-center font-bold mt-6">
            Your Order Is Completed!
          </h1>
          <p className="text-[#8D92A7] text-[16px] leading-[30px] text-center max-w-[625px] font-medium mt-4 w-full ">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation.
          </p>
          <button className="w-[208px] h-[59px] bg-[#FF1788] text-[#FFFFFF] text-[16px] leading-[30px] mt-6 text-center font-semibold mx-auto rounded-[3px]">
            Continue Shopping
          </button>
        </div>
        {/* image2 (checklist) */}
        <div className="w-[70px] h-[70px] hidden absolute left-[85%] top-[470px] md:left-[50%] md:top-[20px]">
          <Image src={"/checklist.png"} alt="checklist" width={70} height={70} />
        </div>
      </div>
      {/* image */}
      <div className="w-full md:max-w-[904px] wrapper px-14 mt-44">
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

export default Page;
