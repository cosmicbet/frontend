import React, { useEffect, useState } from "react";
import { Grid } from "react-styled-flexboxgrid";

import { checkExtensionAndBrowser, suggestChain } from "../utils/keplr";
import { buyTickets, setupLotteryQueryService } from "../utils/lottery";
import { useSourceSiteMetadata } from "../hooks";

import LotteryComponent from "../components/lottery";
import TableComponent from "../components/table";
import BlockBackground from "../components/blockBackground";

import MainLayout from "../layouts/main";
import { Divider } from "../layouts/styled";
import { formatCoin } from "../utils/cosmic-casino";

const tableHeaders = {
  winner: "Winner",
  jackpot: "Jackpot",
  endTime: "End time",
};

const NOT_AVAILABLE = "N/A";

const LotteryPage = () => {
  const { githubLedger } = useSourceSiteMetadata();
  const [pastDraws, setPastDraws] = useState([]);

  useEffect(() => {
    const fetchBlockchainData = async () => {
      try {
        const LotteryService = await setupLotteryQueryService();
        //TODO refactor
        const response = await LotteryService.PastDraws({
          offset: 1,
          limit: 100,
          countTotal: true,
        });

        if (response.draws.length > 0) {
          const data = response.draws.map((item) => {
            return {
              winner: item?.winningTicket?.owner || NOT_AVAILABLE,
              jackpot: formatCoin(item?.draw?.prize),
              endTime: item?.draw?.endTime.toLocaleString() || NOT_AVAILABLE,
            };
          });
          setPastDraws(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchBlockchainData();
  }, []);

  // Load Keplr
  const buy = async (ticketNumber, wallet) => {
    if (!checkExtensionAndBrowser()) {
      alert("Please install Keplr extension and use Google Chrome");
      return;
    }
    try {
      // suggest chain
      await suggestChain();

      const result = await buyTickets(ticketNumber, wallet);

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
      <BlockBackground />
      <Grid>
        <LotteryComponent
          onBuyClickHandler={buy}
          githubLedgerHref={githubLedger}
        />
        <Divider />
        <h3>Latest Draws</h3>
        <TableComponent columns={tableHeaders} data={pastDraws} />
      </Grid>
    </MainLayout>
  );
};

export default LotteryPage;
