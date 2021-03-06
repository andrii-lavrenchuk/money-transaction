import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import usersActions from "./users-actions";

import authActions from "../auth/auth-actions";
import { toast } from "react-toastify";

const currentUserInitialState = {
  email: null,
  id: null,
  firstName: "",
  lastName: "",
};

const contactsListInitialState = {
  email: null,
  id: null,
  firstName: "",
  lastName: "",
};

const profiles = {
  contentLength: "",
  profiles: [],
};

const currentUser = createReducer(currentUserInitialState, {
  [usersActions.createUserProfileSuccess]: (_, { payload }) => ({
    email: payload[0].email,
    id: payload[0].user,
    firstName: payload[0].firstName,
    lastName: payload[0].lastName,
  }),

  [usersActions.updateUserProfileSuccess]: (_, { payload }) => ({
    email: payload[0].email,
    id: payload[0].user,
    firstName: payload[0].firstName,
    lastName: payload[0].lastName,
  }),

  [usersActions.getCurrentUserProfileSuccess]: (_, { payload }) => {
    if (payload.length === 0) {
      return currentUserInitialState;
    }

    return {
      email: payload[0].email,
      id: payload[0].user,
      firstName: payload[0].firstName,
      lastName: payload[0].lastName,
    };
  },

  [authActions.logoutSuccess]: () => currentUserInitialState,
});

const contactsFound = createReducer(contactsListInitialState, {
  [usersActions.searchContactSuccess]: (_, { payload }) => {
    if (payload.length === 0) {
      toast.error(
        "Contact not found or incorrect email entered. Please, try again"
      );
      return contactsListInitialState;
    }

    return {
      email: payload[0].email,
      id: payload[0].user,
      firstName: payload[0].firstName,
      lastName: payload[0].lastName,
    };
  },
  [usersActions.addContactSuccess]: () => contactsListInitialState,
});

const addedContact = createReducer([], {
  [usersActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload[0].contact,
  ],

  [usersActions.getAddedContactsSuccess]: (_, { payload }) => {
    const addedContactsArray = [...payload];

    const arrOfContactsId = [];

    addedContactsArray.forEach((contact) => {
      const id = contact.contact;

      arrOfContactsId.push(id);
    });

    return [...arrOfContactsId];
  },

  [usersActions.deleteContactSuccess]: () => [],
});

const contactsList = createReducer([], {
  [usersActions.makeContactsListSuccess]: (_, { payload }) => payload,
  [usersActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ user }) => user !== payload),
});
const allProfiles = createReducer(profiles, {
  [usersActions.getAllProfilesSuccess]: (_, { payload }) => {
    return {
      contentLength: payload.headers["content-range"],
      profiles: payload.data,
    };
  },
});

const isLoading = createReducer(false, {
  [usersActions.makeContactsListRequest]: () => true,
  [usersActions.makeContactsListSuccess]: () => false,
  [usersActions.makeContactsListError]: () => false,

  [usersActions.deleteContactRequest]: () => true,
  [usersActions.deleteContactSuccess]: () => false,
  [usersActions.deleteContactError]: () => false,

  [usersActions.getCurrentUserProfileRequest]: () => true,
  [usersActions.getCurrentUserProfileSuccess]: () => false,
  [usersActions.getCurrentUserProfileError]: () => false,

  [usersActions.getAllProfilesRequest]: () => true,
  [usersActions.getAllProfilesSuccess]: () => false,
  [usersActions.getAllProfilesError]: () => false,

  [usersActions.createUserProfileRequest]: () => true,
  [usersActions.createUserProfileSuccess]: () => false,
  [usersActions.createUserProfileError]: () => false,

  [usersActions.addContactRequest]: () => true,
  [usersActions.addContactSuccess]: () => false,
  [usersActions.addContactError]: () => false,

  [usersActions.updateUserProfileRequest]: () => true,
  [usersActions.updateUserProfileSuccess]: () => false,
  [usersActions.updateUserProfileError]: () => false,
});

const currentUserReducer = combineReducers({
  currentUser,
  contactsFound,
  contactsList,
  addedContact,
  isLoading,
  allProfiles,
});

export default currentUserReducer;
