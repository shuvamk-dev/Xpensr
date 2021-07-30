import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "./add-form.css";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
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
          <label>Category</label>
          <i class="fi-rr-angle-down"></i>
        </div>
        {categoryOpen && (
          <div className="category-container">
            {cat.map((category) => (
              <div
                className="category-item"
                style={{ borderRight: `5px solid ${category.color}` }}
              >
                <label>{category.title}</label>
                <img src={category.icon.default} alt={category.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddForm;
