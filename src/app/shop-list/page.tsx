// Shoplist Route with Proper Responsive Fixes
import React from "react";
import { FiGrid, FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Common from "../components/common";
import Image from "next/image";

import Shoplist from "../components/shop-list";
import Same from "../components/same";

const Page = () => {
  return (
    <div className="body container px-4 md:px-0">
      <div>
        <Common title="Shop List" subtitle="Shop Grid Default" />
      </div>

      <Same />

      <Shoplist/>
      

      <div className="w-full md:max-w-[904px] wrapper px-4 md:px-14 mt-14 md:mt-56 mb-28">
        <Image
          src={"/full img.png"}
          alt="full img"
          width={904}
          height={93}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
