
import ProducDetail from '@/app/components/producDetails';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

import React from 'react'

const Page = async ({ params }: { params: { slug: string } }) => {
    const {slug}:any = params;
    const product = await client.fetch(  groq`*[_type == 'product']{
        _id,
        name,
       "slug": slug.current,
        price,
        description,
        "imageUrl": image.asset->url,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
      }`, )
      const products = product.find((products:any)=>products.slug == slug);
      console.log(product)
    
  return (
    <div><ProducDetail product={products} /></div>
  )
}

export default Page