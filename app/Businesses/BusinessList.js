"use client";

import { useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";
import Toolbar from "./ToolBar";

export default function BusinessesList() {
  const [businesses, setBusinesses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("popularity");

  useEffect(() => {
    fetch("http://localhost:3001/businesses")
      .then((res) => res.json())
      .then((data) => setBusinesses(data));
  }, []);

  const deleteBusiness = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete your business?");
    if (isConfirmed) {
      fetch(`http://localhost:3001/businesses/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to delete business.");
          }
          // Update the state by removing the deleted business using the spread operator
          setBusinesses((prevBusinesses) => [...prevBusinesses.filter((business) => business.id !== id)]);
          alert("Business deleted successfully");
        })
        .catch((error) => alert(error.message));
    }
  };

  // Filtering and Sorting Logic (remains the same)
  const filteredBusinesses = categoryFilter
    ? businesses.filter((business) => business.category === categoryFilter)
    : businesses;

  const searchedBusinesses = searchQuery
    ? filteredBusinesses.filter((business) =>
        business.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBusinesses;

  const sortedBusinesses = [...searchedBusinesses].sort((a, b) => {
    if (sortOption === "popularity") return b.popularity - a.popularity;
    if (sortOption === "averageRating") return b.averageRating- a.averageRating;
    return 0;
  });

  return (
    <>
      <div className="bg-green-50">
        <Toolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {sortedBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              business={business}
              onDeleteBusiness={() => deleteBusiness(business.id)} // Pass delete function with business id
            />
          ))}
        </ul>
      </div>
    </>
  );
}

