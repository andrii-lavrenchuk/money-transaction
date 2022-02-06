import { createReducer } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import authActions from "./auth-actions";

const initialState = { email: null, id: null };

const user = createReducer(initialState, {
  [authActions.registerSuccess]: (_, { payload }) => ({
    email: payload.user.email,
    id: payload.user.id,
  }),

  [authActions.loginSuccess]: (_, { payload }) => ({
    email: payload.user.email,
    id: payload.user.id,
  }),
  [authActions.logoutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => ({
    email: payload.email,
    id: payload.id,
  }),
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.access_token,
  [authActions.loginSuccess]: (_, { payload }) => payload.access_token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { paylaod }) => paylaod,
  [authActions.loginError]: (_, { paylaod }) => paylaod,
  [authActions.logoutError]: (_, { paylaod }) => paylaod,
  [authActions.getCurrentUserError]: (_, { paylaod }) => paylaod,
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

const authReducer = combineReducers({ user, token, error, isAuthenticated });

export default authReducer;
