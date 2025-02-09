import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { fetchDealproducts } from '@/lib/queries';
import Dealright from './Dealright';
import { Product } from "@/types";

const Deal = async () => {
       const fetchproduct: Product[] = await fetchDealproducts();
  return (
    <div className='flex md:flex-col sm:flex-col lg:flex-row flex-col wrapper gap-2 px-14 body justify-evenly items-center mt-[40] body'>
        {/* deal section */}
              <div className="flex sm:flex-col flex-col md:flex-row lg-flex-row wrapper gap-1  body justify-evenly items-center ">
              {fetchproduct.map((product ) => (
           <Link href={`/product/${product.slug}`} key={product._id} >
               
                <div className="w-[420px]  h-[270px]  relative bg-[#FFF6FB]  box-shadow transition-transform transform hover:scale-105 hover:bg-pink-100  ">
                  <div className="w-[269px] h-[56px] mt-[30px] ml-[25px] gap-2">
                    <h1 className="text-[#151875] font-semibold text-[26px]  text-center w-[269px]  ">
                      23% off in all products
                    </h1>
                    <button className="text-[#FB2E86] font-semibold text-[16px]  mt-2 underline underline-offset-4 ">
                      Shop Now
                    </button>
                  </div>
                  <div className="w-[213px] h-[207px]  absolute left-[198px] bottom-[0.25px] ">
                    <Image
                      src={product.imageUrl}
                      alt="img"
                      width={213}
                      height={207}
                    ></Image>
                  </div>
                </div>
                
                </Link>
        ))}
                </div>
                <div className=''>
                <Dealright/>
                </div>
               
              
              </div>
   
  )
}


export default Deal