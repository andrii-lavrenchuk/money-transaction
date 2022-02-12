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

const searchContactRequest = createAction("users/searchContactRequest");
const searchContactSuccess = createAction("users/searchContactSuccess");
const searchContactError = createAction("users/searchContactError");

const addContactRequest = createAction("users/addContactRequest");
const addContactSuccess = createAction("users/addContactSuccess");
const addContactError = createAction("users/addContactError");

const getAddedContactsRequest = createAction("users/getAddedContactsRequest");
const getAddedContactsSuccess = createAction("users/getAddedContactsSuccess");
const getAddedContactsError = createAction("users/getAddedContactsError");

const makeContactsListRequest = createAction("users/makeContactsListRequest");
const makeContactsListSuccess = createAction("users/makeContactsListSuccess");
const makeContactsListError = createAction("users/makeContactsListError");

const deleteContactRequest = createAction("users/deleteContactRequest");
const deleteContactSuccess = createAction("users/deleteContactSuccess");
const deleteContactError = createAction("users/deleteContactError");

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

  searchContactRequest,
  searchContactSuccess,
  searchContactError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  getAddedContactsRequest,
  getAddedContactsSuccess,
  getAddedContactsError,

  makeContactsListRequest,
  makeContactsListSuccess,
  makeContactsListError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export default usersActions;
