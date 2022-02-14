import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" variant="info" />
    </div>
  );
};
export default Loader;
