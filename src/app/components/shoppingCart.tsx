"use client";

import React, { useState } from "react";
import Common from "../components/common";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { IoIosCheckmark } from "react-icons/io";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";



const Page = () => {

  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, clearCart, updateCart, total } = useCart();
  const [localCart] = useState(cart);

  const handleUpdateCart = () => {
    updateCart(localCart);
  };

  return (
    <div className="container mx-auto px-4">
      <Common title="Shopping Cart" subtitle="Shopping Cart" />
      
      <div className="wrapper mb-32 flex flex-col lg:flex-row px-4 lg:px-14 mt-10 lg:mt-28">
        {/* Left Side - Cart Items */}
        <div className="w-full lg:w-[718px] overflow-x-auto">
          <div className="flex justify-between mb-8 text-sm sm:text-lg">
            <h1 className="text-[#1D3178] font-bold">Product</h1>
            <h1 className="text-[#1D3178] font-bold hidden sm:block">Price</h1>
            <h1 className="text-[#1D3178] font-bold">Quantity</h1>
            <h1 className="text-[#1D3178] font-bold">Total</h1>
          </div>

          {cart.length === 0 ? (
            <p className="text-[#1D3178]">Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div className="flex flex-wrap justify-between items-center border-b-2 py-4" key={item._id}>
                <div className="flex gap-4">
                  <div className="relative w-20 h-20">
                    <ImCross 
                      size={12} 
                      className="absolute top-0 right-0 bg-black text-white p-1 rounded-full cursor-pointer"
                      onClick={() => removeFromCart(item._id)}
                    />
                    <Image src={item.image || "/placeholder.png"} alt="product" width={80} height={80} />
                  </div>
                  <div>
                    <h3 className="text-[#000] text-sm sm:text-base font-medium">{item.title}</h3>
                    <p className="text-[#A1A8C1] text-xs sm:text-sm">Color: <span className="font-medium">Brown</span></p>
                    <p className="text-[#A1A8C1] text-xs sm:text-sm">Size: <span className="font-medium">XL</span></p>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full sm:w-[350px]">
                  <p className="text-[#15245E] text-sm">${item.price}</p>
                  <div className="flex items-center">
                    <button className="px-2 bg-gray-300" onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}><FiMinus /></button>
                    <p className="mx-2">{item.quantity}</p>
                    <button className="px-2 bg-gray-300" onClick={() => updateQuantity(item._id, item.quantity + 1)}><GoPlus /></button>
                  </div>
                  <p className="text-[#15245E] text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          )}

          <div className="flex justify-between items-center mt-6">
            <button onClick={handleUpdateCart} className="w-full sm:w-auto px-4 py-2 bg-[#FB2E86] text-white text-center font-medium">Update Cart</button>
            <button onClick={clearCart} className="w-full sm:w-auto px-4 py-2 bg-[#FB2E86] text-white text-center font-medium">Clear Cart</button>
          </div>
        </div>

        {/* Right Side - Cart Totals & Shipping */}
        <div className="w-full lg:w-[371px] mt-10 lg:mt-0 lg:ml-10">
          <h1 className="text-[#1D3178] text-center font-bold">Cart Totals</h1>
          <div className="bg-[#F4F4FC] rounded p-6 mt-6">
            <p className="flex justify-between border-b-2 pb-2">Subtotals: <span className="font-medium">${total.toFixed(2)}</span></p>
            <p className="flex justify-between border-b-2 py-4">Total: <span className="font-medium">${total.toFixed(2)}</span></p>
            <div className="flex items-center gap-2 mt-4">
              <IoIosCheckmark size={8} className="bg-[#19D16F] text-white rounded-full" />
              <p className="text-[#8A91AB] text-xs">Shipping & taxes calculated at checkout</p>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-[#19D16F] text-white font-bold"  onClick={() => router.push("/checkout")}>Proceed To Checkout</button>
          </div>

          {/* Shipping Calculation */}
          <h1 className="text-[#1D3178] text-center font-bold mt-6">Calculate Shipping</h1>
          <div className="bg-[#F4F4FC] rounded p-6 mt-4">
            <p className="border-b-2 pb-2">Bangladesh</p>
            <p className="border-b-2 py-4">Mirpur Dhaka - 1200</p>
            <p className="border-b-2 py-4">Postal Code</p>
            <button className="w-full mt-4 px-4 py-2 bg-[#FB2E86] text-white font-medium">Calculate Shipping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
