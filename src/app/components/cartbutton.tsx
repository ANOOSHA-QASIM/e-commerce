"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../whishlist/WishlistContext";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "@/types"; // ✅ Import proper types

interface CartButtonProps {
  product: Product;
}

const Cartbutton: React.FC<CartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = () => {
    console.log("Product being added to cart", product);
    addToCart({
      _id: product._id,
      title: product.title,
      price: product.price,
      image: product.imageUrl || "/placeholder.png",
      quantity: 1,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      _id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl || "/placeholder.png",
    });
    
  };

  return (
    <div className="relative group p-4 w-64">
      {/* Hover Buttons */}
      <div className="absolute bottom-4 flex gap-4 justify-between opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded shadow-md">
        <button
          onClick={handleAddToCart}
          className="text-[#151875] text-[14px] font-medium px-3 py-1 rounded"
        >
          <FiShoppingCart />
        </button>

        {/* Add to Wishlist Button */}
        <button onClick={handleAddToWishlist} className="text-red-500 text-lg">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default Cartbutton;
