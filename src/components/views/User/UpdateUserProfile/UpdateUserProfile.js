import { connect } from "react-redux";

const UpdateUserProfile = ({ firstName, lastName }) => {
  return (
    <>
      <h2>
        Hello,{firstName} {lastName}
      </h2>
      <form>
        <label>
          First Name
          <input type="text" />
        </label>

        <label>
          Last Name
          <input type="text" />
        </label>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.users.currentUser.firstName,
  lastName: state.users.currentUser.lastName,
});

export default connect(mapStateToProps, null)(UpdateUserProfile);
