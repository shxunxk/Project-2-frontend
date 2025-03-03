import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form onSubmit={handleSearch} className="w-full max-w-md flex">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
