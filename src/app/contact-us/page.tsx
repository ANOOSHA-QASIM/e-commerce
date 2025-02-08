import React from "react";
import Common from "../components/common";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-0 body  ">
      <div>
      <Common title="Contact Us" subtitle="Contact Us" />
      </div>

      {/* Main Section */}
      <div className="mt-16 flex flex-col md:flex-row md:justify-between items-start gap-10 lg:px-14 md:px-8 px-6">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h1 className="text-[#151875] text-[28px] md:text-[36px] font-bold">
            Information About Us
          </h1>
          <p className="text-[#8A8FB9] text-[14px] md:text-[16px] font-semibold leading-[25px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
            quis bibendum quam.
          </p>

          {/* Circles */}
          <div className="flex gap-3 mt-6">
            <div className="w-6 h-6 rounded-full bg-[#5625DF]"></div>
            <div className="w-6 h-6 rounded-full bg-[#FF27B7]"></div>
            <div className="w-6 h-6 rounded-full bg-[#37DAF3]"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <h1 className="text-[#151875] text-[28px] md:text-[36px] font-bold">
            Contact Way
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Contact Items */}
            {[
              { bg: "#5726DF", title: "Tel: 877-67-88-99", subtitle: "E-Mail: shop@store.com" },
              { bg: "#FB2E86", title: "Support Forum", subtitle: "For over 24hr" },
              { bg: "#FFB265", title: "20 Margaret St, London", subtitle: "Great Britain, 3NM98-LK" },
              { bg: "#1BE982", title: "Free standard shipping", subtitle: "on all orders." },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full`} style={{ backgroundColor: item.bg }}></div>
                <div>
                  <p className="text-[#8A8FB9] text-[15px] md:text-[16px] font-semibold">{item.title}</p>
                  <p className="text-[#8A8FB9] text-[14px] font-semibold">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="mt-16 lg:px-14 md:px-8">
        <h1 className="text-[#151875] text-[28px] md:text-[36px] font-bold px-6">
          Get In Touch
        </h1>
        <p className="text-[#8A8FB9] text-[14px] md:text-[16px] font-semibold leading-[25px] mt-4 max-w-2xl px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor lobortis quis bibendum quam.
        </p>
      </div>

      {/* Form Section */}
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-10 items-center lg:px-14 md:px-8 px-6">
        {/* Left Side (Form) */}
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Your Name*" className="w-full md:w-1/2 h-12 border border-[#A4B6C8] text-[14px] p-3 rounded-md outline-none" />
            <input type="email" placeholder="Your E-mail" className="w-full md:w-1/2 h-12 border border-[#A4B6C8] text-[14px] p-3 rounded-md outline-none" />
          </div>
          <input type="text" placeholder="Subject*" className="w-full h-12 border border-[#A4B6C8] text-[14px] p-3 rounded-md outline-none mt-4" />
          <textarea placeholder="Type Your Message*" className="w-full h-32 border border-[#A4B6C8] text-[14px] p-3 rounded-md outline-none mt-4"></textarea>
          <button className="w-full md:w-40 h-12 bg-[#FB2E86] text-white text-[16px] font-medium rounded-md mt-4">
            Send Mail
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image src="/contact.png" alt="contact" width={400} height={400} className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Page;
