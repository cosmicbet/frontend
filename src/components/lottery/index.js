import React, { useState } from "react";
import StatsComponent from "./stats";
import BuyFormComponent from "./buyform";

const LotteryComponent = ({ onBuyClickHandler }) => {
  //TODO get balance
  const [balance] = useState(100);
  return (
    <>
      <StatsComponent balance={balance} />
      <hr />
      <BuyFormComponent currentBalance={balance} onClick={onBuyClickHandler} />
    </>
  );
};

export default LotteryComponent;
