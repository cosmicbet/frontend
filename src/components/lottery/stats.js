import React from "react";
import * as S from "./styled";

const StatsComponent = ({
  balance,
  nextExtraction,
  ticketsSold,
  participants,
  prize,
}) => {
  return (
    <S.Container>
      <S.Row>Your Balance: {balance} FCHS</S.Row>
      <S.Row>Next extraction: {nextExtraction.toLocaleString()}</S.Row>
      <S.Row>Total tickets sold: {ticketsSold}</S.Row>
      <S.Row>Participants: {participants}</S.Row>
      <S.Row>Prize: {prize}</S.Row>
    </S.Container>
  );
};

export default StatsComponent;
