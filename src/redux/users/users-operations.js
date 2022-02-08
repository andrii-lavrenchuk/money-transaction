import axios from "axios";
import usersActions from "./users-actions";

axios.defaults.baseURL = "https://lassognchwmnevcbvdwb.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNDA1NTEyLCJleHAiOjE5NTc5ODE1MTJ9.kyuoxEoLxxKrJGbNZSfibFbpFdEAN2T7cJgtJcsp26I";

const headers = {
  "Content-Type": "application/json",
  apikey: API_KEY,
};

const createProfile = (params) => async (dispatch) => {
  dispatch(usersActions.createUserProfileRequest());

  try {
    const response = await axios.post("/rest/v1/profile", params, {
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
        Prefer: "return=representation",
      },
    });

    dispatch(usersActions.createUserProfileSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.createUserProfileError(error));
  }
};

const getCurrentProfile = () => async (dispatch) => {
  const id = localStorage.getItem("userId");

  if (!id) {
    return;
  }
  dispatch(usersActions.getCurrentUserProfileRequest);

  try {
    const response = await axios.get(`/rest/v1/profile?id=eq.${id}&select=*`, {
      headers: { apikey: API_KEY },
    });

    dispatch(usersActions.getCurrentUserProfileSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.getCurrentUserProfileError(error));
  }
};

export default {
  createProfile,
  getCurrentProfile,
};
