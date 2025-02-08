// components/FilterComponent.tsx
"use client"; // Client-side component

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

// Define the type for filters
interface Filters {
  searchTerm: string;
  categories: string[];
  rating: number | null;
  colors: string[];
  priceRange: string;
}

// Define the type for onFilter prop
interface FilterComponentProps {
  onFilter: (filters: Filters) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilter({
      searchTerm: e.target.value,
      categories: selectedCategories,
      rating: selectedRating,
      colors: selectedColors,
      priceRange,
    });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilter({
      searchTerm,
      categories: updatedCategories,
      rating: selectedRating,
      colors: selectedColors,
      priceRange,
    });
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating === selectedRating ? null : rating);
    onFilter({
      searchTerm,
      categories: selectedCategories,
      rating: rating === selectedRating ? null : rating,
      colors: selectedColors,
      priceRange,
    });
  };

  const handleColorChange = (color: string) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updatedColors);
    onFilter({
      searchTerm,
      categories: selectedCategories,
      rating: selectedRating,
      colors: updatedColors,
      priceRange,
    });
  };

  const handlePriceRangeChange = (range: string) => {
    setPriceRange(range);
    onFilter({
      searchTerm,
      categories: selectedCategories,
      rating: selectedRating,
      colors: selectedColors,
      priceRange: range,
    });
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="w-[203px] h-[31px] border-[1px] rounded-[3px] border-[#BCBDDB] flex items-center justify-between mb-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="ml-2 outline-none w-full"
        />
        <CiSearch size={16} className="text-[#BCBDDB] mr-3" />
      </div>

      {/* Categories Filter */}
      <h1 className="text-[20px] leading-[30px] text-[#151875] font-bold underline underline-offset-4 decoration-black decoration-1 mt-4">
        Categories
      </h1>
      {[
        "Prestashop",
        "Magento",
        "Bigcommerce",
        "osCommerce",
        "3dcart",
        "Bags",
        "Accessories",
        "Jewellery",
        "Watches",
      ].map((category) => (
        <div key={category} className="flex items-center gap-2 mt-2">
          <IoMdCheckmark
            className={`w-[16px] h-[16px] cursor-pointer ${
              selectedCategories.includes(category)
                ? "bg-[#FF3EB2] text-white"
                : "bg-[#FFDBF1] text-[#FF3EB2]"
            }`}
            onClick={() => handleCategoryChange(category)}
          />
          <p className="text-[16px] text-[#7E81A2]">{category}</p>
        </div>
      ))}

      {/* Rating Filter */}
      <h1 className="text-[20px] leading-[30px] text-[#151875] font-bold underline underline-offset-4 decoration-black decoration-1 mt-8">
        Rating
      </h1>
      {[4, 3, 2, 1].map((rating) => (
        <div key={rating} className="flex items-center gap-2 mt-2">
          <IoMdCheckmark
            className={`w-[16px] h-[16px] cursor-pointer ${
              selectedRating === rating
                ? "bg-[#FFCC2E] text-white"
                : "bg-[#FFF6DA] text-[#FFCC2E]"
            }`}
            onClick={() => handleRatingChange(rating)}
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-[12px] h-[12px] ${
                  i < rating ? "text-[#FFC416]" : "text-[#B2B2B2]"
                }`}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Price Range Filter */}
      <h1 className="text-[20px] leading-[30px] text-[#151875] font-bold underline underline-offset-4 decoration-black decoration-1 mt-8">
        Price Range
      </h1>
      {[
        "$0.00 - $150.00",
        "$150.00 - $350.00",
        "$350.00 - $504.00",
        "$450.00 +",
      ].map((range) => (
        <div key={range} className="flex items-center gap-2 mt-2">
          <IoMdCheckmark
            className={`w-[16px] h-[16px] cursor-pointer ${
              priceRange === range
                ? "bg-[#FF3EB2] text-white"
                : "bg-[#FFDBF1] text-[#FF3EB2]"
            }`}
            onClick={() => handlePriceRangeChange(range)}
          />
          <p className="text-[16px] text-[#7E81A2]">{range}</p>
        </div>
      ))}

      {/* Color Filter */}
      <h1 className="text-[20px] leading-[30px] text-[#151875] font-bold underline underline-offset-4 decoration-black decoration-1 mt-8">
        Colors
      </h1>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { color: "#5E37FF", name: "Blue" },
          { color: "#FF9437", name: "Orange" },
          { color: "#FFBF95", name: "Brown" },
          { color: "#33D221", name: "Green" },
          { color: "#E248FF", name: "Purple" },
          { color: "#26CBFF", name: "Sky" },
        ].map(({ color, name }) => (
          <div key={name} className="flex items-center gap-1">
            <div
              className={`w-[14px] h-[14px] rounded-full cursor-pointer ${
                selectedColors.includes(name) ? "border-2 border-black" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(name)}
            />
            <p className="text-[15px] text-[#7E81A2]">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;