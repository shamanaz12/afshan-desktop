"use client"; // Client-side component

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define product type
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]); // Product array with type annotation
  const [loading, setLoading] = useState<boolean>(true); // Loading state with type annotation

  // Static dummy data
  const dummyProducts: Product[] = [
    {
      _id: "1",
      name: "Burger",
      price: 10,
      image: "/images/chicken fry.png", // Static image path
      category: "Fast Food"
    },
    {
      _id: "2",
      name: "Pizza",
      price: 15,
      image: "/images/pizza.png", // Static image path
      category: "Italian"
    },
    {
      _id: "3",
      name: "Ps",
      price: 12,
      image: "/images/w4.png", // Static image path
      category: "burger"
    },
    {
      _id: "4",
      name: "biryani",
      price: 5,
      image: "/images/biryani.png", // Static image path
      category: "Fast Food"
    },
  ];

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000); // 1 second delay to simulate fetching
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-bold">Loading products...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Our Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
          >
            <Image
              src={product.image || '/placeholder.png'} // Use a placeholder if image is missing
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
