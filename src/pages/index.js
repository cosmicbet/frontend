import React from "react";
import { Grid } from "react-styled-flexboxgrid";

import MainLayout from "../layouts/main";
import BlockGamesComponent from "../components/blockGames";
import BlockHeroComponent from "../components/blockHero";
import BlockBackground from "../components/blockBackground";

import { games } from "../constants/games";

//TODO move styles to separate file

const IndexPage = () => {
  return (
    <MainLayout>
      <BlockBackground />
      <Grid>
        <BlockHeroComponent />
        <h3>Explore our games</h3>
        <BlockGamesComponent items={games} />
      </Grid>
    </MainLayout>
  );
};

export default IndexPage;
