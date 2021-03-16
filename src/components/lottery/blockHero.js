import React from "react";
import { chainConfig } from "../../utils/keplr";
import * as S from "./styled";

const BlockHeroComponent = ({ githubLedgerHref, nextExtraction }) => {
  return (
    <>
      <S.Title>Cosmic Casino: Lottery</S.Title>
      <S.Countdown date={nextExtraction} />
      <S.HintText>till the next round</S.HintText>
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
