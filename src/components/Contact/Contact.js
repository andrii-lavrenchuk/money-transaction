import { connect } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Spinner,
} from "reactstrap";
import { usersOperations } from "../../redux/users";

const Contact = ({ firstName, lastName, email, user, onDeleteContact }) => {
  const { url } = useRouteMatch();

  console.log(url);
  return (
    // {`${url}/${user}`}
    // <NavLink to="/contact-profile">
    <Link to={`${url}/${user}`}>
      <ListGroupItemHeading>{firstName}</ListGroupItemHeading>
      <ListGroupItemHeading>{lastName}</ListGroupItemHeading>
      <ListGroupItemText>{email}</ListGroupItemText>
      <Button onClick={() => onDeleteContact(user)} color="danger" outline>
        <Spinner size="sm" />
        Delete
      </Button>
    </Link>
    // </NavLink>
  );
};

const mapDispatchToProps = {
  onDeleteContact: usersOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
