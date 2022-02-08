import { connect } from "react-redux";

import { authOperations } from "../../../redux/auth";

import CreateUserProfile from "./CreateUserProfile";
import UpdateUserProfile from "./UpdateUserProfile";

const User = ({ onLogout, currentUserId }) => {
  return (
    <>
      {!currentUserId ? <CreateUserProfile /> : <UpdateUserProfile />}

      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUserId: state.users.currentUser.id,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
