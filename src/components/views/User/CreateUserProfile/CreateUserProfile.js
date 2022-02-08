import { useState } from "react";
import { connect } from "react-redux";
import { usersOperations } from "../../../../redux/users";

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
      <form onSubmit={onSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  profileUserId: state.auth.user.id,
});
const mapDispatchToProps = {
  onCreateProfile: usersOperations.createProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserProfile);
