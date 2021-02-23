import React, { useEffect, useState } from "react";
// import Countdown from "react-countdown";
import { useInterval } from "../../utils/hooks";
import { formatPrize, setupLotteryQueryService } from "../../utils/lottery";
import { Container, Row } from "./styled";

const StatsComponent = ({ balance }) => {
  let LotteryService = null;

  const [ticketsSold, setTicketsSold] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [prize, setPrize] = useState([]);
  const [nextExtraction, setNextExtraction] = useState(new Date());

  // Load stats on page load
  useEffect(() => {
    updateStats();
  }, []);

  // Update stats every minute
  useInterval(() => {
    updateStats();
  }, 60000);

  const updateStats = async () => {
    LotteryService = await setupLotteryQueryService();
    const response = await LotteryService.NextDraw();
    const draw = response.draw;

    setTicketsSold(draw.ticketsSold);
    setParticipants(draw.participants);

    setNextExtraction(draw.endTime);
    setPrize(draw.prize);
  };

  return (
    <Container>
      <Row>Your Balance: {balance} FCHS</Row>
      <Row>Next extraction: {nextExtraction.toLocaleString()}</Row>
      <Row>Total tickets sold: {ticketsSold}</Row>
      <Row>Participants: {participants}</Row>
      <Row>Prize: {formatPrize(prize)}</Row>
    </Container>
  );
};

export default StatsComponent;
