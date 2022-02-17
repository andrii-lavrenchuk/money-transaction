import { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Form, Col, Button, Card } from "react-bootstrap";

import SendMoneyModal from "../../SendMoneyModal";

const ContactProfileView = ({ contactsList }) => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  const { firstName, lastName, email } = contactsList.find(
    (item) => item.user === id
  );

  const onBackButtonCLick = () => {
    history.push(location?.state?.from ?? "/user-contacts");
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="p-5">
      <Button variant="outline-dark" type="Button" onClick={onBackButtonCLick}>
        Back to list
      </Button>
      <Card>
        <Card.Header>ContactProfileView</Card.Header>
        <Card.Title>{firstName}</Card.Title>
        <Card.Title>{lastName}</Card.Title>
        <Card.Text>{email}</Card.Text>
      </Card>
      <Button variant="outline-info" onClick={() => setShowModal(true)}>
        Send money
      </Button>

      <SendMoneyModal
        show={showModal}
        onHide={() => setShowModal(false)}
        value={inputValue}
        userid={id}
      >
        <Form.Group as={Col} md="3" controlId="validationFormik05">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="zip"
            value={inputValue}
            onChange={handleChange}
            valid="true"
            // invalid={}
            // isInvalid={!!errors.zip}
          />
        </Form.Group>
      </SendMoneyModal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactsList: state.users.contactsList,
});

export default connect(mapStateToProps, null)(ContactProfileView);
