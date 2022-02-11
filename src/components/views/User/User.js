import { connect } from "react-redux";
import { useEffect } from "react";

import { authOperations } from "../../../redux/auth";
import { usersOperations } from "../../../redux/users";

import CreateUserProfile from "./CreateUserProfile";
import UpdateUserProfile from "./UpdateUserProfile";

import { Button } from "reactstrap";

const User = ({ onLogout, currentUserId, getCurrentUserProfile }) => {
  useEffect(() => {
    getCurrentUserProfile();
  }, [getCurrentUserProfile]);

  return (
    <div>
      {!currentUserId ? <CreateUserProfile /> : <UpdateUserProfile />}

      <Button className="mt-5" onClick={onLogout} color="danger" outline>
        Logout
      </Button>
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
