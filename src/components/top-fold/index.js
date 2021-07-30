import React from "react";
import "./top-fold.css";
const TopFold = () => {
  return (
    <div className="topfold">
      <div className="searchbar">
        <i class="fi-rr-search"></i>
        <input placeholder="Search for expenses" />
      </div>
      <div className="add-button">
        <i class="fi-rr-add"></i>
        <label>Add</label>
      </div>
    </div>
  );
};

export default TopFold;
