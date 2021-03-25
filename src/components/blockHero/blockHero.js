import React from "react";
import ScrollIcon from "../../images/scroll-icn.svg";

import * as S from "./styled";
import { Grid, Row, Col } from "../../layouts/grid";
import { Title } from "../../layouts/styled";

const BlockHeroComponent = () => {
  return (
    <S.Wrapper>
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <Title>Cosmic Casino</Title>
            <S.Description>
              The first Cosmos Zone Blockchain that aims at providing a fair and
              transparent place where users are able to gamble whatever tokens
              they possess.
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
