import React from "react";
import { Table, Overflow } from "./styled";

const TableComponent = ({ columns, data }) => {
  const objectValuesToArr = (obj) =>
    Object.keys(obj).map((objKey) => obj[objKey]);
  const objectKeysToArr = (obj) => Object.keys(obj).map((objKey) => objKey);

  const renderRow = (item, index) => (
    <tr key={index}>
      {objectKeysToArr(item).map((itemProperty, index) => (
        <td key={index}>{item[itemProperty]}</td>
      ))}
    </tr>
  );

  return (
    <Overflow>
      <Table>
        <thead>
          <tr>
            {objectValuesToArr(columns).map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
      </Table>
    </Overflow>
  );
};

export default TableComponent;
