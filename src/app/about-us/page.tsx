import React from "react";
import Common from "../components/common";
import Image from "next/image";
import Aboutfeatures from "../components/aboutfeatures";

const Page = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-0">
      {/* Common Section */}
      <div className="flex flex-col md:flex-row">
        <Common title="About Us" subtitle="About Us" />
      </div>

      {/* About Section */}
      <div className="wrapper px-4 md:px-14 mt-8 md:mt-12">
        <div className="relative flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-11">
          {/* Left Side - Image */}
          <div className="w-full md:w-[552px] h-[200px] sm:h-[300px] md:h-[409px] bg-[#2B3CAB] rounded-lg relative">
            <div className="absolute inset-3 md:inset-0">
              <Image
                src="/about.png"
                alt="about"
                width={555}
                height={390}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-[550px] text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-[#151875] leading-tight">
              Know About Our Ecommerce Business, History
            </h1>
            <p className="text-[#8A8FB9] text-sm md:text-base leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <button className="mt-6 w-full md:w-[145px] h-[44px] bg-[#FB2E86] text-white text-base md:text-[18px] font-medium rounded-md">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* About Features Section */}
      <div className="mt-12">
        <Aboutfeatures />
      </div>

      {/* section */}
      <div className="container bg-[#FBFBFF] mt-20 py-12 md:mt-40 md:py-20">
        <div className="max-w-[689px] mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl text-[#000000] font-bold mb-8 md:mb-12">
            Our Client Say!
          </h1>

          <div className="flex justify-center space-x-4 mb-6">
            <Image
              src="/person1.png"
              alt="p1"
              width={55}
              height={55}
              className="rounded-full"
            />
            <Image
              src="/person2.png"
              alt="p2"
              width={55}
              height={55}
              className="rounded-full"
            />
            <Image
              src="/person3.png"
              alt="p3"
              width={55}
              height={55}
              className="rounded-full"
            />
          </div>

          <h3 className="text-xl md:text-2xl text-[#151875] font-semibold">
            Selina Gomez
          </h3>
          <p className="text-xs md:text-sm text-[#8A8FB9] font-semibold">
            Ceo At Webecy Digital
          </p>
          <p className="text-sm md:text-base text-[#8A8FB9] mt-4 px-4 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>
          {/* Dots */}
          <div className="flex space-x-2 mt-6">
            <div className="w-[18px] h-[3px] bg-[#FF75B0]"></div>
            <div className="w-[27px] h-[3px] bg-[#FB2E86]"></div>
            <div className="w-[18px] h-[3px] bg-[#FF75B0]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
