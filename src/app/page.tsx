

import React, { Children } from "react";



import Promotion from "./components/promotion";
import Product from "./components/product";
import Latestproducts from "./components/latestproducts";
import Offer from "./components/offer";
import Hero2 from "./components/hero-2";
import Trendingproducts from "./components/trending-products";
import Discount from "./components/discount";
import Topcatogories from "./components/topcatogories";
import Blog from "./components/blog";
import { CartProvider } from "./context/CartContext";


import { WishlistProvider } from "./whishlist/WishlistContext";

const Home = async() => {

  
  return (<>
    <WishlistProvider>
    <CartProvider>
    
    <div>
    
           
      <Promotion />
      <Product />
      <Latestproducts />
      <Offer />
      <Hero2 />
      <Trendingproducts />
      <Discount />
      <Topcatogories />
      <Blog />
    </div>
    </CartProvider>
    </WishlistProvider>
  
    </>

    // <Hero />
    // <Footer />
    // <Footer2 />
  );
};

export default Home;
