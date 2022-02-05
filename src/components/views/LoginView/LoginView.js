import { useState } from "react";
import { connect } from "react-redux";

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
    <form onSubmit={onSubmit}>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
