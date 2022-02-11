import { useState } from "react";
import { connect } from "react-redux";
import { usersOperations } from "../../../../redux/users";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

const CreateUserProfile = ({ onCreateProfile, email, profileUserId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "firstName":
        return setFirstName(value);
      case "lastName":
        return setLastName(value);
      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onCreateProfile({ email, firstName, lastName, user: profileUserId });
    setFirstName("");
    setLastName("");
  };
  return (
    <>
      <h2>Please, create your profile</h2>

      <Form inline onSubmit={onSubmit}>
        <Row className="justify-content-center mt-5">
          <Col md={3}>
            <FormGroup floating>
              <Input
                id="firstName"
                value={firstName}
                name="firstName"
                placeholder="First Name"
                type="text"
                onChange={handleInputChange}
              />
              <Label for="firstName">First Name</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="examplePassword"
                value={lastName}
                placeholder="Password"
                type="text"
                name="lastName"
                onChange={handleInputChange}
              />
              <Label for="examplePassword">Last Name</Label>
            </FormGroup>
            <Button color="info" outline>
              Create
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  profileUserId: state.auth.id,
});
const mapDispatchToProps = {
  onCreateProfile: usersOperations.createProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserProfile);
