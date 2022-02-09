import { connect } from "react-redux";
import { useEffect } from "react";

import { authOperations } from "../../../redux/auth";
import { usersOperations } from "../../../redux/users";

import CreateUserProfile from "./CreateUserProfile";
import UpdateUserProfile from "./UpdateUserProfile";

const User = ({ onLogout, currentUserId, getCurrentUserProfile }) => {
  useEffect(() => {
    getCurrentUserProfile();
  }, [getCurrentUserProfile]);

  return (
    <div>
     {!currentUserId ? <CreateUserProfile /> : <UpdateUserProfile />}

      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
   
  );
};

const mapStateToProps = (state) => ({
  currentUserId: state.users.currentUser.id,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
  getCurrentUserProfile: usersOperations.getCurrentProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
