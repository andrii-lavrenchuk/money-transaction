import { Table } from "react-bootstrap";

const CustomTable = ({ transactions }) => {
  return (
    <Table striped bordered hover variant="info">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, index) => (
          <tr key={index}>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
