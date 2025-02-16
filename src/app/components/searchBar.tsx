"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types";

const SearchBar = ({ products }: { products: Product[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleSearchClick = (slug: string) => {
    setSearchTerm("");
    setFilteredProducts([]);

    router.push(`/product/${slug}`);
  };

  return (
    <div className="relative w-full md:max-w-[400px]">
      {/* Search Input */}
      <div className="flex w-[190px] sm:w-[180px] md:w-full h-[40px] bg-[#E7E6EF] rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-grow px-4 text-sm outline-none bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="md:w-[30px] w-[20px] sm:w-[full] bg-[#FB2E86] flex items-center justify-center">
          <FiSearch className="text-white text-lg" />
        </button>
      </div>

      {/* Search Results */}
      {searchTerm && filteredProducts.length > 0 && (
        <div className="absolute top-[42px] left-0 w-full bg-white shadow-lg rounded-md max-h-[200px] overflow-y-auto border mt-1 z-50">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSearchClick(product.slug)}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={50}
                height={50}
                className="w-10 h-10 object-cover rounded"
              />
              <p className="text-sm text-gray-700">{product.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
