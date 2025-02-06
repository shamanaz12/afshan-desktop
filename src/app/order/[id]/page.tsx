"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const OrderPage = () => {
  const params = useParams(); 
  const id = params?.id as string; // Ensures `id` is a string

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");


  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold">Place Your Order</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border my-2"
      />
      <input
        type="text"
        placeholder="Your Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border my-2"
      />

      <Link href={`/payment?orderId=${id}`}>
        <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
          Proceed to Payment
        </button>
      </Link>
    </div>
  );
};

export default OrderPage;
