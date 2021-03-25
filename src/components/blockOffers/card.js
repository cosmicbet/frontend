import React from "react";
import * as S from "./styled";
import { FormattedMessage } from "react-intl";

const OfferCardComponent = ({ children, description, type }) => {
  return (
    <S.Card $type={type}>
      <S.Title>
        <FormattedMessage id={description} />
      </S.Title>
      <S.Content>{children}</S.Content>
    </S.Card>
  );
};

export default OfferCardComponent;
