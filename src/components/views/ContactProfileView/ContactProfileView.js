import { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// components
import { Form, Col, Button, Card } from "react-bootstrap";
import SendMoneyModal from "../../SendMoneyModal";
import Loader from "../../Loader";

const ContactProfileView = ({ contactsList, isLoading }) => {
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

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 p-5">
          <Button
            className="mb-5"
            variant="outline-dark"
            type="Button"
            onClick={onBackButtonCLick}
          >
            Back to list
          </Button>
          <Card>
            <Card.Header>ContactProfileView</Card.Header>
            <div className="p-5">
              <Card.Title>{firstName}</Card.Title>
              <Card.Title>{lastName}</Card.Title>
              <Card.Text>{email}</Card.Text>
            </div>
          </Card>
          <Button
            className="mt-5"
            variant="outline-info"
            onClick={() => setShowModal(true)}
          >
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
                value={inputValue}
                onChange={handleChange}
              />
            </Form.Group>
          </SendMoneyModal>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contactsList: state.users.contactsList,
  isLoading: state.transactions.isLoading,
});

ContactProfileView.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.object.isRequired),
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, null)(ContactProfileView);
