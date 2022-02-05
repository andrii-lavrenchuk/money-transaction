import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "https://lassognchwmnevcbvdwb.supabase.co";

// const token = {};

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNDA1NTEyLCJleHAiOjE5NTc5ODE1MTJ9.kyuoxEoLxxKrJGbNZSfibFbpFdEAN2T7cJgtJcsp26I";

const headers = {
  "Content-Type": "application/json",
  apikey: API_KEY,
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/auth/v1/signup", credentials, {
      headers,
    });

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const login = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post(
      "/auth/v1/token?grant_type=password",
      credentials,
      {
        headers,
      }
    );

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

export default {
  register,
  login,
};
