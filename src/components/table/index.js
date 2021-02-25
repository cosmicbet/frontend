import React from "react";

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
    <table border="1">
      <thead>
        <tr>
          {objectValuesToArr(columns).map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
    </table>
  );
};

export default TableComponent;
