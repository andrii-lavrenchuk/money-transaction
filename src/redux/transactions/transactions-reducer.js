import { createReducer } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import transactionsActions from "./transactions-actions";

const amount = createReducer(1000, {
  [transactionsActions.setAmountSuccess]: (_, { payload }) => payload,
});

const allUsersTransactions = createReducer([], {
  [transactionsActions.getAllTransactionSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [transactionsActions.getAllTransactionRequest]: () => true,
  [transactionsActions.getAllTransactionSuccess]: () => false,
  [transactionsActions.getAllTransactionError]: () => false,

  [transactionsActions.makeTransactionRequest]: () => true,
  [transactionsActions.makeTransactionSuccess]: () => false,
  [transactionsActions.makeTransactionError]: () => false,
});

const transactionsReducer = combineReducers({
  amount,
  allUsersTransactions,
  isLoading,
});

export default transactionsReducer;
