import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const ContactProfileView = ({ contactsList }) => {
  const { id } = useParams();

  const { firstName, lastName, email } = contactsList.find(
    (item) => item.user === id
  );

  return (
    <>
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
