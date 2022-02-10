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

const updateProfile = (params) => async (dispatch, getState) => {
  const {
    users: {
      currentUser: { id },
    },
  } = getState();
  dispatch(usersActions.updateUserProfileRequest());

  try {
    const response = await axios.patch(
      `/rest/v1/profile?user=eq.${id}`,
      params,
      {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      }
    );

    dispatch(usersActions.updateUserProfileSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.updateUserProfileError(error));
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

const searchContact = (value) => async (dispatch) => {
  dispatch(usersActions.searchContactRequest());

  try {
    const response = await axios.get(
      `/rest/v1/profile?email=eq.${value}&select=*`,
      {
        headers,
      }
    );

    dispatch(usersActions.searchContactSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.searchContactError(error));
  }
};

export default {
  createProfile,
  updateProfile,
  getCurrentProfile,
  searchContact,
};
