import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import usersActions from "./users-actions";

import authActions from "../auth/auth-actions";

const currentUserInitialState = {
  email: null,
  id: null,
  firstName: "",
  lastName: "",
};

const currentUser = createReducer(currentUserInitialState, {
  [usersActions.createUserProfileSuccess]: (_, { payload }) => {
    return {
      email: payload[0].email,
      id: payload[0].id,
      firstName: payload[0].firstName,
      lastName: payload[0].lastName,
    };
  },

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

const currentUserReducer = combineReducers({ currentUser });

export default currentUserReducer;
