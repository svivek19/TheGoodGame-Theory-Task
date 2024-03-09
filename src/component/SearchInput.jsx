import React, { useState } from "react";

const SearchInput = ({ data, setData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);

    if (inputValue === "") {
      // If input is empty, reset data to the original data immediately
      setData(data);
    } else {
      // Otherwise, filter the data after a delay
      setTimeout(() => {
        filterData(inputValue);
      }, 3000);
    }
  };

  const filterData = (query) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="w-5/6 mx-auto my-10 text-center">
      <form className="space-x-3">
        <input
          type="search"
          placeholder="Search Items..."
          className="bg-gray-200 font-semibold outline-none p-2 w-2/6 rounded"
          value={searchQuery}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchInput;
