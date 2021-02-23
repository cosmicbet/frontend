import React from "react";
import { Grid } from "react-styled-flexboxgrid";

import MainLayout from "../layouts/main";
import BlockGamesComponent from "../components/blockGames";
import BlockHeroComponent from "../components/blockHero";
import BlockBackground from "../components/blockBackground";

import { games } from "../constants/games";
import { offers } from "../constants/offers";

import * as S from "../layouts/styled";

//TODO move styles to separate file

const IndexPage = () => {
  return (
    <MainLayout>
      <BlockBackground />
      <Grid>
        <S.Section>
          <BlockHeroComponent />
          <h3>Explore our games</h3>
          <BlockGamesComponent items={games} />
        </S.Section>

        <S.Section>
          <h3>Offers</h3>
          <BlockGamesComponent items={offers} />
        </S.Section>
      </Grid>
    </MainLayout>
  );
};

export default IndexPage;
