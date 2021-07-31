import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./card";
import "./expense-list.css";
const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  const notifySuccess = () => toast.success("Expense Deleted!");
  return (
    <div className="expense-list">
      <div>This is total expenses</div>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {list.map((item) => (
        <Card item={item} notifySuccess={notifySuccess} />
      ))}
    </div>
  );
};

export default ExpenseList;
