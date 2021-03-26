import React from "react";

const ModalInfoComponent = ({ infoModalData }) => {
  const { type, text } = infoModalData;
  return (
    <div style={{ color: "black" }}>
      <h3>{text}</h3>
    </div>
  );
};

export default ModalInfoComponent;
