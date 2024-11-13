import FiveRatingIcon from "../fonts/FiveRatingIcon";

export default function BusinessCard({ Businessname, logo, rating, description, location, category, contact }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      
      {/* Business Logo */}
      <img src={logo} alt={Businessname} className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-green-300" />
      
      {/* Business Name */}
      <h1 className="text-xl font-bold text-center text-gray-800 mb-2">{Businessname}</h1>
      
       {/* Five-Star Rating Icon */}
       <div className="flex justify-center items-center mb-2">
        <FiveRatingIcon rating={rating} />
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-center mb-4">{description}</p>
      
      {/* Location */}
      <h3 className="text-sm text-center font-medium text-gray-700 mb-1">{location}</h3>
      
      {/* Category */}
      <em className="block text-center text-green-600 font-semibold text-sm mb-4">{category}</em>
      
      {/* Contact Information */}
      <div className="text-center mt-4">
        <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md font-semibold shadow-sm transition-colors duration-200">
          Contact: {contact}
        </button>
      </div>
    </div>
  );
}
