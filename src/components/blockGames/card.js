import React from "react";
import { Card } from "./styled";

const GameCardComponent = ({ children, title, description }) => {
  return (
    <Card>
      <b>{title}</b>
      <p>{description}</p>
      {children}
    </Card>
  );
};

export default GameCardComponent;
