import React, { useState } from "react";
import { Grid } from "react-styled-flexboxgrid";

import MainLayout from "../layouts/main";
import BlockGamesComponent from "../components/blockGames";
import BlockHeroComponent from "../components/blockHero";
import BlockBackground from "../components/blockBackground";

import * as S from "../layouts/styled";
import MainBackground from "../images/bg.jpg";
import { useInterval } from "../hooks";

const TestPage = () => {
  const [p, setP] = useState(0);

  useInterval(() => {
    setP(p + 1);
  }, 1000);
  return (
    <MainLayout>
      <BlockBackground backgroundImage={MainBackground} />
      <Grid>
        <S.Section>Test {p} </S.Section>

        <S.Section></S.Section>
      </Grid>
    </MainLayout>
  );
};

export default TestPage;
