import { useState } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

import { usersOperations } from "../../../../redux/users";

const UpdateUserProfile = ({ firstName, lastName, email, onUpdateProfile }) => {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "newFirstName":
        return setNewFirstName(value);
      case "newLastName":
        return setNewLastName(value);
      case "newEmail":
        return setNewEmail(value);

      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onUpdateProfile({
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
    });
  };

  return (
    <>
      <h2>
        Hello,{firstName} {lastName}.
      </h2>
      <h2>Here you can update your profile</h2>

      <Form inline onSubmit={onSubmit}>
        <Row className="justify-content-center mt-5">
          <Col md={3}>
            <FormGroup floating>
              <Input
                id="firstName"
                value={newFirstName}
                name="newFirstName"
                placeholder="First Name"
                type="text"
                onChange={handleInputChange}
              />
              <Label for="firstName">First Name</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="lastName"
                name="newLastName"
                value={newLastName}
                placeholder="Password"
                type="text"
                onChange={handleInputChange}
              />
              <Label for="lastName">Last Name</Label>
            </FormGroup>

            <FormGroup floating>
              <Input
                id="email"
                name="newLastName"
                value={newLastName}
                placeholder="Password"
                type="email"
                onChange={handleInputChange}
              />
              <Label for="email">Email</Label>
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
  firstName: state.users.currentUser.firstName,
  lastName: state.users.currentUser.lastName,
  email: state.users.currentUser.email,
});

const mapDispatchToProps = {
  onUpdateProfile: usersOperations.updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserProfile);
