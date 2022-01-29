import React, { useState } from "react";

const styles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  margin:'20px 0px',
};

export const DataSearch = ({ handleSearchValue }) => {
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    handleSearchValue(searchData);
  };
  return (
    <form onSubmit={handleSearch} style={styles}>
      <input
        placeholder="search"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
