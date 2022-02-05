const usersReducerInitialState = {
  currentUser: {
    id: null,
    firstName: "",
    lastName: "",
    isLoggedIn: false,
  },

  allUsers: {
    items: [],
  },
};

const usersReducer = (state = usersReducerInitialState, { payload }) => state;

export default usersReducer;
