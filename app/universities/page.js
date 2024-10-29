// app/page.js

import UniversityCard from "./university-card";

export const metadata = {
  title: "Weather Page",
  description: "Displays current weather data",
};

async function fetchWeatherData() {
  const res = await fetch(
    `http://universities.hipolabs.com/search?country=United+States`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return res.json();
}

export default async function HomePage() {
  let data;

  try {
    data = await fetchWeatherData();
  } catch (error) {
    console?.error(error);
    return <p>Failed to load weather data.</p>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-900 my-10">
          United State Universities
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((d) => (
            <UniversityCard data={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
