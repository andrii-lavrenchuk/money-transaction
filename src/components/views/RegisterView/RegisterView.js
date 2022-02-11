import { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../../redux/auth";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

const RegisterView = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onRegister({ email, password });

    setPassword("");
    setEmail("");
  };

  return (
    <Form inline onSubmit={onSubmit}>
      <Row className="justify-content-center mt-5">
        <Col md={3}>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              value={email}
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleInputChange}
            />
            <Label for="exampleEmail">Email</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
            <Label for="examplePassword">Password</Label>
          </FormGroup>
          <Button color="info" outline>
            Sign Up
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
