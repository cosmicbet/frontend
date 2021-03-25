import React from "react";
import styled from "styled-components";

import MainLayout from "../layouts/main";
import * as S from "../layouts/styled";
import { Grid, Row, Col } from "../layouts/grid";

const Title = styled.h1`
  text-align: center;
`;

const Content = styled.p``;

const DisclaimerPage = () => {
  return (
    <MainLayout innerPage>
      <S.Content $topIndent>
        <Grid>
          <Row center="xs">
            <Col xs={12} md={8}>
              <Title>Disclaimer</Title>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                bibendum nec odio eget semper. Aenean non elit sed nunc eleifend
                gravida. Integer justo quam, lobortis non pretium eu, efficitur
                non dolor. Nullam hendrerit diam sed felis feugiat euismod.
                Suspendisse pellentesque venenatis leo id vulputate. Donec
                volutpat, sapien vitae varius molestie, metus est aliquam erat,
                consectetur dapibus ante enim eget magna. Nunc egestas nec ex
                vel convallis. Nunc neque nulla, molestie ut imperdiet id,
                iaculis ut quam. Proin viverra quam lectus, ut accumsan ex
                varius at. Maecenas sit amet turpis eleifend, eleifend leo
                vitae, dignissim dui. Pellentesque molestie, diam nec convallis
                luctus, odio quam eleifend nibh, eget finibus tortor tortor nec
                turpis. Curabitur facilisis lectus sit amet justo viverra
                cursus. Quisque eleifend felis quis mi varius placerat. In
                libero metus, finibus ac posuere et, venenatis a ipsum. Etiam
                rhoncus tempus elit ut aliquam. Aliquam tincidunt tellus id
                molestie sagittis. Nulla imperdiet justo justo, sed viverra nibh
                bibendum in. Curabitur dignissim euismod augue, sit amet
                sagittis ante placerat vitae. Maecenas quis arcu tincidunt,
                aliquet neque non, congue purus. Curabitur sem turpis, bibendum
                quis faucibus id, congue eget neque. Mauris rutrum consequat
                lacus, consequat vestibulum ante luctus in. Donec eu dolor nec
                ex molestie molestie. Integer ut justo dictum nibh tempor
                condimentum eu ac justo. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Integer
                finibus ex vel quam auctor placerat. Mauris vulputate ligula
                quam, eu scelerisque dolor aliquam nec. Proin vel sem erat.
                Pellentesque lorem ex, pulvinar id tincidunt quis, volutpat et
                felis. Phasellus at sapien blandit, pharetra orci varius, congue
                justo. Maecenas congue mollis nunc, mollis iaculis augue
                suscipit quis. Sed lacinia tellus sit amet nunc laoreet pretium.
                Suspendisse non neque volutpat, congue nunc quis, faucibus erat.
                Praesent eros tellus, elementum et mattis at, fringilla
                venenatis nisi. Suspendisse id est et nulla porttitor rutrum.
                Donec facilisis, sem at interdum finibus, justo urna sodales
                nisl, vel facilisis nisl augue in nunc. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Morbi vel volutpat velit.
                Etiam turpis lorem, placerat a augue interdum, sodales porttitor
                quam. Nullam
              </Content>
            </Col>
          </Row>
        </Grid>
      </S.Content>
    </MainLayout>
  );
};

export default DisclaimerPage;
