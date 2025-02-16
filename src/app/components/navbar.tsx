"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./searchBar";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == 'product']{
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
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="px-5 sm:px-6 md:px-8 md:wrapper lg:px-14 h-auto my-[19px] w-full flex justify-between items-center wrapper">
      {/* Logo */}
      <div>
        <h1 className="text-[#0D0E43] font-bold md:text-[34px] text-[25px] leading-[34px]">
          Hekto
        </h1>
      </div>

      {/* Desktop and Medium Screens Navbar */}
      <ul className="hidden md:hidden lg:flex gap-8 font-normal text-[16px] leading-5 text-[#0D0E43] justify-center items-center">
        <li className="text-[#FB2E86] flex items-center">
          <Link href="/">Home</Link>
        </li>
        <ul className="flex space-x-4">
          {/* Pages Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-4 py-2 rounded focus:outline-none"
            >
              Pages <FaChevronDown className="ml-2" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute mt-2 bg-white text-gray-800 shadow-lg rounded-md border w-48 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/shop-left-sidebar" onClick={closeDropdown}>
                    Shop Left Sidebar
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/about-us" onClick={closeDropdown}>
                    About Us
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/faq" onClick={closeDropdown}>
                    FAQ
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/order-completed" onClick={closeDropdown}>
                    Order Completed
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <li>
          <Link href="/shop-grid-default">Products</Link>
        </li>
        <li>
          <Link href="/blog-page">Blog</Link>
        </li>
        <li>
          <Link href="/shop-list">Shop</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>

      <div className="sm:block md:block lg:block flex items-center">
        <SearchBar products={products} />
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(true)}>
          <FiMenu className="text-[#0D0E43] text-2xl" />
        </button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          {/* Fix: Hidden SheetTitle for Accessibility */}
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

          <div className="p-4">
            <ul className="flex flex-col space-y-4 text-gray-800">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop-left-sidebar"
                  onClick={() => setIsOpen(false)}
                >
                  Shop Left Sidebar
                </Link>
              </li>
              <li>
                <Link href="/about-us" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/order-completed" onClick={() => setIsOpen(false)}>
                  Order Completed
                </Link>
              </li>
              <li>
                <Link
                  href="/shop-grid-default"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
