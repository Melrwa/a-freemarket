// Toolbar.js

import Search from './Search';
import Filter from './Filter';
import Sort from './Sort';

export default function Toolbar({ searchQuery, setSearchQuery, categoryFilter, setCategoryFilter, sortOption, setSortOption }) {
  return (
    <div className="bg-[#C6D3BC] p-4 shadow-md rounded-md mb-6">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
      <Sort sortOption={sortOption} setSortOption={setSortOption} />
    </div>
  );
}
