import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MainLayout from "../layouts/main";

//TODO move styles to separate file
const Logo = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
`;

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`;

const GameCard = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  margin: 0 10px;
  max-width: 300px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  a {
    color: white;
    margin-top: auto;
  }
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
      <GamesContainer>
        <GameCard>
          <b>Airdrop</b>
          <p>Are you an ATOM or TERRA Hodler? Claim your airdrop now!</p>
          <Link to="/airdrop">Claim</Link>
        </GameCard>
        <GameCard>
          <b>Lottery</b>
          <p>Winner takes all style lottery</p>
          <Link to="/lottery">Try now</Link>
        </GameCard>
      </GamesContainer>
    </MainLayout>
  );
};

export default IndexPage;
