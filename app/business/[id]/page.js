"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';


// Await the params using `use` if needed in Next.js 13+
export default function BusinessDetailsPage({ params: initialParams }) {
  const [business, setBusiness] = useState(null);
  const [params, setParams] = useState(null);

  // Use an async function to fetch params
  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await initialParams;
      setParams(unwrappedParams);
    }
    fetchParams();
  }, [initialParams]);

  useEffect(() => {
    if (!params) return;
    // Fetch business data from the API endpoint when params is available
    fetch(`http://localhost:3001/businesses/${params.id}`)
      .then(response => response.json())
      .then(data => setBusiness(data))
      .catch(error => console.error('Error fetching business data:', error));
  }, [params]);

  if (!business) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 via-white to-green-50 p-6">
      <div className="relative w-full max-w-3xl bg-white border border-gray-200 shadow-lg rounded-xl p-8 transform transition-all duration-500 hover:scale-105 ease-in-out">
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-xl z-0"
          style={{ backgroundImage: `url(${business.backgroundImage})` }}
        />
        <div className="relative z-10 text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
          <img
            src={business.logo}
            alt={business.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-300 object-cover"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{business.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{business.description}</p>
          
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Location: {business.location}</h3>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Category: {business.category}</h3>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-inner mb-4">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Services Offered:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {business.services.map((service, index) => (
                <li key={index} className="mb-1">{service}</li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700 italic text-lg">{business.promotionalMessage}</p>
          </div>

          {/* Return Button */}
          <Link href="/" passHref>
            <button className="mt-6 bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
              BACK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
