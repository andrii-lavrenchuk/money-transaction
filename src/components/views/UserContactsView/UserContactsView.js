import { useEffect } from "react";
import { connect } from "react-redux";
import { usersOperations } from "../../../redux/users";

import ContactsList from "../../ContactsList";

const UserContactsView = ({ getContactsList, addedContact }) => {
  // useEffect(() => {
  //   getContactsList();

  //   console.log("getContactsList");
  // }, [addedContact]);

  return (
    <>
      <h2>User Contacts View</h2>
      <ContactsList />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   addedContact: state.users.addedContact,
// });
// const mapDispatchToProps = {
//   getContactsList: usersOperations.getContactsList,
// };

export default UserContactsView;
