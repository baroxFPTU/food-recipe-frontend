import React from 'react';
import Table from 'react-bootstrap/Table';

// headers, children
const ActionTable = ({ headers, children, onRemove, ...props }) => {
  return (
    <Table striped bordered hover {...props}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default ActionTable;
