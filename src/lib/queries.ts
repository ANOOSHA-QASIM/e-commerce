import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

// Fetching all products
export const fetchAllProducts = async () => {
  return await client.fetch(groq`
    *[_type == 'product']{
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
    }
  `)
}

// Fetching few products (5 to 10)
export const fetchLatestproducts = async () => {
  return await client.fetch(groq`
  *[_type == 'product'][10..15]{
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
    }
  `)
}

// Fetching latest products (6 to 8)
export const fetchFeatureProducts = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][14..17]{
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
    }
  `)
}
export const fetchHomePic = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][27..27]{
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
    }
  `)
}
export const fetchtopcatogories = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][18..21]{
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
    }
  `)
}
export const fetchDiscountproduct = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][14..14]{
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
    }
  `)
}
export const fetchTrendingproducts = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][24..27]{
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
    }
  `)
}
export const fetchDealproducts = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][22..23]{
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
    }
  `)
}
export const fetchDealright = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][8..10]{
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
    }
  `)
}
export const fetchhero2pic = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][7..7]{
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
    }
  `)
}
export const fetchShop = async () => {
  return await client.fetch(groq`
    *[_type == 'product'][0..6]{
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
    }
  `)
}