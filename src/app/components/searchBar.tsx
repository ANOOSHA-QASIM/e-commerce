"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SearchBar = ({ products }: { products: any[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
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
    router.push(`/product/${slug}`);  // Fixed this part with backticks
  };

  return (
    <div className="relative w-full max-w-[400px]">
      {/* Search Input */}
      <div className="flex w-full h-[40px] bg-[#E7E6EF] rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-grow px-4 text-sm outline-none bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="w-[50px] bg-[#FB2E86] flex items-center justify-center">
          <FiSearch className="text-white text-lg" />
        </button>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="absolute top-[42px] left-0 w-full bg-white shadow-lg rounded-md max-h-[200px] overflow-y-auto border mt-1 z-50">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSearchClick(product.slug)}
              >
                <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded" />
                <p className="text-sm text-gray-700">{product.name}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-2">No products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
