import { Table } from "react-bootstrap";

const CustomTable = () => {
  return (
    <Table striped bordered hover variant="info">
      <thead>
        <tr>
          <th>#</th>
          <th>From me</th>
          <th>To user</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomTable;
