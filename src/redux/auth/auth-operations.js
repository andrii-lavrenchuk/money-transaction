import axios from "axios";
import authActions from "./auth-actions.js";

axios.defaults.baseURL = "https://lassognchwmnevcbvdwb.supabase.co";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

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

    token.set(response.data.access_token);

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

    token.set(response.data.access_token);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    console.log(headers);
    await axios.post("/auth/v1/logout", null, {
      headers,
    });

    token.unset();

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

export default {
  register,
  login,
  logOut,
};
