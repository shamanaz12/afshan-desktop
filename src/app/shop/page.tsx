"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  const [] = useState("");

  // ✅ Products Data (14 products added)
  const datas = [
    { _id: "1", title: "Burger", category: "Fast Food", price: 10, image: "/images/a1.png", description: "A tasty beef burger." },
    { _id: "2", title: "Pizza", category: "Pizza", price: 12, image: "/images/a2.png", description: "Cheesy pizza." },
    { _id: "3", title: "Sushi", category: "Japanese", price: 15, image: "/images/a3.png", description: "Fresh sushi rolls." },
    { _id: "4", title: "Pasta", category: "Italian", price: 18, image: "/images/a4.png", description: "Creamy pasta." },
    { _id: "5", title: "Salad", category: "Healthy", price: 8, image: "/images/a5.png", description: "Fresh vegetable salad." },
    { _id: "6", title: "Tacos", category: "Mexican", price: 9, image: "/images/a6.png", description: "Spicy tacos." },
    { _id: "7", title: "Burrito", category: "Mexican", price: 11, image: "/images/a7.png", description: "Stuffed burrito." },
    { _id: "8", title: "Steak", category: "Beef", price: 20, image: "/images/a8.png", description: "Grilled steak." },
    { _id: "9", title: "Ice Crem", category: "Dessert", price: 5, image: "/images/a9.png", description: "Cold vanilla ice cream." },
    { _id: "10", title: "Donut", category: "Dessert", price: 3, image: "/images/a10.png", description: "Sweet chocolate donut." },
    { _id: "11", title: "Curry", category: "Indian", price: 12, image: "/images/a11.png", description: "Spicy curry." },
    { _id: "12", title: "Cake", category: "Dessert", price: 7, image: "/images/a12.png", description: "Delicious chocolate cake." },
    { _id: "13", title: " Fries", category: "Snacks", price: 4, image: "/images/a13.png", description: "Crispy French fries." },
    { _id: "14", title: "Sandwich", category: "Fast Food", price: 6, image: "/images/a14.png", description: "Tasty sandwich." },
  ];

  const [filteredData] = useState(datas);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Our Shop</h1>

      {/* ✅ Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div key={item._id} className="bg-white p-4 shadow-md rounded-lg">
            <Image src={item.image} alt={item.title} width={200} height={150} />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-orange-500 font-bold">${item.price}</p>

            {/* ✅ View & Order Now Buttons */}
            <div className="flex gap-2 mt-4">
              <Link href={`/product/${item._id}`}>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View Product</button>
              </Link>

              <Link href={`/order/${item._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Order Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Back to Home Link */}
      <div className="mt-8">
        <Link href="/">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
