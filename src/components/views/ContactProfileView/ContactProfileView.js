import { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";

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
    <>
      <button type="button" onClick={onBackButtonCLick}>
        Back to list
      </button>
      <h2>ContactProfileView</h2>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
      <Button onClick={() => setShowModal(true)}>Send money</Button>

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
    </>
  );
};

const mapStateToProps = (state) => ({
  contactsList: state.users.contactsList,
});

export default connect(mapStateToProps, null)(ContactProfileView);
