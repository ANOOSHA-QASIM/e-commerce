import ProductDetail from "../../components/producDetails";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

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
    notFound();
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Product - ${slug}`,
    description: `Details of product ${slug}`,
  };
}

export default Page;
