import React from "react";

import * as S from "./styled";

const BlockBackgroundComponent = ({ backgroundImage }) => {
  return (
    <S.Wrapper image={backgroundImage}>
      <S.Stars />
      <S.StarsSecond />
    </S.Wrapper>
  );
};

export default BlockBackgroundComponent;
