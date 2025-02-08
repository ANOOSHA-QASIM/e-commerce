import React from "react";
import Common from "../components/common";
import Image from "next/image";
import Blogleft from "../components/blogleft";
import Blogright from "../components/blogright";
import Commonpara from "../components/common para";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaComment } from "react-icons/fa6";

interface Data {
  id: number;
  title: string;
  img: string;
}
interface Data2 {
  id: number;
  title: string;
  date: string;
  img: string;
}

const Page = () => {
  const data2: Data2[] = [
    {
      id: 1,
      img: "/blogcard5.png",
      title: "Sapien ac",
      date: "Jan 09 2020",
    },
    {
      id: 2,
      img: "/blogcard6.png",
      title: "Augue conva",
      date: "Aug 18 2020",
    },
  ];

  const data: Data[] = [
    {
      id: 1,
      img: "/blogcard1.png",
      title: "Quam sed",
    },
    {
      id: 2,
      img: "/blogcard2.png",
      title: "Tristique sed",
    },
    {
      id: 3,
      img: "/blogcard3.png",
      title: "A etiam",
    },
    {
      id: 4,
      img: "/blogcard4.png",
      title: "Mi nisi",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0">
      <div>
        <Common title="Single Blog" subtitle="Single Blog" />
      </div>
      <div className="flex flex-col lg:flex-row mt-16 gap-10">
        <div className="lg:w-2/3 lg:px-14">
          {/* Left Section */}
          <Blogleft
            title="Mauris at orci non vulputate diam tincidunt nec."
            image="/blog p1.png"
          />
          <Commonpara />
          <div className="bg-[#FAFAFB] border-l-4 border-[#FC45A0] p-4 italic text-[#969CB4] text-lg mt-10">
            <div>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Commodo dictum sapien, amet,
              consequat toamk risusu”
            </div>
          </div>
          {/* Images Section */}
          <div className="flex  gap-6 mt-10 mb-10">
            <div className="w-full md:w-1/2">
              <Image src={"/blogpic1.png"} alt="pic1" width={418} height={245} />
            </div>
            <div className="w-full md:w-1/2">
              <Image src={"/blogpic2.png"} alt="pic2" width={418} height={245} />
            </div>
          </div>
          <Commonpara />
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
            {data.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
                <div className="md:max:w-[104px] md:max:h-[107px] object-cover">
                  <Image
                    src={item.img}
                    alt="card"
                    width={104}
                    height={107}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-[#000000] text-[20px] mt-2 font-medium">
                  {item.title}
                </h1>
                <div className="flex items-center mt-1.5">
                  <p className="text-[#232A69] text-[14px] font-medium">
                    $32.00
                    <span className="text-[#FF38B0] text-[14px] ml-3 font-medium line-through">
                      $56.00
                    </span>
                  </p>
                  <div className="ml-4 flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`w-[12px] h-[12px] ${index < 4 ? "text-[#FFD659]" : "text-[#B2B2B2]"} ml-1`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Commonpara />
          <Commonpara />
          <hr className="border-t-[1px] border-[#F7F8FB] mt-8" />

          {/* Social Media */}
          <div className="w-full flex justify-center gap-4 mt-8">
            <FaFacebook
              size={16}
              className="w-[25px] h-[25px] bg-[#FFFFFF] text-[#5625DF] rounded-full "
            />
            <AiFillInstagram
              size={12}
              className="w-[25px] h-[25px] text-[#FFFFFF] bg-[#FF27B7] rounded-full "
            />
            <IoLogoTwitter
              size={16}
              className="w-[25px] h-[25px] text-[#FFFFFF] bg-[#37DAF3] rounded-full "
            />
          </div>

          {/* Navigation Bar */}
          <div className="w-full bg-[#F7F8FB] flex justify-between items-center mt-6 px-6 py-4">
            <div className="flex items-center text-[#8A8FB9]">
              <HiOutlineArrowNarrowLeft />
              <p className="ml-3 text-center text-[16.15px] font-medium">Previous Post</p>
            </div>
            <div className="flex items-center text-[#8A8FB9]">
              <p className="mr-3 text-[16.15px] font-medium">Next Post</p>
              <HiOutlineArrowNarrowRight />
            </div>
          </div>

          {/* Related Blog Cards */}
          <div className="grid gap-6 mt-28">
            {data2.map((item) => (
              <div key={item.id} className="flex bg-white p-4 rounded-md shadow-md gap-4">
                <div className="w-[104px] h-[107px]">
                  <Image src={item.img} alt="card" width={104} height={107} />
                </div>
                <div className="flex flex-col justify-center w-full">
                  <div className="flex justify-between">
                    <p className="text-[#363385] text-lg font-medium">{item.title}</p>
                    <p className="text-[#A3A2B6] text-sm">{item.date}</p>
                  </div>
                  <p className="text-[#A3A2B6] text-sm font-normal mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum
                    vulputate consectetur.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <div className="w-full max-w-[717px] mt-32">
            <div className="flex gap-6">
              <div className="flex items-center border border-[#8A8FB9] w-full h-[43px]">
                <FaUserLarge size={10} className="text-[#8A8FB9] ml-3" />
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full text-[#8A8FB9] text-sm font-normal pl-2"
                />
              </div>
              <div className="flex items-center border border-[#8A8FB9] w-full h-[43px]">
                <MdEmail size={12} className="text-[#8A8FB9] ml-3" />
                <input
                  type="email"
                  placeholder="Write Your Email*"
                  className="w-full text-[#8A8FB9] text-sm font-normal pl-2"
                />
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <div className="flex items-center border border-[#8A8FB9] p-4 h-[206px]">
                <FaComment size={10} className="text-[#8A8FB9] mt-2" />
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Write your comment*"
                  className="w-full text-[#8A8FB9] text-sm font-normal pl-2"
                ></textarea>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <input type="checkbox" className="w-4 h-4 border-2" />
                <p className="text-[#8A91AB] text-sm font-medium">
                  Save my name, email, and website in this browser for the next time I comment.
                </p>
              </div>
            </div>
            <button className="w-full bg-[#FB2E86] text-white py-3 mt-8 rounded-[3px] text-lg">
              Continue Shipping
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3">
          <Blogright />
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full mt-32">
        <Image
          src={"/full img.png"}
          alt="full img"
          width={1205.33}
          height={93}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
