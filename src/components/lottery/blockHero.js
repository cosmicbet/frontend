import React from "react";
import { FormattedMessage } from "react-intl";

import { chainConfig } from "../../utils/keplr";
import * as S from "./styled";

import { StyledLink } from "../../layouts/styled";

const BlockHeroComponent = ({ githubLedgerHref }) => {
  return (
    <>
      <S.Title>Cosmic Casino: Lottery</S.Title>
      <S.Description>
        <FormattedMessage
          id="LOTTERY_DESCRIPTION"
          values={{ amount: 10, currency: chainConfig.coinDenom }}
        />{" "}
        <br />
        <StyledLink href={githubLedgerHref} rel="noreferrer" target="_blank">
          <span>
            <FormattedMessage id="LEARN_MORE" />
          </span>
        </StyledLink>
      </S.Description>
    </>
  );
};

export default BlockHeroComponent;
