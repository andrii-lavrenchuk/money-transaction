import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = ({ contentLength, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={contentLength}
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
  );
};

Pagination.propTypes = {
  contentLength: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func,
};

export default Pagination;
