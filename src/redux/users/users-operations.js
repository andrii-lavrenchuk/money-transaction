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

const addContact = (params) => async (dispatch) => {
  dispatch(usersActions.addContactRequest());

  try {
    const response = await axios.post("/rest/v1/contact", params, {
      headers: {
        ...headers,
        Prefer: "return=representation",
      },
    });

    dispatch(usersActions.addContactSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.addContactError(error));
  }
};

const getContactsList = () => async (dispatch, getState) => {
  const {
    users: { addedContact },
  } = getState();

  if (addedContact.length === 0) {
    return;
  }
  dispatch(usersActions.makeContactsListRequest());

  try {
    const response = await axios.get(
      `/rest/v1/profile?select=*&user=in.(${addedContact.join()})`,
      {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      }
    );

    dispatch(usersActions.makeContactsListSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.makeContactsListError(error));
  }
};

const deleteContact = (id) => async (dispatc) => {
  dispatc(usersActions.deleteContactRequest());

  try {
    await axios.delete(`/rest/v1/contact?contact=eq.${id}`, { headers });

    dispatc(usersActions.deleteContactSuccess(id));
  } catch (error) {
    dispatc(usersActions.deleteContactError);
  }
};

const getAddedContacts = () => async (dispatch, getState) => {
  const {
    auth: { id },
  } = getState();

  if (!id) {
    return;
  }
  dispatch(usersActions.getAddedContactsRequest());

  try {
    const response = await axios.get(
      `/rest/v1/contact?owner=eq.${id}&select=*`,
      {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      }
    );

    dispatch(usersActions.getAddedContactsSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.getAddedContactsError());
  }
};

const getAllProfiles = (from, to) => async (dispatch) => {
  dispatch(usersActions.getAllProfilesRequest());

  try {
    const response = await axios.get("/rest/v1/profile?select=*", {
      headers: {
        ...headers,
        Range: `${from}-${to}`,
        Prefer: "count=exact,head=true",
      },
    });

    dispatch(usersActions.getAllProfilesSuccess(response));
  } catch (error) {
    dispatch(usersActions.getAllProfilesError(error));
  }
};

export default {
  createProfile,
  updateProfile,
  getCurrentProfile,
  searchContact,
  addContact,
  getAddedContacts,
  getContactsList,
  deleteContact,
  getAllProfiles,
};
