import React, { useState } from "react";
import { Row, Col } from "react-styled-flexboxgrid";
import StatsComponent from "./stats";
import BuyFormComponent from "./buyform";

const LotteryComponent = ({ onBuyClickHandler }) => {
  //TODO get balance
  const [balance] = useState(100);
  return (
    <Row between="xs" >
      <Col>
        <StatsComponent balance={balance} />
      </Col>
      <Col>
        <BuyFormComponent
          currentBalance={balance}
          onClick={onBuyClickHandler}
        />
      </Col>
    </Row>
  );
};

export default LotteryComponent;
