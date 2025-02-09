import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { fetchDealright } from '@/lib/queries';
import { Product } from "@/types";

const Dealright = async () => {
     const fetchproduct: Product[] = await fetchDealright();
  return (
    
    <div className="flex flex-col gap-6">
    {fetchproduct.map((product) => (
           <Link href={`/product/${product.slug}`} key={product._id}>
        
  
        <div className="w-[267px] h-[74px]   flex transition-transform transform hover:scale-105 " >
          <div className="w-[107px] h-[74px] bg-[#F5F6F8] ">
            <Image
              src={product.imageUrl}
              alt="chair"
              width={64}
              height={71}
              className="ml-[21px] mt-[2px] "
            ></Image>
          </div>
          <div className=" h-[33px] ml-[8px] mt-[21px] w-[151px] justify-start">
            <h1 className="text-[16px] leading-[18.75px] text-[#151875] font-semibold  w-[151px] ">
           {product.name}
            </h1>
            <p className="font-normal text-[12px] leading-[12px]  ">
            {product.price}
            </p>
          </div>
          
        </div>
        </Link>
        ))}
     
    </div>
    
  )
}

export default Dealright