import React from "react";
import "./top-fold.css";
const TopFold = () => {
  const page = window.location.pathname;

  return (
    <div className="topfold">
      {!page === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i class="fi-rr-search"></i>
            <input placeholder="Search for expenses" />
          </div>
          <div className="add-button">
            <i class="fi-rr-add"></i>
            <label>Add</label>
          </div>
        </div>
      ) : (
        <div className="add-topfold">
          <div className="add-topfold-button">
            <i class="fi-rr-angle-left"></i>
            <label>Back</label>
          </div>
          <div className="add-topfold-button">
            <i class="fi-rr-cross-circle"></i>
            <label>Cancel</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
