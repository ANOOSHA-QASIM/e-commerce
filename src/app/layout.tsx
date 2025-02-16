"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./components/loader";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./whishlist/WishlistContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <WishlistProvider>
            <CartProvider>
              <Topbar />
              <Navbar />

              {loading && <Loader />}

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
