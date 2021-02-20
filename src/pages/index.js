import React from "react";
import styled from "styled-components";
import MainLayout from "../layouts/main";
import BlockGamesComponent from "../components/blockGames";
import { games } from "../constants/games";

//TODO move styles to separate file
const Logo = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
`;

const IndexPage = () => {
  return (
    <MainLayout>
      <Logo>Cosmic Casino</Logo>
      <Description>
        The first Cosmos Zone Blockchain that aims at providing a fair and
        transparent place where users are able to gamble whatever tokens they
        possess.
      </Description>
      <h3>Explore our games</h3>
      <BlockGamesComponent items={games} />
    </MainLayout>
  );
};

export default IndexPage;
