import React from "react";
import { FormattedMessage } from "react-intl";

import MetadataProvider from "../providers/metadata";

import MainLayout from "../layouts/main";
import FooterComponent from "../components/footer";
import BlockGamesComponent from "../components/blockGames";
import BlockOffersComponent from "../components/blockOffers";
import BlockHeroComponent from "../components/blockHero";
import Details from "../components/details";

import { games } from "../constants/games";
import { offers } from "../constants/offers";
import ReactFullpage from "@fullpage/react-fullpage";

import * as S from "../layouts/styled";
import { Grid, Row, Col } from "../layouts/grid";

const IndexPage = () => {
  return (
    <MainLayout>
      <Details />

      <ReactFullpage
        licenseKey={"B8A46C55-45634BDF-A3DCB062-59445BA6"}
        verticalCentered={false}
        autoScrolling={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <S.Content id="lead" className="section">
                <BlockHeroComponent />
                <MetadataProvider>
                  <FooterComponent />
                </MetadataProvider>
              </S.Content>

              <S.Content id="games" className="section fp-auto-height">
                <Grid fluid>
                  <S.Section>
                    <Row center="xs">
                      <Col xs={12} sm={10}>
                        <Row between="xs">
                          <Col xs={12} md={6}>
                            <S.Title as="h2" style={{ maxWidth: "25rem" }}>
                              <FormattedMessage id="EXPLORE_OUR_GAMES" />
                            </S.Title>
                          </Col>
                          <Col xs={12} md={5}>
                            <BlockOffersComponent items={offers} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </S.Section>

                  <S.Section>
                    <Row center="xs">
                      <Col xs={12} sm={10}>
                        <BlockGamesComponent items={games} />
                      </Col>
                    </Row>
                  </S.Section>
                </Grid>
              </S.Content>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </MainLayout>
  );
};

export default IndexPage;
