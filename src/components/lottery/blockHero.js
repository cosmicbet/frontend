import React from "react";
import { chainConfig } from "../../utils/keplr";
import * as S from "./styled";

import { StyledLink } from "../../layouts/styled";

const BlockHeroComponent = ({ githubLedgerHref }) => {
  return (
    <>
      <S.Title>Cosmic Casino: Lottery</S.Title>
      <S.Description>
        Buy a ticket for 10 {chainConfig.coinDenom}, wait for the draw. <br />
        One lucky winner takes all the jackpot! <br />
        <StyledLink href={githubLedgerHref} rel="noreferrer" target="_blank">
          <span> Learn more</span>
        </StyledLink>
      </S.Description>
    </>
  );
};

export default BlockHeroComponent;
