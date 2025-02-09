export interface Product {
    title: string;
    _id: number;
    name: string;
    slug: string;
    price: number;
    description: string;
    imageUrl: string;
    discountPercentage?: number;
    isFeaturedProduct?: boolean;
    stockLevel?: number;
    category?: string;
  }
  
  