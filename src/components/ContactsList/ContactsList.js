import { connect } from "react-redux";
import { useEffect } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

// components
import Loader from "../Loader";
import Contact from "../Contact";
import { Button, Col } from "react-bootstrap";

// operations
import { usersOperations } from "../../redux/users";

const ContactsList = ({
  contactsList,
  getContactsList,
  addedContact,
  isLoading,
  onDeleteContact,
  visibleContacts,
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
        <div className="d-flex justify-content-center">
          <Col md={6} lg={3}>
            {visibleContacts.map((contact) => (
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
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  addedContact: state.users.addedContact,
  isLoading: state.users.isLoading,
  contactsList: state.users.contactsList,
});

const mapDispatchToProps = {
  getContactsList: usersOperations.getContactsList,
  onDeleteContact: usersOperations.deleteContact,
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.object.isRequired),
  getContactsList: PropTypes.func.isRequired,
  addedContact: PropTypes.arrayOf(PropTypes.string.isRequired),
  isLoading: PropTypes.bool,
  onDeleteContact: PropTypes.func,
  visibleContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
