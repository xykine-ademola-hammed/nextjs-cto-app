// app/components/WeatherCard.js
import Link from "next/link";
import React from "react";

export default function UniversityCard({ data }) {
  const { name, web_pages } = data;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-w-50 max-w-60">
      <h2 className="text-2xl font-bold text-blue-600 ">{name}</h2>
      <div className="mt-4">
        <div className="text-1xl font-semibold text-gray-800">Web sites </div>
        <>
          {web_pages.map((url) => (
            <Link key={url} href={url}>
              {url}
            </Link>
          ))}
        </>
      </div>
    </div>
  );
}
