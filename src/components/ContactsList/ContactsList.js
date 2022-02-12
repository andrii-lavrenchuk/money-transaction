import { connect } from "react-redux";
import { useEffect } from "react";

import ContactSearch from "../ContactsSearch";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
  Button,
  Spinner,
} from "reactstrap";
import { usersOperations } from "../../redux/users";

const ContactsList = ({
  contactsList,
  onDeleteContact,
  getContactsList,
  addedContact,
}) => {
  useEffect(() => {
    getContactsList();

    console.log("getContactsList");
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
                    <ListGroupItemHeading>
                      {contact.firstName}
                    </ListGroupItemHeading>
                    <ListGroupItemHeading>
                      {contact.lastName}
                    </ListGroupItemHeading>
                    <ListGroupItemText>{contact.email}</ListGroupItemText>
                    <Button
                      onClick={() => onDeleteContact(contact.user)}
                      color="danger"
                      outline
                    >
                      Delete
                    </Button>
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
  onDeleteContact: usersOperations.deleteContact,
  getContactsList: usersOperations.getContactsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
