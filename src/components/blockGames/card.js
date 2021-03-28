import React from "react";
import { FormattedMessage } from "react-intl";

import * as S from "./styled";

const GameCardComponent = ({
  children,
  title,
  bgGradient,
  description,
  type,
  image,
}) => {
  return (
    <S.Card $type={type}>
      <S.Image style={bgGradient}>
        {image && <img src={image} alt={title} />}
      </S.Image>

      <S.Inner>
        <h4><FormattedMessage id={title} /></h4>
        <p><FormattedMessage id={description} /></p>

        <S.Content>{children}</S.Content>
      </S.Inner>
    </S.Card>
  );
};

export default GameCardComponent;
