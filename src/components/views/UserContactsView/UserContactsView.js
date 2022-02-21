import { connect } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";

// components
import Pagination from "../../Pagination";
import ContactsList from "../../ContactsList";

const UserContactsView = ({ currentUserId, contactsList }) => {
  const [contactsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const visibleContacts = contactsList.map((item) => item);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = visibleContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginationLength = Math.ceil(contactsList.length / contactsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return currentUserId ? (
    <>
      <h2 className="pt-5">My contacts</h2>
      <ContactsList visibleContacts={currentContacts} />
      {contactsList.length >= 5 && (
        <Pagination
          contentLength={paginationLength}
          handlePageClick={handlePageClick}
          perPage={5}
        />
      )}
    </>
  ) : (
    <h2>You have to create profile first</h2>
  );
};
const mapStateToProps = (state) => ({
  currentUserId: state.users.currentUser.id,

  contactsList: state.users.contactsList,
});

UserContactsView.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  contactsList: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default connect(mapStateToProps, null)(UserContactsView);
