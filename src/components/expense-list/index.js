import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import "./expense-list.css";
const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  return (
    <div className="expense-list">
      <div>This is total expenses</div>
      {list.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default ExpenseList;
