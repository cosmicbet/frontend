import React from "react";
import { chainConfig } from "../../utils/keplr";
import * as S from "./styled";

const BlockHeroComponent = ({ githubLedgerHref }) => {
  return (
    <>
      <S.Title>Cosmic Casino: Lottery</S.Title>
      <S.Description>
        Buy a ticket for 10 {chainConfig.coinDenom}, wait for the draw. One
        lucky winner takes all the jackpot!{" "}
        <a href={githubLedgerHref} rel="noreferrer" target="_blank">
          Learn more
        </a>
      </S.Description>
    </>
  );
};

export default BlockHeroComponent;
