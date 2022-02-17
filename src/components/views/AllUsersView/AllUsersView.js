import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { usersOperations } from "../../../redux/users";

import Contact from "../../Contact";
import Loader from "../../Loader";

const AllUsersView = ({
  getAllUsers,
  allUsers,
  addContact,
  userId,
  addedContacts,
  isLoading,
}) => {
  useEffect(() => {
    getAllUsers(0, 4);
  }, [getAllUsers]);

  const disablingButton = (id) => {
    return addedContacts.includes(id);
  };

  const handlePageClick = async (data) => {
    const perPage = 5;
    let page = data.selected + 1;
    const from = (page - 1) * perPage;
    const to = (page - 1) * perPage + perPage - 1;

    await getAllUsers(from, to);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>AllUsersView</h2>
          <Row className="justify-content-center">
            <Col md={6} lg={3}>
              {allUsers.map((item) => (
                <div key={item.id}>
                  <Contact
                    firstName={item.firstName}
                    lastName={item.lastName}
                  />

                  <Button
                    onClick={() =>
                      addContact({ owner: userId, contact: item.user })
                    }
                    variant="info"
                    disabled={disablingButton(item.user)}
                  >
                    Add to contacts
                  </Button>
                </div>
              ))}
            </Col>
          </Row>
        </>
      )}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={50}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-5"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previouslassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.users.allProfiles,
  userId: state.auth.id,
  addedContacts: state.users.addedContact,
  isLoading: state.users.isLoading,
});

const mapDispatchToProps = {
  getAllUsers: usersOperations.getAllProfiles,
  addContact: usersOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersView);
