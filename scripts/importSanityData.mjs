import dotenv from 'dotenv';
dotenv.config(); 

import { createClient } from '@sanity/client';
import axios from 'axios';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const client = createClient({
  projectId: "70qw9f2u",
  dataset: "production",
  token: process.env.SANITY_TOKEN,  // Secure token handling
  apiVersion: "2021-10-21",
  useCdn: false,
});

async function uploadImageToSanity(imageUrl) {
  if (!imageUrl) {
    console.error("Image URL is missing!");
    return null;
  }

  try {
    console.log(`Uploading Image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    if (!response.data) {
      console.error(`Invalid image data: ${imageUrl}`);
      return null;
    }

    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image Uploaded Successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to Upload Image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching Product Data From API...');

    const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product");
    if (!response.data || !response.data.products) {
      throw new Error("Invalid API Response");
    }

    const products = response.data.products;

    for (const item of products) {
      console.log(`Processing Item: ${item.name}`);

      let imageRef = null;
      if (item.imagePath) {
        imageRef = await uploadImageToSanity(item.imagePath);
      }

      const sanityItem = {
        _type: 'product',
        name: item.name,
        category: item.category || null,
        price: item.price,
        description: item.description || '',
        discountPercentage: item.discountPercentage || 0,
        stockLevel: item.stockLevel || 0,
        isFeaturedProduct: item.isFeaturedProduct || false,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      console.log(`Uploading ${sanityItem.category} - ${sanityItem.name} to Sanity!`);
      const result = await client.create(sanityItem);
      console.log(`Uploaded Successfully: ${result._id}`);
      console.log("----------------------------------------------------------");
      console.log("\n\n");
    }

    console.log('Data Import Completed Successfully!');
  } catch (error) {
    console.error('Error Importing Data:', error);
  }
}

importData();
