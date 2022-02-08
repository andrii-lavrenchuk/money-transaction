import { createAction } from "@reduxjs/toolkit";

const createUserProfileRequest = createAction("users/createUserProfileRequest");
const createUserProfileSuccess = createAction("users/createUserProfileSuccess");
const createUserProfileError = createAction("users/createUserProfileError");

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
  getCurrentUserProfileRequest,
  getCurrentUserProfileSuccess,
  getCurrentUserProfileError,
};

export default usersActions;
