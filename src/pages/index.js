import React from "react";
import { Grid } from "react-styled-flexboxgrid";

import MainLayout from "../layouts/main";
import BlockGamesComponent from "../components/blockGames";
import BlockHeroComponent from "../components/blockHero";

import { games } from "../constants/games";
import { offers } from "../constants/offers";

import * as S from "../layouts/styled";

const IndexPage = () => {
  return (
    <MainLayout>
      <BlockHeroComponent />

      <S.Content id="content">
        <Grid>
          <S.Section>
            <h3>Explore our games</h3>
            <BlockGamesComponent items={games} />
          </S.Section>

          <S.Section>
            <h3>Offers</h3>
            <BlockGamesComponent items={offers} />
          </S.Section>
        </Grid>
      </S.Content>
    </MainLayout>
  );
};

export default IndexPage;
