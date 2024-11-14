// components/FiveRatingIcon.js


export default function FiveRatingIcon({ rating }) {
  return (
    <div className="flex justify-center items-center my-2">
      <div className="relative w-10 h-14">
        {/* Top horizontal line */}
        <div
          className={`absolute w-full h-1 bg-gray-300 ${
            rating >= 1 ? "bg-yellow-500" : ""
          }`}
          style={{ top: "0" }}
        ></div>

        {/* Upper left vertical line */}
        <div
          className={`absolute h-1/2 w-1 bg-gray-300 ${
            rating >= 2 ? "bg-yellow-500" : ""
          }`}
          style={{ top: "0", left: "0" }}
        ></div>

        {/* Middle horizontal line */}
        <div
          className={`absolute w-full h-1 bg-gray-300 ${
            rating >= 3 ? "bg-yellow-500" : ""
          }`}
          style={{ top: "50%" }}
        ></div>

        {/* Lower right vertical line */}
        <div
          className={`absolute h-1/2 w-1 bg-gray-300 ${
            rating >= 4 ? "bg-yellow-500" : ""
          }`}
          style={{ bottom: "0", right: "0" }}
        ></div>

        {/* Bottom horizontal line */}
        <div
          className={`absolute w-full h-1 bg-gray-300 ${
            rating === 5 ? "bg-yellow-500" : ""
          }`}
          style={{ bottom: "0" }}
        ></div>
      </div>
    </div>
  );
}
