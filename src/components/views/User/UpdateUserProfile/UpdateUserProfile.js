import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

// components
import Loader from "../../../Loader";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

// operations
import { usersOperations } from "../../../../redux/users";

const UpdateUserProfile = ({
  firstName,
  lastName,
  email,
  onUpdateProfile,
  isLoading,
}) => {
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
    if (newFirstName === "" || newLastName === "" || newEmail === "") {
      toast.error("Field(s) cannot be empty!");
      return;
    }

    if (newFirstName.trim() === firstName && newLastName.trim() === lastName) {
      toast.error("You cannot use the same values for updating!");
      return;
    }
    onUpdateProfile({
      firstName: newFirstName.trim(),
      lastName: newLastName.trim(),
      email: newEmail.trim(),
    });

    toast.success("Profile has been updated!");
  };

  return (
    <>
      <h2>
        Hello,{firstName} {lastName}.
      </h2>
      <h2>Here you can update your profile</h2>

      {isLoading ? (
        <Loader />
      ) : (
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
                  name="newEmail"
                  value={newEmail}
                  placeholder="Password"
                  type="email"
                  onChange={handleInputChange}
                />
                <Label for="email">Email</Label>
              </FormGroup>
              <Button color="info" outline>
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.users.currentUser.firstName,
  lastName: state.users.currentUser.lastName,
  email: state.users.currentUser.email,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = {
  onUpdateProfile: usersOperations.updateProfile,
};

UpdateUserProfile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  onUpdateProfile: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserProfile);
