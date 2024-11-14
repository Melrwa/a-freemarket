export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="bg-[#C6D3BC] w-full py-4 px-8 shadow-lg flex justify-center mt-[64px]">
      <input
        type="text"
        placeholder="Search businesses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-md p-3 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-green-700 text-green-900"
      />
    </div>
  );
}
