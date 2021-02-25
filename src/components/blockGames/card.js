import React from "react";
import * as S from "./styled";

const GameCardComponent = ({ children, title, description, type, image }) => {
  return (
    <S.Card $type={type}>
      {image && (
        <S.Image>
          <img src={image} alt={title} />
        </S.Image>
      )}
      <S.Inner>
        <h4>{title}</h4>
        <p>{description}</p>

        <S.Content>{children}</S.Content>
      </S.Inner>
    </S.Card>
  );
};

export default GameCardComponent;
