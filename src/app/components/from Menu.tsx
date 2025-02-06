"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product1 = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  review: number;
  stock: number;
};

// **Static Data (Sanity Removed)**
const products: Product1[] = [
  {
    _id: "1",
    title: "Pizza",
    price: 12,
    imageUrl: "/images/f1.png",
    description: "Delicious cheese pizza",
    rating: 4.5,
    review: 20,
    stock: 10,
  },
  {
    _id: "2",
    title: "Burger",
    price: 10,
    imageUrl: "/images/f2.png",
    description: "Juicy beef burger",
    rating: 4.2,
    review: 15,
    stock: 8,
  },
  {
    _id: "3",
    title: "Pasta",
    price: 15,
    imageUrl: "/images/f3.png",
    description: "Creamy Alfredo pasta",
    rating: 4.7,
    review: 18,
    stock: 5,
  },
  {
    _id: "4",
    title: "Sushi",
    price: 20,
    imageUrl: "/images/f4.png",
    description: "Fresh salmon sushi",
    rating: 4.9,
    review: 25,
    stock: 12,
  },
];

const FromMenu: React.FC = () => {
  // **Static Data Se UseState Fill Kiya**
  const [data1] = useState(products.slice(0, 2)); // Pehle 2 Items
  const [data2] = useState(products.slice(2, 4)); // Next 2 Items

  return (
    <div className="max-w-[1920px] h-fit bg-[#0D0D0D] text-[#ffffff]">
      <div className="bg-[#0D0D0D] md:max-w-[1320px] px-4 sm:px-8 lg:px-16 lg:py-12">
        <div className="text-center">
          <p className="font-greatvibes text-[24px] sm:text-[32px] text-orange-500">
            Choose & Pick
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            <span className="text-orange-500">Fr</span>om Our Menu
          </h2>
        </div>
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-4 text-white text-sm sm:text-base">
            <li className="text-orange-500 font-bold">Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
            <li>Drink</li>
            <li>Snack</li>
            <li>Soups</li>
          </ul>
        </div>
        <div className="md:max-w-[1320px] flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="md:lg:w-[515px] bg-[url(/images/me9.png)] sm:w-[400px] w-full flex justify-center">
            <div>
              <Image
                src="/images/me10.png"
                alt="plate"
                width={366}
                height={362}
                className="p-2 lg:mt-[30px] md:mt-[40px] sm:mt-[50px] mt-[60px] lg:pl-[20px] md:pl-[30px] sm:pl-[40px] pl-[50px] md:max-w-[336px] w-full sm:max-w-sm lg:max-w-md"
              />
            </div>
          </div>
          <div className="lg:w-[70%] grid md:3-[65%] w-full grid-cols-1 md:grid-cols-2 gap-4">
            {/* First group of products */}
            <div className="mb-4">
              {data1.map((data: Product1) => (
                <div
                  className="flex items-center mb-4 md:max-w-[376px] w-full gap-4"
                  key={data._id}
                >
                  <Link href={`/products/${data._id}`}>
                    <div className="flex flex-row items-center mb-4 md:max-w-[376px] w-full gap-4">
                      <div className="w-[120px] h-[100px] relative">
                        <Image
                          src={data.imageUrl}
                          alt={data.title}
                          fill
                          className="rounded-[2px] w-full object-cover"
                        />
                      </div>
                      <div className="md:w-[180px] w-full">
                        <h3 className="text-lg font-semibold text-white">
                          {data.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {data.description}
                        </p>
                        <p className="text-orange-500">$ {data.price}.00</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* Second group of products */}
            <div className="space-y-6">
              {data2.map((data: Product1) => (
                <div
                  className="flex flex-row items-center mb-4 md:max-w-[376px] w-full gap-4"
                  key={data._id}
                >
                  <Link href={`/products/${data._id}`}>
                    <div className="flex flex-row items-center mb-4 md:max-w-[376px] w-full gap-4">
                      <div className="w-[120px] h-[100px] relative">
                        <Image
                          src={data.imageUrl}
                          alt={data.title}
                          fill
                          className="rounded-[2px] w-full object-cover"
                        />
                      </div>
                      <div className="md:w-[180px] w-full">
                        <h3 className="text-lg font-semibold text-white">
                          {data.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {data.description}
                        </p>
                        <p className="text-orange-500">$ {data.price}.00</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromMenu;
