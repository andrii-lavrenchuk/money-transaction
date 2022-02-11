import { useState } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

import { authOperations } from "../../../redux/auth";

const LoginView = ({ onLogin }) => {
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
    onLogin({ email, password });
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
            Sign In
          </Button>
        </Col>
      </Row>
    </Form>
    // <form onSubmit={onSubmit}>
    //   <label>
    //     Email
    //     <input
    //       type="text"
    //       name="email"
    //       value={email}
    //       onChange={handleInputChange}
    //     />
    //   </label>

    //   <label>
    //     Password
    //     <input
    //       type="text"
    //       name="password"
    //       value={password}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <button type="submit">Sign In</button>
    // </form>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
