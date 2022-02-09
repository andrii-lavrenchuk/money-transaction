import axios from "axios";
import usersActions from "./users-actions";

axios.defaults.baseURL = "https://lassognchwmnevcbvdwb.supabase.co";

const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  "Content-Type": "application/json",
  apikey: API_KEY,
};

const createProfile = (params) => async (dispatch) => {
  dispatch(usersActions.createUserProfileRequest());

  try {
    const response = await axios.post("/rest/v1/profile", params, {
      headers: {
        ...headers,
        Prefer: "return=representation",
      },
    });

    dispatch(usersActions.createUserProfileSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.createUserProfileError(error));
  }
};

const getCurrentProfile = () => async (dispatch, getState) => {
  const {
    auth: { id: persistedId },
  } = getState();

  if (!persistedId) {
    return;
  }
  dispatch(usersActions.getCurrentUserProfileRequest());

  try {
    const response = await axios.get(
      `/rest/v1/profile?user=eq.${persistedId}&select=*`,
      {
        headers,
      }
    );

    dispatch(usersActions.getCurrentUserProfileSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.getCurrentUserProfileError(error));
  }
};

export default {
  createProfile,
  getCurrentProfile,
};
