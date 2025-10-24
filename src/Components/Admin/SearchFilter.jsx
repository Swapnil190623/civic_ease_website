import React from "react";

function SearchFilter({ search, setSearch, filter, setFilter }) {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or location..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2"
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  );
}

export default SearchFilter;
