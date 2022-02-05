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
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.access_token,
  [authActions.loginSuccess]: (_, { payload }) => payload.access_token,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { paylaod }) => paylaod,
  [authActions.loginError]: (_, { paylaod }) => paylaod,
});

// const loading = createReducer(null, {});

const authReducer = combineReducers({ user, token, error });

export default authReducer;
