import Link from 'next/link';


export default function BusinessCard({ business, onDeleteBusiness }) {
  return (

     <Link href={`/business/${business.id}`} passHref>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${business.backgroundImage})` }}
        />
        <img 
          src={business.logo} 
          alt={business.name} 
          className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-green-300 z-10 relative" 
        />
      </div>
      <h1 className="text-xl font-bold text-center text-gray-800 mb-2">{business.name}</h1>
      
      <p className="text-gray-600 text-center mb-4">{business.description}</p>
      <div className="flex items-center justify-center space-x-2 text-yellow-500 font-semibold">
      <span>Rating:</span>
      <span className="flex items-center">⭐ {business.averageRating}</span>
      </div>


      <h3 className="text-sm text-center font-medium text-gray-700 mb-1">{business.location}</h3>
      <em className="block text-center text-green-600 font-semibold text-sm mb-4">{business.category}</em>

      <div className="flex justify-between">
        <button
          onClick={onDeleteBusiness}
          style={{ backgroundColor: "#8B5E3C" }}
          className="text-white px-4 py-2 rounded-md"
        >
          DELETE
        </button>
      </div>
    </div>
   </Link>
  );
}
