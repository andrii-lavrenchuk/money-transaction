import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "https://lassognchwmnevcbvdwb.supabase.co";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const API_KEY = process.env.REACT_APP_API_KEY;

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
    dispatch(authActions.registerError(error.message));
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
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post("/auth/v1/logout", null, {
      headers,
    });

    token.unset();

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get("/auth/v1/user", {
      headers,
    });

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default {
  register,
  login,
  logOut,
  getCurrentUser,
};
