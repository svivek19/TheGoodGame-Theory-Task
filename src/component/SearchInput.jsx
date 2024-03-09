import React from "react";

// https://api.punkapi.com/v2/beers

const SearchInput = () => {
  return (
    <div className="w-5/6 mx-auto my-10 text-center">
      <form className="space-x-3">
        <input
          type="search"
          placeholder="Search Items..."
          className="bg-gray-200 font-semibold outline-none p-2 w-2/6 rounded"
        />
        <button className="bg-slate-700 px-5 py-2 rounded text-white font-semibold">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
