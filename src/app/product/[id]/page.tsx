"use client"; // Yeh line add karein

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = () => {
  const { id } = useParams(); 

  // Dummy data (yeh API se fetch hoga)
  const product = {
    id,
    title: "Burger",
    category: "Fast Food",
    price: 10,
    description: "A tasty beef burger with fresh vegetables.",
    image: "/images/a1.png",
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image src={product.image} alt={product.title} width={400} height={300} />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-orange-500 font-bold">${product.price}</p>
      
      <Link href={`/order/${product.id}`}>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;
