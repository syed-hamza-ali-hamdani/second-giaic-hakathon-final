"use client";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/Vector.png" alt="logo" width={40} height={40} />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {[
            "New & Feature",
            "Men",
            "Women",
            "Kids",
            "Sale",
            "SNKRS",
          ].map((link) => (
            <Link
              key={link}
              href="/all-product"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Search Bar & Placeholder Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            {/* Search Icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 bg-gray-400 rounded-full flex items-center justify-center">
              <CiSearch className="h-4 w-4 text-white" />
            </div>

            {/* Input with no border and rounded */}
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border-none rounded-full bg-gray-100 focus"
            />
          </div>

          {/* Heart Icon Placeholder */}
          <div>
            <CiHeart />
          </div>
          {/* Shopping Cart Icon Placeholder */}
          <div>
            <FaShoppingBag />
          </div>
        </div>
      </div>
    </header>
  );
}
