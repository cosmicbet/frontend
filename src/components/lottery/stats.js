import React from "react";
import Countdown from "react-countdown";
import { Container, Row } from "./styled";

const StatsComponent = ({ balance }) => {
  const ticketSold = 12345;
  const nextExtraction = Date.now() + 2 * 60 * 60 * 1000;

  return (
    <Container>
      <Row>Your Balance: {balance} FCHS</Row>
      <Row>
        Next extraction in: <Countdown date={nextExtraction} />
      </Row>
      <Row>Total tickets sold: {ticketSold}</Row>
    </Container>
  );
};

export default StatsComponent;
