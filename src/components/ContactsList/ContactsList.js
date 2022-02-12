import { connect } from "react-redux";
import { useEffect } from "react";

import ContactSearch from "../ContactsSearch";
import Contact from "../Contact";

import { ListGroup, ListGroupItem, Row, Col, Spinner } from "reactstrap";
import { usersOperations } from "../../redux/users";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const ContactsList = ({ contactsList, getContactsList, addedContact }) => {
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    getContactsList();
  }, [addedContact]);

  return false ? (
    <Spinner color="info" size=""></Spinner>
  ) : (
    <>
      <ContactSearch />
      {contactsList.length === 0 ? (
        <p>Add fisrt contact</p>
      ) : (
        <Row className="justify-content-center mt-5">
          <Col md={3}>
            {false ? (
              <Spinner />
            ) : (
              <ListGroup>
                {contactsList.map((contact) => (
                  <ListGroupItem
                    className="mt-2 mb-3"
                    color="info"
                    key={contact.id}
                  >
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
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  contactsList: state.users.contactsList,
  addedContact: state.users.addedContact,
});

const mapDispatchToProps = {
  getContactsList: usersOperations.getContactsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
