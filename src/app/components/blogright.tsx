import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

interface Data {
  id: number;
  img: string;
}
interface Data2 {
  id: number;
  img: string;
  title: string;
}
interface Data3 {
  id: number;
  img: string;
  title: string;
}

const Blogright = () => {
  const data3: Data3[] = [
    { id: 1, img: "/blogoffer1.png", title: "Duis lectus est." },
    { id: 2, img: "/blogoffer2.png", title: "Sed placerat." },
    { id: 3, img: "/blogoffer3.png", title: "Netus proin." },
    { id: 4, img: "/blogoffer4.png", title: "Platea in." },
  ];

  const data2: Data2[] = [
    { id: 1, img: "/sale1.png", title: "Elit ornare in enim mauris." },
    { id: 2, img: "/sale2.png", title: "Viverra pulvinar et enim." },
    { id: 3, img: "/sale3.png", title: "Mattis varius donec fdsfd" },
  ];

  const data1: Data[] = [
    { id: 1, img: "/post1.png" },
    { id: 2, img: "/post2.png" },
    { id: 3, img: "/post3.png" },
    { id: 4, img: "/post4.png" },
  ];

  return (
    <div className="mt-16">
      <div className="max-w-[280px] sm:max-w-[100%] ml-7">
        {/* Search Box */}
        <div className="mb-6">
          <h1 className="text-[#151875] text-[22px] font-semibold">Search</h1>
          <div className="w-full h-[40px] border border-[#BDBDD8] rounded-[2px] flex items-center justify-between mt-3">
            <input
              type="text"
              placeholder="Search For Posts"
              className="w-full text-black pl-3"
            />
            <CiSearch className="text-[#CBCBE0] mr-3" />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h1 className="text-[#151875] text-[22px] font-semibold">Categories</h1>
          <div className="grid grid-cols-2 gap-1 mt-3">
            {["Hobbies", "Women", "Sports", "Lifestyle", "Health", "Tech"].map((category, index) => (
              <button key={index} className="w-full h-[30px] text-[14px] hover:bg-[#F939BF] hover:text-white text-black rounded-[3px] text-center font-medium">
                {category} (14)
              </button>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <h1 className="text-[#151875] text-[22px] font-bold mb-6">Recent Post</h1>
        <div className="space-y-4">
          {data1.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-[70px] h-[51px]">
                <Image src={item.img} alt="post1" width={70} height={51} />
              </div>
              <div>
                <p className="text-[#3F509E] text-[14px] font-medium">It is a long established fact</p>
                <p className="text-[#8A8FB9] text-[11px] font-medium">Aug 09 2020</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sale Products */}
        <h1 className="text-[#151875] text-[22px] font-bold my-6">Sale Product</h1>
        <div className="space-y-4">
          {data2.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-[70px] h-[57px]">
                <Image src={item.img} alt="sale1" width={70} height={57} />
              </div>
              <div>
                <p className="text-[#3F509E] text-[14px] font-medium">{item.title}</p>
                <p className="text-[#8A8FB9] text-[11px] font-medium">Aug 09 2020</p>
              </div>
            </div>
          ))}
        </div>

        {/* Offer Products */}
        <h1 className="text-[#151875] text-[22px] font-bold my-6">Offer Product</h1>
        <div className="grid grid-cols-2 gap-3">
          {data3.map((item) => (
            <div key={item.id} className="text-center">
              <div className="w-[126px] h-[80px]">
                <Image src={item.img} alt="offer" width={126} height={80} />
              </div>
              <h1 className="text-[#151875] text-[14px] font-medium mt-2 flex  ">{item.title}</h1>
              <p className="text-[#8A8FB9] text-[12px] font-medium flex">$12.00 - $15.00</p>
            </div>
          ))}
        </div>

        {/* Follow Section */}
        <div className="mt-8">
          <h1 className="text-[#151875] text-[22px] font-bold">Follow</h1>
          <div className="flex gap-3 justify-center mt-4">
            <FaFacebook size={16} className="w-[25px] h-[25px] bg-[#FFFFFF] text-[#5625DF] rounded-full p-1" />
            <AiFillInstagram size={16} className="w-[25px] h-[25px] text-[#FFFFFF] bg-[#FF27B7] rounded-full p-1" />
            <IoLogoTwitter size={16} className="w-[25px] h-[25px] text-[#FFFFFF] bg-[#37DAF3] rounded-full p-1" />
          </div>
        </div>

        {/* Tags */}
        <h1 className="text-[#151875] text-[22px] font-bold my-6">Tags</h1>
        <div className="grid grid-cols-3 gap-3">
          {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map((tag, index) => (
            <p key={index} className="text-[#151875] text-[16px] font-medium hover:text-[#FB2E86] cursor-pointer">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogright;
