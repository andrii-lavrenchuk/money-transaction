import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomTable = ({ transactions }) => {
  return (
    <Table striped bordered hover variant="info">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, index) => (
          <tr key={index}>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

CustomTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default CustomTable;
