import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

// components
import Contact from "../../Contact";
import Loader from "../../Loader";
import Pagination from "../../Pagination";
import { Button, Col } from "react-bootstrap";

// operations
import { usersOperations } from "../../../redux/users";

const AllUsersView = ({
  allUsers,
  addContact,
  userId,
  addedContacts,
  isLoading,
}) => {
  const [contactsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const visibleContacts = [...allUsers];

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = visibleContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginationLength = Math.ceil(allUsers.length / contactsPerPage);

  const disablingButton = (id) => {
    return addedContacts.includes(id);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const addToContacts = (item) => {
    if (item.user === userId) {
      toast.error("You cannot add yourself to the contacts list!");
      return;
    }
    addContact({ owner: userId, contact: item.user });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="pt-5">All users</h2>
          <div className="d-flex justify-content-center">
            <Col md={6} lg={3}>
              {currentContacts.map((item) => (
                <div key={item.id}>
                  <Contact
                    firstName={item.firstName}
                    lastName={item.lastName}
                  />

                  <Button
                    onClick={() => addToContacts(item)}
                    variant="info"
                    disabled={disablingButton(item.user)}
                  >
                    Add to contacts
                  </Button>
                </div>
              ))}
            </Col>
          </div>
        </>
      )}

      <Pagination
        contentLength={paginationLength}
        handlePageClick={handlePageClick}
        perPage={5}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.users.allProfiles.profiles,
  userId: state.auth.id,
  addedContacts: state.users.addedContact,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = {
  addContact: usersOperations.addContact,
};

AllUsersView.propTypes = {
  allUsers: PropTypes.arrayOf(PropTypes.object.isRequired),
  addContact: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  addedContacts: PropTypes.arrayOf(PropTypes.string.isRequired),
  isLoading: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllUsersView);
