import React from "react";
import { FormattedMessage } from "react-intl";
import { Row, Col } from "react-styled-flexboxgrid";

import { chainConfig } from "../../utils/keplr";
import * as S from "./styled";

import { StyledLink } from "../../layouts/styled";

const BlockHeroComponent = ({ githubLedgerHref }) => {
  return (
    <Row middle="xs">
      <Col xs={12} md={6}>
        <S.Title>
          Cosmic Casino <br />
          <S.AccentText>Lottery</S.AccentText>
        </S.Title>
      </Col>
      <Col xs={12} md={6}>
        <S.Description>
          <p>
            <FormattedMessage
              id="LOTTERY_DESCRIPTION"
              values={{ amount: 10, currency: chainConfig.coinDenom }}
            />
          </p>
          <StyledLink href={githubLedgerHref} rel="noreferrer" target="_blank">
            <span>
              <FormattedMessage id="LEARN_MORE" />
            </span>
          </StyledLink>
        </S.Description>
      </Col>
    </Row>
  );
};

export default BlockHeroComponent;
