import React, { useState } from "react";
import { Grid } from "react-styled-flexboxgrid";

import MainLayout from "../layouts/main";

import * as S from "../layouts/styled";
import { useInterval } from "../hooks";

const TestPage = () => {
  const [p, setP] = useState(0);

  useInterval(() => {
    setP(p + 1);
  }, 1000);
  return (
    <MainLayout innerPage>
      <Grid>
        <S.Section>Test {p} </S.Section>
        <S.Section></S.Section>
      </Grid>
    </MainLayout>
  );
};

export default TestPage;
