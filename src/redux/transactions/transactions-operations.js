import axios from "axios";
import transactionsActions from "./transactions-actions";

axios.defaults.baseURL = "https://lassognchwmnevcbvdwb.supabase.co";
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  "Content-Type": "application/json",
  apikey: API_KEY,
};

const getAllTransaction = () => async (dispatch) => {
  dispatch(transactionsActions.getAllTransactionRequest());

  try {
    const response = await axios.get("/rest/v1/transaction?select=*", {
      headers,
    });

    dispatch(transactionsActions.getAllTransactionSuccess(response.data));
  } catch (error) {
    dispatch(transactionsActions.getAllTransactionError(error));
  }
};

const makeTransaction = (params) => async (dispatch) => {
  dispatch(transactionsActions.makeTransactionRequest());

  try {
    await axios.post(
      "https://lassognchwmnevcbvdwb.supabase.co/rest/v1/transaction",
      params,
      {
        headers: { ...headers, Prefer: "return=representation" },
      }
    );

    dispatch(transactionsActions.makeTransactionSuccess());
  } catch (error) {
    dispatch(transactionsActions.makeTransactionError(error));
  }
};

export default { makeTransaction, getAllTransaction };
