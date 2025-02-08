import React from 'react'



interface multiuse {
    id: number;
   
    title?: string;
  }

const Offerhead  =() => {
    const data: multiuse[] = [
        {
          id: 1,
         
          title: "What Shopex Offer!",
        },
    ]
  return (
    <div className='body container'>
          {data.map((item) => (
        <div className="w-full wrapper h-[42px]  mt-[65px]  text-[42px]  text-[#1A0B5B] font-bold items-center flex justify-center "  key={item.id}>
        {item.title}

      </div>
        ))}
    </div>
  )
}

export default Offerhead