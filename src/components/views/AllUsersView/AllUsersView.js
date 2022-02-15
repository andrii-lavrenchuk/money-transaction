import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { usersOperations } from "../../../redux/users";

import Contact from "../../Contact";

const AllUsersView = ({
  getAllUsers,
  allUsers,
  addContact,
  userId,
  addedContacts,
}) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const disablingButton = (id) => {
    return addedContacts.includes(id);
  };

  return (
    <>
      <h2>AllUsersView</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={8}>
          {allUsers.map((item) => (
            <div key={item.id}>
              <Contact firstName={item.firstName} lastName={item.lastName} />

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
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.users.allProfiles,
  userId: state.auth.id,
  addedContacts: state.users.addedContact,
});

const mapDispatchToProps = {
  getAllUsers: usersOperations.getAllProfiles,
  addContact: usersOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersView);
