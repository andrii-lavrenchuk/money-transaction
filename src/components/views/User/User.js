import { connect } from "react-redux";
import { useEffect } from "react";

import { authOperations } from "../../../redux/auth";
import { usersOperations } from "../../../redux/users";

import CreateUserProfile from "./CreateUserProfile";
import UpdateUserProfile from "./UpdateUserProfile";

import { Button } from "reactstrap";
import Loader from "../../Loader";

const User = ({
  onLogout,
  currentUserId,
  getCurrentUserProfile,
  getAddedContacts,
  isLoading,
}) => {
  useEffect(() => {
    !currentUserId && getCurrentUserProfile();
  }, [getCurrentUserProfile, currentUserId]);

  useEffect(() => {
    !currentUserId && getAddedContacts();
  }, [getAddedContacts, currentUserId]);

  return isLoading ? (
    <Loader />
  ) : (
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
  addedContacts: state.users.addedContact,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
  getCurrentUserProfile: usersOperations.getCurrentProfile,
  getAddedContacts: usersOperations.getAddedContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
