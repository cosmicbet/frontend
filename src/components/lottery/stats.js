import React from "react";
import { FormattedMessage } from "react-intl";

import * as S from "./styled";

const StatsComponent = ({ nextExtraction, ticketsSold, participants }) => {
  return (
    <S.Container>
      <S.Row>
        <span>
          <FormattedMessage id="STATS_NEXT_EXTRACTION" />
        </span>
        <S.AccentText>{nextExtraction.toLocaleString()}</S.AccentText>
      </S.Row>
      <S.Row>
        <span>
          <FormattedMessage id="STATS_TOTAL_SOLD" />
        </span>
        <S.AccentText>{ticketsSold}</S.AccentText>
      </S.Row>
      <S.Row>
        <span>
          <FormattedMessage id="STATS_PARTICIPANTS" />
        </span>{" "}
        <S.AccentText>{participants}</S.AccentText>
      </S.Row>
    </S.Container>
  );
};

export default StatsComponent;
