import { connect } from "react-redux";
import { authOperations } from "../../../redux/auth";

const User = ({ firstName, lastName, onLogout }) => {
  return (
    <div>
      {firstName ? (
        <>
          <h2>
            Welcome {firstName} {lastName}
          </h2>

          <h2>Change your profile</h2>
          <form>
            <label>
              First Name
              <input type="text" />
            </label>

            <label>
              Last Name
              <input type="text" />
            </label>
            <button type="submit">Change</button>
          </form>
        </>
      ) : (
        <>
          <h2>Please, create your profile</h2>
          <form>
            <label>
              First Name
              <input type="text" />
            </label>

            <label>
              Last Name
              <input type="text" />
            </label>
            <button type="submit">Create</button>
          </form>
        </>
      )}

      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.users.currentUser.firstName,
  lastName: state.users.currentUser.lastName,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
