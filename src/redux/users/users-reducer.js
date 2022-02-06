const usersReducerInitialState = {
  currentUser: {
    id: null,
    firstName: "",
    lastName: "",
  },

  allUsers: {
    items: [],
  },
};

const usersReducer = (state = usersReducerInitialState, { payload }) => state;

export default usersReducer;
