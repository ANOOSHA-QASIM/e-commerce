import React from 'react';

const Footer = () => {
  return (
    <main className="body container h-auto bg-[#EEEFFB] font-semibold md:flex-row flex flex-col   mt-[90px] justify-evenly  md:px-14  ">
      <div className="  mb-8">
        {/* Box 1 */}
        <h1 className="text-[38px] text-[#000000] mt-[70px]">Hekto</h1>
        <div className=" md:w-[300px]  md:max-h-[44px] flex  md:flex-row items-center md:my-8 my-10">
  <input
    type="text"
    placeholder="Enter Email Address"
    className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9] text-center outline-none  md:w-full md:flex-1 h-[44px] px-4"
  />
  <button className="w-[135px] md:max-w-[135px] h-[44px] rounded-[3px] bg-[#FB2E86] text-[#EEEFFB] font-medium text-[16px] leading-[18.75px] md:mt-0">
    Sign Up
  </button>
</div>


        <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Contact Info</p>
        <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9] mt-2 w-[300px] md:w-full lg-w-[300px] ">
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      {/* Box 2 */}
      <div className=" mb-8">
        <h1 className="text-[22px] leading-[52.78px] text-[#000000] mt-[60px]">Categories</h1>
        <div className="gap-6 grid mt-6">
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Laptops & Computers</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Cameras & Photography</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Smart Phones & Tablets</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Video Games & Consoles</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Video Games & Consoles</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className=" mb-8">
        <h1 className="text-[22px] leading-[52.78px] text-[#000000] mt-[60px]">Customer Care</h1>
        <div className="gap-6 grid mt-6">
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">My Account</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Discount</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Returns</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Orders History</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Order Tracking</p>
        </div>
      </div>

      {/* Box 4 */}
      <div className=" mb-8">
        <h1 className="text-[22px] leading-[52.78px] text-[#000000] mt-[60px]">Pages</h1>
        <div className="gap-6 grid mt-6">
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Blog</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Browse the Shop</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Category</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Pre-Built Pages</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">Visual Composer Elements</p>
          <p className="text-[16px] leading-[19.2px] font-normal text-[#8A8FB9]">WooCommerce Pages</p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
