'use client';  // Add this line at the top

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Importing Image component from Next.js

interface Food {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Menu = () => {
  const [cart, setCart] = useState<Food[]>([]);

  // Sample products for demonstration
  const products: Food[] = [
    { id: '1', name: 'burger', price: 500, image: '/images/sh8.png' },
    { id: '2', name: 'pizza', price: 300, image: '/images/pizza.png' },
    { id: '3', name: 'ps3', price: 400, image: '/images/ps3.png' }
  ];

  // Function to add item to the cart
  const addToCart = (product: Food) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* Navigation Bar */}
      <div className="w-full h-[90px] bg-black flex items-center justify-between px-8">
        <div className="flex items-center">
          <h1 className="font-bold text-[24px] text-white mr-2">Food</h1>
          <span className="font-bold text-[24px] text-[#FF9F0D]">Tuck</span>
        </div>

        <ul className="flex items-center gap-6">
          <li className="text-[16px] font-bold text-[#FF9F0D] hover:text-[#FF9F0D] transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
            <Link href="/menu">Menu</Link>
          </li>
        </ul>
      </div>

      {/* Menu Items */}
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="object-cover w-full h-48 rounded"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">Price: Rs {product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      {cart.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2 border-b pb-2">
                  <span>{item.name}</span>
                  <span>Rs {item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4 font-bold text-lg">
                Total: Rs {totalPrice}
              </div>
              <button
                onClick={() => alert(`Your Payment is Rs ${totalPrice}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                Proceed to Payment
              </button>
            </div>
            <button
              onClick={() => setCart([])}
              className="mt-4
               bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
