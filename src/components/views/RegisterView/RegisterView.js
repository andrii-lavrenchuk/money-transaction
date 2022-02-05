import { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../../redux/auth";

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
      <button type="submit">Sign Up</button>
    </form>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
