import React from "react";
import Common from "../components/common";
import Image from "next/image";

interface Data {
  id: number;
  title: string;
}

const Page = () => {
  const data: Data[] = [
    {
      id: 1,
      title: "Eu dictumst cum at sed euismood condimentum?",
    },
    {
      id: 2,
      title: "Magna bibendum est fermentum eros?",
    },
    {
      id: 3,
      title: "Odio muskana hak eris conseekin sceleton?",
    },
    {
      id: 4,
      title: "Elit id blandit sabara boi velit gua mara?",
    },
  ];

  return (
    <div className="body container">
      <div>
        <Common title="FAQ" subtitle="FAQ" />
      </div>
      <div className="wrapper px-4 md:px-14 flex flex-col md:flex-row mt-20 gap-12">
        {/* left */}
        <div className="w-full md:w-[499px] min-h-[700px]">
          <h1 className="text-[#1D3178] text-[36px] font-bold">Generel Information</h1>
          <div className="w-full h-auto">
            {data.map((item) => (
              <div key={item.id}>
                <h1 className="text-[#1D3178] text-[17px] mt-12 font-medium">{item.title}</h1>
                <p className="text-[#A1ABCC] text-[16px] leading-[30px] mt-4 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="w-full md:max-w-[566px] h-auto bg-[#F8F8FD] p-6 md:p-12 mt-6 md:mt-0 flex flex-col ">
          <h1 className="text-[#1D3178] text-[24px] mt-5 font-bold">Ask a Question</h1>
          <div className="grid gap-6 mt-12">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full max-w-[445px] h-[50px] border-[1px] border-[#CDCEDC] text-[#8990B1] text-[16px] font-semibold rounded-[5px] outline-none pl-2"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full max-w-[445px] h-[50px] border-[1px] border-[#CDCEDC] text-[#8990B1] text-[16px] font-semibold rounded-[5px] outline-none pl-2"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Type Your Message*"
              className="w-full max-w-[445px] h-[197px] border-[1px] border-[#CDCEDC] text-[#8990B1] text-[16px] font-semibold rounded-[5px] outline-none pl-2 pt-4"
            />
            <button className="w-full max-w-[156px] h-[48px] bg-[#FB2E86] text-[#FFFFFF] text-[16px] rounded-[3px] text-center font-medium">
              Send Mail
            </button>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="w-full md:max-w-[1246px] wrapper px-4 md:px-14 mt-24">
        <Image src={"/full img.png"} alt="full img" width={1246} height={93} />
      </div>
    </div>
  );
};

export default Page;
