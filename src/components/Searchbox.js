import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input 
        type="search"
        placeholder="Search tests by name"
        onChange={searchChange}
        ></input>
    </div>
  );
};

export default Searchbox;
