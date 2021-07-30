import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "./add-form.css";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input placeholder="Give a name to your expenditure" />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input placeholder="Enter Amount" className="amount-input" />
      </div>
      <div className="category-container-parent">
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
      <div className="form-add-button">
        <div>
          <label>Add</label>
          <i class="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
