import { useState, useEffect } from 'react';

export default function FiveSegmentRating({ initialRating = 0, businessId }) {
  const [rating, setRating] = useState(initialRating);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [business, setBusiness] = useState(null); // State to hold business data

  useEffect(() => {
    // Fetch business data on component mount
    fetch(`http://localhost:3001/businesses/${businessId}`)
      .then((response) => response.json())
      .then((businessData) => {
        setBusiness(businessData);

        // Initialize rating state based on existing ratings or averageRating
        if (businessData.ratings && businessData.ratings.length > 0) {
          const totalRatings = businessData.ratings.reduce((sum, r) => sum + r, 0);
          const averageRating = Math.round(totalRatings / businessData.ratings.length);
          setRating(averageRating);
        }
      })
      .catch((error) => {
        console.error('Error fetching business data:', error);
      });
  }, [businessId]);

  const handleSegmentClick = (segmentNumber) => {
    const newRating = 6 - segmentNumber; // Convert segment number to rating
    setRating(newRating);

    // Show alert with rating
    setAlertMessage(`You have rated: ${newRating}`);
    setAlertVisible(true);

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);

    // Update rating in the database
    if (business) {
      updateRatingInDB(newRating);
    }
  };

  const updateRatingInDB = (newRating) => {
    // Add the new rating to the ratings array
    const updatedRatings = [...business.ratings, newRating];

    // Calculate the new average rating
    const totalRatings = updatedRatings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = Math.round(totalRatings / updatedRatings.length); // Round to nearest integer

    // Update the business data with the new ratings and average rating
    fetch(`http://localhost:3001/businesses/${businessId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ratings: updatedRatings,
        averageRating: averageRating, // Update the average rating
      }),
    })
      .then((res) => res.json())
      .then((updatedBusiness) => {
        setBusiness(updatedBusiness); // Update the local state with the new business data
        console.log('Rating updated:', updatedBusiness);
      })
      .catch((error) => {
        console.error('Error updating rating:', error);
      });
  };

  return (
    <div className="text-center mt-5">
      <h3 className="text-lg font-semibold text-black text-wrap" >Rate Us!</h3>
      <div className="relative w-24 h-36 mx-auto mt-4">
        {/* Top horizontal line (Rating 5) */}
        <div
          className={`absolute top-0 left-0 w-full h-5 bg-gray-300 cursor-pointer ${rating >= 5 ? 'bg-yellow-400' : ''}`}
          onClick={() => handleSegmentClick(1)}
        ></div>

        {/* Upper left vertical line (Rating 4) */}
        <div
          className={`absolute top-0 left-0 w-5 h-[60px] bg-gray-300 cursor-pointer ${rating >= 4 ? 'bg-yellow-400' : ''}`}
          onClick={() => handleSegmentClick(2)}
        ></div>

        {/* Middle horizontal line (Rating 3) */}
        <div
          className={`absolute top-12 left-0 w-full h-5 bg-gray-300 cursor-pointer ${rating >= 3 ? 'bg-yellow-400' : ''}`}
          onClick={() => handleSegmentClick(3)}
        ></div>

        {/* Lower right vertical line (Rating 2) */}
        <div
          className={`absolute top-12 right-0 w-5 h-[67.5px] bg-gray-300 cursor-pointer ${rating >= 2 ? 'bg-yellow-400' : ''}`}
          onClick={() => handleSegmentClick(4)}
        ></div>

        {/* Bottom horizontal line (Rating 1) */}
        <div
          className={`absolute bottom-2 left-0 w-full h-5 bg-gray-300 cursor-pointer ${rating >= 1 ? 'bg-yellow-400' : ''}`}
          onClick={() => handleSegmentClick(5)}
        ></div>
      </div>

      {/* Custom alert popup */}
      {alertVisible && (
        <div className="mt-3 text-sm font-medium text-black bg-yellow-100 py-2 px-4 rounded shadow-lg transition-opacity duration-300">
          {alertMessage}
        </div>
      )}
    </div>
  );
}
