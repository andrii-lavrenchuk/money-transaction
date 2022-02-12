import { connect } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";

const ContactProfileView = ({ contactsList }) => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  const { firstName, lastName, email } = contactsList.find(
    (item) => item.user === id
  );

  const onBackButtonCLick = () => {
    history.push(location?.state?.from ?? "/user-contacts");
  };

  return (
    <>
      <button type="button" onClick={onBackButtonCLick}>
        Back to list
      </button>
      <h2>ContactProfileView</h2>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
    </>
  );
};

const mapStateToProps = (state) => ({
  contactsList: state.users.contactsList,
});

export default connect(mapStateToProps, null)(ContactProfileView);
