import ReactPaginate from "react-paginate";

const Pagination = ({ contentLength, handlePageClick, perPage }) => {
  let alContentLength = Number(Math.ceil(contentLength.slice(-3)));
  let paginationLength = 0;
  paginationLength = alContentLength / perPage;

  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={paginationLength}
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

export default Pagination;
