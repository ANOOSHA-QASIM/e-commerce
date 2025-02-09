import React from 'react'
import Common from "../components/common";
import Image from 'next/image';



const Page = () => {
  return (
    
          <div className="body container">
      <div>
        <Common title="My Account" subtitle="My Account" />
      </div>
      <div className='w-full md:max-w-[544px] h-[474px] mx-auto box-shadow mt-24 flex justify-center items-center '>
        <div className='md:max-w-[433px] w-full h-[374px]   '>
            <h1 className='text-[#000000] text-[32px]  text-center font-bold '>Login</h1>
            <p className='text-[#9096B2] text-[17px] text-center font-normal mt-1 '>Please login using account detail bellow.</p>
            <input type="text" placeholder='Email Address' className='md:max-w-[432px] w-full h-[52px] border-[1px] rounded-[2px] border-[#C2C5E1] text-[#9096B2] text-[16px] font-normal mt-6 pl-3 ' />
            <input type="text" placeholder='Password' className='md:max-w-[432px] w-full h-[52px] border-[1px] rounded-[2px] border-[#C2C5E1] text-[#9096B2] text-[16px] font-normal mt-5 pl-3' />
            <p  className='text-[#9096B2] text-[17px] font-normal leading-[20.4px] mt-4'>Forgot your password?</p>
            <button className='md:max-w-[432px] w-full h-[52px] bg-[#FB2E86] text-[17px] font-bold text-[#FFFFFF] text-center mt-5 rounded-[3px] '>
           
            </button>
            
            <p  className='text-[#9096B2] text-center text-[17px] font-normal leading-[20.4px] mt-8 '> Dont have an Account?Create account</p>
        </div>
      </div>

      {/* image  */}
            <div className="w-full md:max-w-[904px] wrapper px-14 mt-24 ">
              <Image
                src={"/full img.png"}
                alt="full img"
                width={904}
                height={93}
              ></Image>
            </div>
    </div>
  )
}

export default Page