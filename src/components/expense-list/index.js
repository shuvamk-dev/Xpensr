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
      <div className="total-box"></div>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {list.length ? (
        list.map((item) => <Card item={item} notifySuccess={notifySuccess} />)
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png").default}
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
