import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Contact = ({ firstName, lastName }) => {
  return (
    <>
      <Card border="info" className="mt-5 mb-3">
        <Card.Header>{firstName}</Card.Header>
        <Card.Body>
          <Card.Title>{lastName}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default Contact;
