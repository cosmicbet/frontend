import React from "react";
import Layout from "../components/layout";
import BuyForm from "../components/lottery/buyform";
import Stats from "../components/lottery/stats";
import { checkExtensionAndBrowser, suggestChain } from "../utils/keplr";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const LotteryPage = () => {
  // Load Keplr
  const buy = async () => {
    if (!checkExtensionAndBrowser()) {
      alert("Please install Keplr extension and use Google Chrome");
      return;
    }

    // suggest chain
    await suggestChain();
    console.log("Load");
  };

  return (
    <Layout>
      <Title>Cosmic Casino: Lottery</Title>

      <Description>
        Buy a ticket for 10 FCHS, wait for the draw. One lucky winner takes all
        the jackpot!{" "}
        <a
          href="https://github.com/cosmicbet/ledger"
          rel="noreferrer"
          target="_blank"
        >
          Learn more
        </a>
      </Description>

      <br />
      <hr />

      <Stats />

      <hr />

      <BuyForm onClick={(e) => buy()} />
    </Layout>
  );
};

export default LotteryPage;
