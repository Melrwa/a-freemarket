"use client";
import { useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";
import Toolbar from "./ToolBar";



 export default function BusinessesList(){
    const [businesses, setBusinesses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [sortOption, setSortOption] = useState('popularity');



    useEffect(() => {
        fetch("http://localhost:3001/businesses")
          .then((res) => res.json())
          .then((data) => setBusinesses(data));
      }, []);


     const filteredBusinesses = categoryFilter
    ? businesses.filter((business) => business.category === categoryFilter)
    : businesses;

  // Filter based on search query
  const searchedBusinesses = searchQuery
    ? filteredBusinesses.filter((business) =>
        business.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBusinesses;

  // Sort businesses based on the selected option
  const sortedBusinesses = [...searchedBusinesses].sort((a, b) => {
    if (sortOption === 'popularity') return b.popularity - a.popularity;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0;
  });

    return(
<>
      {/* Apply the background color to the outermost div */}
      <div className="bg-[#C6D3BC]"> {/* This is where the consistent background color is applied */}
        {/* Toolbar section */}
        <Toolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* Businesses List Section */}
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {sortedBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              Businessname={business.name}
              logo={business.logo}
              rating={business.rating}
              description={business.description}
              location={business.location}
              category={business.category}
              contact={business.contact}
            />
          ))}
        </ul>
      </div>
    </>
    )
}