import React from "react";
import { Grid } from "react-styled-flexboxgrid";

import BlockBackground from "../blockBackground";
import MainBackground from "../../images/bg.jpg";

import * as S from "./styled";
import Button from "../button";

const BlockHeroComponent = () => {
  return (
    <S.Wrapper>
      <BlockBackground backgroundImage={MainBackground} />
      <Grid>
        <S.Logo>
          Cosmic <br />
          Casino
        </S.Logo>
        <S.Description>
          The first Cosmos Zone Blockchain that aims at providing a fair and
          transparent place where users are able to gamble whatever tokens they
          possess.
        </S.Description>
        <Button as="a" href="#content" size="lg">
          Explore
        </Button>
      </Grid>
    </S.Wrapper>
  );
};

export default BlockHeroComponent;
