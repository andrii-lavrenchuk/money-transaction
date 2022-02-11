import { connect } from "react-redux";
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

const ContactsList = ({ contactsList }) => {
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
                  <ListGroupItem color="info" key={contact.id}>
                    <ListGroupItemHeading>
                      {contact.firstName}
                    </ListGroupItemHeading>
                    <ListGroupItemHeading>
                      {contact.lastName}
                    </ListGroupItemHeading>
                    <ListGroupItemText>{contact.email}</ListGroupItemText>
                    <Button color="danger" outline>
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
});

export default connect(mapStateToProps, null)(ContactsList);
