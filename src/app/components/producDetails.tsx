"use client";

import React from "react";
import Common from "../components/common";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../whishlist/WishlistContext";
import { Product } from "@/types";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


interface ProductDetailProps {
  product: Product;
}

interface Data {
  id: number;
  img: string;
  title: string;
  price: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [isLiked, setIsLiked] = useState(false);

   
  const data: Data[] = [
    {
      id: 1,
      img: "/prod1.png",
      title: "Mens Fashion Wear",
      price: "$43.00",
    },
    {
      id: 2,
      img: "/prod2.png",
      title: "Women’s Fashion",
      price: "$67.00",
    },
    {
      id: 3,
      img: "/prod3.png",
      title: "Wolx Dummy Fashion",
      price: "$67.00",
    },
    {
      id: 4,
      img: "/prod4.png",
      title: "Top Wall Digital Clock",
      price: "$51.00",
    },
  ];

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      title: product.title,
      price: product.price,
      image: product.imageUrl || "/placeholder.png",
      quantity: 1,
    });
  };
  const handleAddToWishlist = () => {
    setIsLiked(!isLiked); 
    addToWishlist({
      _id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl || "/placeholder.png",
    });
    
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Page Title */}
      <Common title="Product Details" subtitle="Product Details" />

      {/* Product Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-6 shadow-lg p-4 md:p-6 rounded-lg md:px-14">
        {/* Left Images */}
        <div className="flex md:flex-col gap-3">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.name}
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover rounded-lg"
          />
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.name}
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover rounded-lg"
          />
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.name}
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover rounded-lg"
          />
        </div>

        {/* Main Product Image */}
        <div className="w-full md:w-[400px]">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.name}
            width={400}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-xl md:text-2xl font-semibold text-[#0D134E]">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex">
              <FaStar className="text-[#FFC416]" />
              <FaStar className="text-[#FFC416]" />
              <FaStar className="text-[#FFC416]" />
              <FaStar className="text-[#FFC416]" />
              <FaStar className="text-[#B2B2B2]" />
            </div>
            <p className="text-sm md:text-base text-[#151875]">(22)</p>
          </div>

          {/* Price & Discount */}
          <p className="text-lg font-medium text-[#151875]">
            {product.price}{" "}
            <span className="text-red-500 ml-2">{product.discountPercentage}% off</span>
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-[#A9ACC6] leading-6">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#151875] text-white px-4 py-2 rounded-md hover:bg-[#0D134E]"
            >
              Add To Cart
            </button>
            <button
      onClick={handleAddToWishlist}
      className={`flex items-center gap-2 ${
        isLiked ? "text-red-500" : "text-gray-500"
      }`}
    >
      {isLiked ? <FaHeart /> : <FaRegHeart />} Add to Wishlist
    </button>
          </div>

          {/* Categories & Tags */}
          <p className="text-[#151875] font-medium">Category: {product.category}</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16 bg-[#FBFBFF] p-6 rounded-lg md:px-14">
        <div className="flex flex-wrap gap-6 text-[#151875] text-lg font-medium">
          <h1 className="cursor-pointer hover:underline">Description</h1>
          <h1 className="cursor-pointer hover:underline">Additional Info</h1>
          <h1 className="cursor-pointer hover:underline">Reviews</h1>
          <h1 className="cursor-pointer hover:underline">Video</h1>
        </div>

        <h2 className="text-lg md:text-xl mt-6 text-[#151875]">Varius tempor.</h2>
        <p className="text-sm md:text-base text-[#A9ACC6] leading-6 mt-3">
          Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et
          eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus
          ac ante. Velit consectetur neque, elit, aliquet.
        </p>

        {/* More Details List */}
        <div className="mt-6 space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <IoArrowForwardOutline className="text-[#000000] hover:text-[#2F1AC4] cursor-pointer" />
              <p className="text-sm md:text-base text-[#A9ACC6]">
                Aliquam dis vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis.
              </p>
            </div>
          ))}
        </div>
        
      {/* Related Products */}
<div className="container mx-auto mt-32 px-4 md:px-10">
  {/* Section Heading */}
  <div className="text-2xl md:text-[36px] text-[#1A0B5B] font-bold text-center md:text-left">
    Related Products
  </div>

  {/* Products Grid */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((item) => (
      <div
        className="w-full max-w-[270px] mx-auto h-auto rounded-[3px] shadow-lg p-2"
        key={item.id}
      >
        {/* Product Image */}
        <Image
          src={item.img}
          alt="prod1"
          width={270}
          height={340}
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <h1 className="text-[#151875] text-[16px] font-medium">{item.title}</h1>
            {/* Star Ratings */}
            <div className="flex gap-[2px]">
              <FaStar className="text-[#FFC416] w-4 h-4" />
              <FaStar className="text-[#FFC416] w-4 h-4" />
              <FaStar className="text-[#FFC416] w-4 h-4" />
              <FaStar className="text-[#FFC416] w-4 h-4" />
              <FaStar className="text-[#B2B2B2] w-4 h-4" />
            </div>
          </div>

          {/* Price */}
          <p className="text-[#151875] text-[14px] mt-1 font-medium">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  
      </div>
      
    </div>
  );
};

export default ProductDetail;
