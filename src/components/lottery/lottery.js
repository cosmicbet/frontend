import React, { useEffect, useState } from "react";
import { Row, Col } from "react-styled-flexboxgrid";
import { FormattedMessage } from "react-intl";

import StatsComponent from "./stats";
import BuyFormComponent from "./buyform";
import BlockHeroComponent from "./blockHero";

import { Divider } from "../../layouts/styled";
import { setupLotteryQueryService } from "../../utils/lottery";
import { useInterval } from "../../hooks";
import { formatCoin } from "../../utils/cosmic-casino";
import * as S from "./styled";

const LotteryComponent = ({ onBuyClickHandler, githubLedgerHref }) => {
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
    <S.Wrapper>
      <BlockHeroComponent
        githubLedgerHref={githubLedgerHref}
        nextExtraction={nextExtraction}
      />
      <Divider />
      <S.Group>
        <Row>
          <Col xs={12} md={6}>
            <S.Card>
              <S.Countdown date={nextExtraction} />
              <S.HintText>
                <FormattedMessage id="NEXT_ROUND" />
              </S.HintText>
              <S.AccentTitle>{formatCoin(prize)}</S.AccentTitle>
              <S.HintText>
                <FormattedMessage id="PRIZE_POT" />
              </S.HintText>
            </S.Card>

            <S.Card>
              <StatsComponent
                nextExtraction={nextExtraction}
                participants={participants}
                ticketsSold={ticketsSold}
              />
            </S.Card>
          </Col>

          <Col xs={12} md={6}>
            <S.Card>
              <BuyFormComponent onClick={onBuyClickHandler} />
            </S.Card>
          </Col>
        </Row>
      </S.Group>
    </S.Wrapper>
  );
};

export default LotteryComponent;
