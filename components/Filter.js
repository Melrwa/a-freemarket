export default function Filter({ categoryFilter, setCategoryFilter }) {
  return (
    <select
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
      className="w-full max-w-xs p-3 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-[#C6D3BC] text-green-900"
    >
      <option value="">All Categories</option>
      <option value="Food and Beverages">Food and Bevarages</option>
      <option value="Apparel">Apparel</option>
      <option value="Transport">Transport</option>
      {/* Add more categories as needed */}
    </select>
  );
}
