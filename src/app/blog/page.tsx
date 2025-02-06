'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black h-[90px] px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="font-bold text-[24px] text-white mr-2">Food</h1>
        <span className="font-bold text-[24px] text-[#FF9F0D]">Tuck</span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li className="text-[16px] font-bold text-[#FF9F0D] hover:text-[#FF9F0D] transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="text-[16px] font-bold text-white hover:text-[#FF9F0D] transition-all">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[90px] left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden">
          <li className="text-[16px] font-bold text-[#FF9F0D]">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

// Blog Component
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Best Italian Pasta Dishes',
      image: '/images/sh8.png',
      description: 'Discover the best pasta dishes with fresh ingredients and unique flavors.',
    },
    {
      id: 2,
      title: 'Top 5 Spicy Biryani Recipes',
      image: '/images/biryani.png',
      description: 'Explore the most delicious and spicy biryani recipes that food lovers enjoy.',
    },
    {
      id: 3,
      title: 'Healthy Smoothies for Breakfast',
      image: '/images/b1.png',
      description: 'Start your morning with these tasty and nutritious smoothies.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-4 rounded">
          <h2 className="text-4xl font-bold">Food Blog</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog
          </p>
        </div>
      </section>

      {/* Blog List */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} width={500} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <Link href={`/blog/${post.id}`} className="text-yellow-500 font-medium mt-4 block">Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white text-center py-4 mt-8">
      <p>&copy; 2025 FoodTuck. All Rights Reserved.</p>
    </footer>
  );
};

// Main Page Component
const Page = () => {
  return (
    <div>
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
};

export default Page;
