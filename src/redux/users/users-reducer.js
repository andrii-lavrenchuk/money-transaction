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

const currentUser = createReducer(currentUserInitialState, {
  [usersActions.createUserProfileSuccess]: (_, { payload }) => ({
    email: payload[0].email,
    id: payload[0].id,
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

const contactsList = createReducer(contactsListInitialState, {
  [usersActions.searchContactSuccess]: (_, { payload }) => {
    if (payload.length === 0) {
      toast.error("Contact not found or incorrect email entered");
      return contactsListInitialState;
    }

    return {
      email: payload[0].email,
      id: payload[0].user,
      firstName: payload[0].firstName,
      lastName: payload[0].lastName,
    };
  },
});

const currentUserReducer = combineReducers({ currentUser, contactsList });

export default currentUserReducer;
