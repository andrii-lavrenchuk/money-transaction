import { connect } from "react-redux";

import { ListGroupItemHeading, ListGroupItemText, Button } from "reactstrap";
import { usersOperations } from "../../redux/users";

const Contact = ({ firstName, lastName, email, user, onDeleteContact }) => {
  return (
    <>
      <ListGroupItemHeading>{firstName}</ListGroupItemHeading>
      <ListGroupItemHeading>{lastName}</ListGroupItemHeading>
      <ListGroupItemText>{email}</ListGroupItemText>
      <Button onClick={() => onDeleteContact(user)} color="danger" outline>
        Delete
      </Button>
    </>
  );
};

const mapDispatchToProps = {
  onDeleteContact: usersOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
