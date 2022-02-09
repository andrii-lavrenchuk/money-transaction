import { useState } from "react";
import { connect } from "react-redux";

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
        Hello,{firstName} {lastName}
      </h2>
      <form onSubmit={onSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="newFirstName"
            value={newFirstName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="newLastName"
            value={newLastName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            name="newEmail"
            value={newEmail}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update</button>
      </form>
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
