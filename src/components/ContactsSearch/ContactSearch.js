import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { usersOperations } from "../../redux/users";

import {
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem,
} from "reactstrap";

const ContactSearch = ({
  contactSearch,
  contactsFound,
  addContact,
  userId,
  getAddedContacts,
  getContactsList,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getAddedContacts();
  }, [getAddedContacts]);

  useEffect(() => {
    getContactsList();
  }, [contactsFound]);

  const onSearch = () => {
    if (value.trim() === "") {
      toast.error("Please, fill the field");
      return;
    }
    contactSearch(value);

    setValue("");
  };

  const onAddContact = () => {
    const newContact = {
      owner: userId,
      contact: contactsFound.id,
    };

    addContact(newContact);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col md={3}>
          <FormGroup floating>
            <Input
              id="search"
              value={value}
              name="newFirstName"
              placeholder="Enter user email"
              type="text"
              onChange={(e) => setValue(e.target.value)}
            />
            <Label for="search">Search User</Label>
          </FormGroup>
          <Button color="info" outline onClick={onSearch}>
            Search
          </Button>
        </Col>
      </Row>
      {contactsFound.email !== null ? (
        <>
          <Row className="justify-content-center mt-5">
            <Col md={3}>
              <ListGroup>
                <ListGroupItem color="info">
                  <ListGroupItemHeading>
                    {contactsFound.firstName}
                  </ListGroupItemHeading>

                  <ListGroupItemHeading>
                    {contactsFound.lastName}
                  </ListGroupItemHeading>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Button onClick={onAddContact} className="mt-4" color="info" outline>
            Add to my contacts
          </Button>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  contactsFound: state.users.contactsFound,
  userId: state.users.currentUser.id,
});

const mapDispatchToProps = {
  contactSearch: usersOperations.searchContact,
  addContact: usersOperations.addContact,
  getAddedContacts: usersOperations.getAddedContacts,
  getContactsList: usersOperations.getContactsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSearch);
