"use client"; // This will make this component render on the client side

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">
        Welcome to Our Platform
      </h1>
      <p className="text-lg mb-8 text-gray-200">
        Explore a world of knowledge with universities in the United States.
      </p>
      <Link href="universities">
        <p className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md font-semibold hover:bg-gray-200 transition ease-in-out duration-300">
          Go to List of Universities
        </p>
      </Link>
    </main>
  );
}
