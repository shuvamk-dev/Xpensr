import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../action-types/expenses";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  console.log(data, "Action");
  return {
    type: DELETE_EXPENSE,
    data,
  };
};

export const searchExpense = (query) => {
  console.log(query);
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};
