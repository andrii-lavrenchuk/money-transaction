import { ListGroupItemHeading } from "reactstrap";

const Contact = ({ firstName, lastName }) => {
  return (
    <>
      <ListGroupItemHeading>{firstName}</ListGroupItemHeading>
      <ListGroupItemHeading>{lastName}</ListGroupItemHeading>
    </>
  );
};

export default Contact;
