import { useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { usersOperations } from "../../../redux/users";

import Contact from "../../Contact";
import Loader from "../../Loader";
import Pagination from "../../Pagination";

const AllUsersView = ({
  getAllUsers,
  allUsers,
  addContact,
  userId,
  addedContacts,
  isLoading,
  contentLength,
}) => {
  const perPage = 5;
  useEffect(() => {
    getAllUsers(0, 4);
  }, [getAllUsers]);

  const disablingButton = (id) => {
    return addedContacts.includes(id);
  };

  const handlePageClick = async (data) => {
    let page = data.selected + 1;
    const from = (page - 1) * perPage;
    const to = (page - 1) * perPage + perPage - 1;

    await getAllUsers(from, to);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>AllUsersView</h2>
          <div className="d-flex justify-content-center">
            <Col md={6} lg={3}>
              {allUsers.map((item) => (
                <div key={item.id}>
                  <Contact
                    firstName={item.firstName}
                    lastName={item.lastName}
                  />

                  <Button
                    onClick={() =>
                      addContact({ owner: userId, contact: item.user })
                    }
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
        contentLength={contentLength}
        handlePageClick={handlePageClick}
        perPage={perPage}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.users.allProfiles.profiles,
  userId: state.auth.id,
  addedContacts: state.users.addedContact,
  isLoading: state.users.isLoading,
  contentLength: state.users.allProfiles.contentLength,
});

const mapDispatchToProps = {
  getAllUsers: usersOperations.getAllProfiles,
  addContact: usersOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersView);
