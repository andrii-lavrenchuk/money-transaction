import { Table } from "react-bootstrap";

const CustomTable = ({ fromMe }) => {
  return (
    <Table striped bordered hover variant="info">
      <thead>
        <tr>
          <th>From me</th>
          <th>To me</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* {fromMe.map((item) => (
          <tr key={item.from}>
            <td>Me</td>
            <td>to</td>
            <td>{item.amount}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  );
};

export default CustomTable;
