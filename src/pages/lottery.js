import React, { useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/main";
import LotteryComponent from "../components/lottery";
import { checkExtensionAndBrowser, suggestChain } from "../utils/keplr";
import { buyTickets } from "../utils/lottery";

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
  const buy = async (ticketNumber) => {
    if (!checkExtensionAndBrowser()) {
      alert("Please install Keplr extension and use Google Chrome");
      return;
    }
    try {
      // suggest chain
      await suggestChain();

      const result = await buyTickets(ticketNumber);

      if (result.transactionHash !== undefined) {
        alert("OK! Tx hash: " + result.transactionHash);
      } else {
        alert("Error :(");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MainLayout>
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
      <LotteryComponent onBuyClickHandler={buy} />
      <hr />
      <h3>Latest Draws</h3>
      <table border="1">
        <thead>
          <tr>
            <td>Winner</td>
            <td>Jackpot</td>
            <td>End time</td>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </MainLayout>
  );
};

export default LotteryPage;
