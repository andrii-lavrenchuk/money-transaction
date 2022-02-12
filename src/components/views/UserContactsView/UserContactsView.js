import { connect } from "react-redux";

import ContactsList from "../../ContactsList";

const UserContactsView = ({ currentUserId }) => {
  return currentUserId ? (
    <>
      <h2>User Contacts View</h2>
      <ContactsList />
    </>
  ) : (
    <h2>You have to create profile first</h2>
  );
};
const mapStateToProps = (state) => ({
  currentUserId: state.users.currentUser.id,
});

export default connect(mapStateToProps, null)(UserContactsView);
