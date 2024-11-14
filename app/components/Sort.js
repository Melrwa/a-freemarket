export default function Sort({ sortOption, setSortOption }) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="w-full max-w-xs p-3 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-[#C6D3BC] text-green-900"
    >
      <option value="rating">Sort by Rating</option>
      <option value="alphabetical">Sort A-Z</option>
    </select>
  );
}
