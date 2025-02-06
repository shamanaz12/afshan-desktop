import React from 'react';
import Link from 'next/link'; // Next.js ka Link component use karna best practice hai

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10 bg-gray-800 text-white">
      <nav className="flex justify-between items-center h-[87px] px-8">
        <div className="flex gap-6">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/menu" className="hover:text-yellow-500">Menu</Link>
          <Link href="/blog" className="hover:text-yellow-500">Blog</Link>
          <Link href="/chefs" className="hover:text-yellow-500">Chefs</Link>
          <Link href="/about" className="hover:text-yellow-500">About</Link>
          <Link href="/shop" className="hover:text-yellow-500">Shop</Link>
          <Link href="/contact" className="hover:text-yellow-500">Contact</Link>

        
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold hover:text-yellow-400">
          Foodtuck
        </div>
        <div className="text-gray-400">
          Search bar
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
