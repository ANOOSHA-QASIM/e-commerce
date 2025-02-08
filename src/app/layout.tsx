"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./components/loader"; // ✅ Apne Loader component ko import karo

import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./whishlist/WishlistContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ✅ Current route track karne ke liye
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // ✅ Smooth transition ke liye 0.5 sec delay

    return () => clearTimeout(timer); // ✅ Cleanup function
  }, [pathname]); // ✅ Jab bhi route change ho, loader chale

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <WishlistProvider>
            <CartProvider>
              <Topbar />
              <Navbar />
              
              {/* ✅ Loader Show Karna */}
              {loading && <Loader />}
              
              {/* ✅ Page Content */}
              {children}

              <Footer />
              <Footer2 />
            </CartProvider>
          </WishlistProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
