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
      <hr />
      <h3>Latest Draws</h3>
      <table border="1">
        <tr>
          <td>Winner</td>
          <td>Jackpot</td>
          <td>End time</td>
        </tr>
        <tr>
          <td>rack1juczud9nep06t0khghvm643hf9usw45rhchlj2</td>
          <td>12348839 FCHS</td>
          <td>2020-02-16 05:00:00</td>
        </tr>
        <tr>
          <td>rack1juczud9nep06t0khghvm643hf9usw45rhchlj2</td>
          <td>12348839 FCHS</td>
          <td>2020-02-16 05:00:00</td>
        </tr>
        <tr>
          <td>rack1juczud9nep06t0khghvm643hf9usw45rhchlj2</td>
          <td>12348839 FCHS</td>
          <td>2020-02-16 05:00:00</td>
        </tr>
      </table>
    </Layout>
  );
};

export default LotteryPage;
