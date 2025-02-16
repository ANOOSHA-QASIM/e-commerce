"use client";

import React, { createContext, useContext, useState } from "react";


interface CartItem {
  _id: number;
  image: string; 
  title: string;
  price: number;
  quantity: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  updateCart: (updatedCart: CartItem[]) => void; 
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

 
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct) {
        // Update quantity if the product already exists
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Add new product to the cart
        return [...prevCart, product];
      }
    });
  };


  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // Update quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  // Calculate Total Price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCart,
        clearCart,
        removeFromCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
