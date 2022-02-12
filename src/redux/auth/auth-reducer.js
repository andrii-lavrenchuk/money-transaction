import { createReducer } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import authActions from "./auth-actions";

const id = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user.id,
  [authActions.loginSuccess]: (_, { payload }) => payload.user.id,
  [authActions.logoutSuccess]: () => null,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.id,
});

const email = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user.email,

  [authActions.loginSuccess]: (_, { payload }) => payload.user.email,
  [authActions.logoutSuccess]: () => null,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.email,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.access_token,
  [authActions.loginSuccess]: (_, { payload }) => payload.access_token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const isLoading = createReducer(false, {
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const authReducer = combineReducers({
  id,
  email,
  token,
  error,
  isAuthenticated,
  isLoading,
});

export default authReducer;
