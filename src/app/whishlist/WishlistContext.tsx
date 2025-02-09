"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
interface WishlistItem {
  _id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // ✅ Add item to Wishlist (Like addToCart)
  const addToWishlist = (product: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find((item) => item._id === product._id);
  
      if (existingProduct) {
        // If item is already in wishlist, do nothing
        return prevWishlist;
      } else {
        // Add new product to wishlist
        return [...prevWishlist, product];
      }
    });
  };

  // ✅ Remove item from Wishlist
  const removeFromWishlist = (_id: number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== _id));
  };

  // ✅ Clear Wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// ✅ Custom Hook
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
