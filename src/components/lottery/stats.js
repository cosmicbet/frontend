import React from "react";
import { FormattedMessage } from "react-intl";
import { Row, Col } from "react-styled-flexboxgrid";

import * as S from "./styled";

const StatsComponent = ({ nextExtraction, ticketsSold, participants }) => {
  return (
    <S.Container>
      <Row>
        <Col>
          <S.ValuesText>{nextExtraction.toLocaleString()}</S.ValuesText>
          <S.HintText>
            <FormattedMessage id="STATS_NEXT_EXTRACTION" />
          </S.HintText>
        </Col>
        <Col>
          <S.ValuesText>{ticketsSold}</S.ValuesText>
          <S.HintText>
            <FormattedMessage id="STATS_TOTAL_SOLD" />
          </S.HintText>
        </Col>
        <Col>
          <S.ValuesText>{participants}</S.ValuesText>
          <S.HintText>
            <FormattedMessage id="STATS_PARTICIPANTS" />
          </S.HintText>
        </Col>
      </Row>
    </S.Container>
  );
};

export default StatsComponent;
