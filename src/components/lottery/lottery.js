import React, { useEffect, useState } from "react";

import StatsComponent from "./stats";
import BuyFormComponent from "./buyform";
import BlockHeroComponent from "./blockHero";

import { Divider } from "../../layouts/styled";
import { formatPrize, setupLotteryQueryService } from "../../utils/lottery";
import { useInterval } from "../../hooks";

const LotteryComponent = ({ onBuyClickHandler, githubLedgerHref }) => {
  //TODO get balance
  const [balance] = useState(100);
  const [ticketsSold, setTicketsSold] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [prize, setPrize] = useState([]);
  const [nextExtraction, setNextExtraction] = useState(
    new Date(new Date().getTime() + 60 * 60 * 24 * 1000)
  );

  const updateStats = async () => {
    const LotteryService = await setupLotteryQueryService();
    const response = await LotteryService.NextDraw();
    const draw = response.draw;

    setTicketsSold(draw.ticketsSold);
    setParticipants(draw.participants);
    setNextExtraction(draw.endTime);
    setPrize(draw.prize);
  };

  // Load stats on page load
  useEffect(() => {
    updateStats();
  }, []);

  // Update stats every 10 sec
  useInterval(() => {
    updateStats();
  }, 10000);

  return (
    <>
      <BlockHeroComponent
        githubLedgerHref={githubLedgerHref}
        nextExtraction={nextExtraction}
      />
      <Divider />
      <BuyFormComponent currentBalance={balance} onClick={onBuyClickHandler} />
      <Divider />
      <StatsComponent
        balance={balance}
        nextExtraction={nextExtraction}
        participants={participants}
        prize={formatPrize(prize)}
        ticketsSold={ticketsSold}
      />
    </>
  );
};

export default LotteryComponent;
