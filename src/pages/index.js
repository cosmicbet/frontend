import React from "react";

import MetadataProvider from "../providers/metadata";

import MainLayout from "../layouts/main";
import FooterComponent from "../components/footer";
import BlockGamesComponent from "../components/blockGames";
import BlockOffersComponent from "../components/blockOffers";
import BlockHeroComponent from "../components/blockHero";
import Details from "../components/details";

import { games } from "../constants/games";
import { offers } from "../constants/offers";

import * as S from "../layouts/styled";
import { Grid, Row, Col } from "../layouts/grid";

const IndexPage = () => {
  return (
    <MainLayout>
      <Details />

      <S.Content id="lead">
        <BlockHeroComponent />
        <MetadataProvider>
          <FooterComponent />
        </MetadataProvider>
      </S.Content>

      <S.Content id="games">
        <Grid fluid>
          <Row center="xs">
            <Col xs={12} sm={10}>
              <Row between="xs">
                <Col xs={12} md={5}>
                  <S.Title as="h2">
                    Explore
                    <br />
                    our games
                  </S.Title>
                </Col>
                <Col xs={12} md={6}>
                  <S.Section>
                    <BlockOffersComponent items={offers} />
                  </S.Section>

                  <S.Section>
                    <BlockGamesComponent items={games} />
                  </S.Section>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </S.Content>
    </MainLayout>
  );
};

export default IndexPage;
