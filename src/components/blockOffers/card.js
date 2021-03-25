import React from "react";
import * as S from "./styled";

const OfferCardComponent = ({ children, description, type }) => {
  return (
    <S.Card $type={type}>
      <S.Title>{description}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Card>
  );
};

export default OfferCardComponent;
