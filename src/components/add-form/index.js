import React, { useState } from "react";
import "./add-form.css";
const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  return (
    <div className="add-form">
      <div>
        <label>Title</label>
        <input placeholder="Give a name to your expenditure" />
      </div>
      <div>
        <label>Amount ₹</label>
        <input placeholder="Enter Amount" />
      </div>
      <div className="category">
        <div
          className="category-dropdown"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          CLick me
        </div>
        {categoryOpen && (
          <div className="category-container">
            <div>Apple</div>
            <div>Apple</div>
            <div>Apple</div>
            <div>Apple</div>
            <div>Apple</div>
            <div>Apple</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddForm;
