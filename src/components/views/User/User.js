import { connect } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";

// components
import CreateUserProfile from "./CreateUserProfile";
import UpdateUserProfile from "./UpdateUserProfile";
import Loader from "../../Loader";
import { Button } from "reactstrap";

// operations
import { authOperations } from "../../../redux/auth";
import { usersOperations } from "../../../redux/users";

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
    <div className="pt-5">
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

User.propTypes = {
  onLogout: PropTypes.func,
  currentUserId: PropTypes.string,
  getCurrentUserProfile: PropTypes.func,
  getAddedContacts: PropTypes.func,
  isLoading: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
