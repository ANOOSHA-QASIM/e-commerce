
import ProductDetail from '../../components/producDetails';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';

interface PageProps {
  params: { slug: string };
}

// ✅ Remove `NextPage<PageProps>` & use a normal async function
const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  // ✅ Correct way to fetch product
  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0]{
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
    }`,
    { slug }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default Page;




// import ProducDetail from '@/app/components/producDetails';
// import { client } from '@/sanity/lib/client';
// import { groq } from 'next-sanity';
// import { NextPage } from "next";
// interface PageProps {
//   params: { slug: string };
// }
// import React from 'react'

// const Page: NextPage<PageProps> = async ({ params }) => {
//   const { slug } = params;
//     const product = await client.fetch(  groq`*[_type == 'product']{
//         _id,
//         name,
//        "slug": slug.current,
//         price,
//         description,
//         "imageUrl": image.asset->url,
//         discountPercentage,
//         isFeaturedProduct,
//         stockLevel,
//         category
//       }`, )
//       const products = product.find((products: { slug: string; })=>products.slug == slug);
//       console.log(product)
    
//   return (
//     <div><ProducDetail product={products} /></div>
//   )
// }

// export default Page