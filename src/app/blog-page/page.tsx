import React from "react";
import Common from "../components/common";
import Image from "next/image";
import Blogleft from "../components/blogleft";
import Blogright from "../components/blogright";
import Link from "next/link";

const Page = () => {
  return (
    <div className="body container mx-auto px-4 md:px-0">
      <div>
        <Common title="Blog Page" subtitle="Blog Page" />
      </div>

      <div className="flex flex-col md:flex-row mt-16 space-y-8 md:space-y-0 md:px-14">
        {/* Left Section */}
        <div className="w-full md:w-2/3 space-y-6">
          <Blogleft
            title="Mauris at orci non vulputate diam tincidunt nec."
            image="/blog p1.png"
          />
          <Link href={"single-blog"}>
            <button className="w-[100px] h-[22px] text-[#151875] text-[18px] font-semibold flex items-center">
              Read More
              <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86] ml-[2px]"></div>
            </button>
          </Link>

          <Blogleft
            title="Aenean vitae in aliquam ultrices lectus. Etiam."
            image="/blog p2.png"
          />
          <Link href={"single-blog"}>
            <button className="w-[100px] h-[22px] text-[#151875] text-[18px] font-semibold flex items-center">
              Read More
              <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86] ml-[2px]"></div>
            </button>
          </Link>

          <Blogleft
            title="Sit nam congue feugiat nisl, mauris amet nisi."
            image="/blog p3.png"
          />
          <Link href={"single-blog"}>
            <button className="w-[100px] h-[22px] text-[#151875] text-[18px] font-semibold flex items-center">
              Read More
              <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86] ml-[2px]"></div>
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Blogright />
        </div>
      </div>

      {/* bottom Image */}
      <div className="w-full mt-20 mb-28">
        <Image
          src={"/full img.png"}
          alt="full img"
          width={904}
          height={93}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
