import React from "react";
import * as S from "./styled";

const StatsComponent = ({
  nextExtraction,
  ticketsSold,
  participants,
  prize,
}) => {
  return (
    <S.Container>
      <S.Row>
        <span>Next extraction:</span>
        <S.AccentText>{nextExtraction.toLocaleString()}</S.AccentText>
      </S.Row>
      <S.Row>
        <span>Total tickets sold:</span>
        <S.AccentText>{ticketsSold}</S.AccentText>
      </S.Row>
      <S.Row>
        <span>Participants:</span> <S.AccentText>{participants}</S.AccentText>
      </S.Row>
    </S.Container>
  );
};

export default StatsComponent;
