import { connect } from "react-redux";

import { ListGroupItemHeading, Button, Spinner } from "reactstrap";
import { usersOperations } from "../../redux/users";

const Contact = ({ firstName, lastName, user, onDeleteContact }) => {
  return (
    <>
      <ListGroupItemHeading>{firstName}</ListGroupItemHeading>
      <ListGroupItemHeading>{lastName}</ListGroupItemHeading>

      <Button onClick={() => onDeleteContact(user)} color="danger" outline>
        <Spinner size="sm" />
        Delete
      </Button>
    </>
  );
};

const mapDispatchToProps = {
  onDeleteContact: usersOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
