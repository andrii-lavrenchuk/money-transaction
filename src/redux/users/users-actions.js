import { createAction } from "@reduxjs/toolkit";

const createUserProfileRequest = createAction("users/createUserProfileRequest");
const createUserProfileSuccess = createAction("users/createUserProfileSuccess");
const createUserProfileError = createAction("users/createUserProfileError");

const updateUserProfileRequest = createAction("users/updateUserProfileRequest");
const updateUserProfileSuccess = createAction("users/updateUserProfileSuccess");
const updateUserProfileError = createAction("users/updateUserProfileError");

const getCurrentUserProfileRequest = createAction(
  "users/getCurrentUserProfileRequest"
);
const getCurrentUserProfileSuccess = createAction(
  "users/getCurrentUserProfileSuccess"
);
const getCurrentUserProfileError = createAction(
  "users/getCurrentUserProfileError"
);

const usersActions = {
  createUserProfileRequest,
  createUserProfileSuccess,
  createUserProfileError,

  updateUserProfileRequest,
  updateUserProfileSuccess,
  updateUserProfileError,

  getCurrentUserProfileRequest,
  getCurrentUserProfileSuccess,
  getCurrentUserProfileError,
};

export default usersActions;
