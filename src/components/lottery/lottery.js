import React, { useState } from "react";
import StatsComponent from "./stats";
import BuyFormComponent from "./buyform";
import { Divider } from "../../layouts/styled";

const LotteryComponent = ({ onBuyClickHandler }) => {
  //TODO get balance
  const [balance] = useState(100);
  return (
    <>
      <StatsComponent balance={balance} />
      <Divider />
      <BuyFormComponent currentBalance={balance} onClick={onBuyClickHandler} />
    </>
  );
};

export default LotteryComponent;
