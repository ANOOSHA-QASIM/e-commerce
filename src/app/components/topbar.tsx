"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { SignedOut } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";

import { useWishlist } from "../whishlist/WishlistContext";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Topbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const router = useRouter();

  const goToWishlist = () => {
    router.push("/hekto-demo");
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <main className="body h-auto bg-[#7E33E0] container font-semibold flex items-center text-[#F1F1F1] text-[16px] py-2">
      <div className="wrapper w-full px-4 md:px-8 lg:px-14">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-0">
          {/* Left Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 md:gap-6">
            <p className="flex items-center gap-2 text-[12px] sm:text-[14px] md:text-[16px]">
              <HiOutlineMail />
              mhhasanul@gmail.com
            </p>
            <p className="flex items-center gap-2 text-[12px] sm:text-[14px] md:text-[16px]">
              <BiPhoneCall />
              (12345)67890
            </p>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4 md:gap-6 items-center">
            <p className="flex items-center gap-1 text-[12px] sm:text-[14px] md:text-[16px]">
              English
              <FaAngleDown />
            </p>
            <p className="flex items-center gap-1 text-[12px] sm:text-[14px] md:text-[16px]">
              USD
              <FaAngleDown />
            </p>
            <Link href="/my-account">
              <p className="flex items-center gap-1 text-[12px] sm:text-[14px] md:text-[16px]">
                Login
                <RxPerson />
              </p>
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Wishlist */}
            <p className="flex items-center gap-1 cursor-pointer text-[12px] sm:text-[14px] md:text-[16px]" onClick={goToWishlist}>
              Wishlist <FaRegHeart />
              {wishlist.length > 0 && (
                <span className="bg-red-500 text-white rounded-full text-xs px-2">
                  {wishlist.length}
                </span>
              )}
            </p>

            {/* Shopping Cart */}
            <Link href="/shopping-cart">
              <div className="relative">
                <FiShoppingCart className="text-[14px] sm:text-[16px]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Topbar;
