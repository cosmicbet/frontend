import React from "react";
import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";
import MainLayout from "../layouts/main";
import LotteryComponent from "../components/lottery";
import { checkExtensionAndBrowser, suggestChain } from "../utils/keplr";
import { buyTickets } from "../utils/lottery";
import { Divider } from "../layouts/styled";
import TableComponent from "../components/table";

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const tableHeaders = {
  winner: "Winner",
  jackpot: "Jackpot",
  endTime: "End time",
};

const dummyColumnData = [
  {
    winner: "rack1juczud9nep06t0khghvm643hf9usw45rhchlj2",
    jackpot: "12348839 FCHS",
    endTime: "2020-02-16 05:00:00",
  },
  {
    winner: "rack1juczud9nep06t0khghvm643hf9usw45rhchlj3",
    jackpot: "12348840 FCHS",
    endTime: "2020-02-16 06:00:00",
  },
  {
    winner: "rack1juczud9nep06t0khghvm643hf9usw45rhchlj4",
    jackpot: "12348841 FCHS",
    endTime: "2020-02-16 07:00:00",
  },
];

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
      <Grid>
        <Title>Cosmic Casino: Lottery</Title>
        <Description>
          Buy a ticket for 10 FCHS, wait for the draw. One lucky winner takes
          all the jackpot!{" "}
          <a
            href="https://github.com/cosmicbet/ledger"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </Description>
        <Divider />
        <LotteryComponent onBuyClickHandler={buy} />
        <Divider />
        <h3>Latest Draws</h3>
        <TableComponent columns={tableHeaders} data={dummyColumnData} />
      </Grid>
    </MainLayout>
  );
};

export default LotteryPage;
