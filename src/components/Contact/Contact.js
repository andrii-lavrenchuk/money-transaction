import { Card } from "react-bootstrap";

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

export default Contact;
