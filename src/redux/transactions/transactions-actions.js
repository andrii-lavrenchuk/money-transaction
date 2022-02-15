import { createAction } from "@reduxjs/toolkit";

const makeTransactionRequest = createAction(
  "transactions/makeTransactionRequest"
);
const makeTransactionSuccess = createAction(
  "transactions/makeTransactionSuccess"
);
const makeTransactionError = createAction("transactions/makeTransactionError");

const getAllTransactionRequest = createAction(
  "transactions/getAllTransactionRequest"
);
const getAllTransactionSuccess = createAction(
  "transactions/getAllTransactionSuccess"
);
const getAllTransactionError = createAction(
  "transactions/getAllTransactionError"
);

const setAmountRequest = createAction("transactions/setAmountRequest");
const setAmountSuccess = createAction("transactions/setAmountSuccess");
const setAmountError = createAction("transactions/setAmountError");

const authActions = {
  makeTransactionRequest,
  makeTransactionSuccess,
  makeTransactionError,

  getAllTransactionRequest,
  getAllTransactionSuccess,
  getAllTransactionError,

  setAmountRequest,
  setAmountSuccess,
  setAmountError,
};

export default authActions;
