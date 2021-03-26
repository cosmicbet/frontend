import React from "react";
import { FormattedMessage } from "react-intl";

import * as S from "./styled";
import { Grid, Row, Col } from "../../layouts/grid";
import { Title } from "../../layouts/styled";

import ScrollIcon from "../../images/scroll-icn.svg";

const BlockHeroComponent = () => {
  return (
    <S.Wrapper>
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <Title>Cosmic Casino</Title>
            <S.Description>
              <FormattedMessage id="HOME_HERO_DISCLAIMER" />
            </S.Description>

            <S.Icon>
              <img src={ScrollIcon} alt="scroll down" />
            </S.Icon>
          </Col>
        </Row>
      </Grid>
    </S.Wrapper>
  );
};

export default BlockHeroComponent;
