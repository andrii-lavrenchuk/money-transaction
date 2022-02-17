import { connect } from "react-redux";
import { useEffect } from "react";

import Loader from "../Loader";
import Contact from "../Contact";

import { Button, Col, Row } from "react-bootstrap";
import { usersOperations } from "../../redux/users";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const ContactsList = ({
  contactsList,
  getContactsList,
  addedContact,
  isLoading,
  onDeleteContact,
}) => {
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    getContactsList();
  }, [addedContact]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {contactsList.length === 0 ? (
        <h4>Add fisrt contact</h4>
      ) : (
        <Row className="justify-content-center">
          <Col md={6} lg={3}>
            {contactsList.map((contact) => (
              <div key={contact.id}>
                <Link
                  className="d-block"
                  to={{
                    pathname: `${url}/${contact.user}`,
                    state: { from: location },
                  }}
                >
                  <Contact
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                  />
                </Link>
                <Button
                  onClick={() => onDeleteContact(contact.user)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </div>
            ))}
          </Col>
        </Row>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  contactsList: state.users.contactsList,
  addedContact: state.users.addedContact,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = {
  getContactsList: usersOperations.getContactsList,
  onDeleteContact: usersOperations.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
