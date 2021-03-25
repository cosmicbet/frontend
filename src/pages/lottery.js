import React, { useEffect, useState } from "react";
import { Grid, Row, Col } from "../layouts/grid";
import { FormattedMessage } from "react-intl";

import { checkExtensionAndBrowser, suggestChain } from "../utils/keplr";
import { buyTickets, setupLotteryQueryService } from "../utils/lottery";
import { useSourceSiteMetadata } from "../hooks";

import LotteryComponent from "../components/lottery";
import TableComponent from "../components/table";

import MainLayout from "../layouts/main";
import { formatCoin } from "../utils/cosmic-casino";

import * as S from "../layouts/styled";

const tableHeaders = {
  winner: "LATEST_DRAWS_WINNERS",
  jackpot: "LATEST_DRAWS_JACKPOT",
  endTime: "LATEST_DRAWS_TIME",
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
    <MainLayout innerPage>
      <S.Content $topIndent>
        <Grid>
          <Row center="xs">
            <Col xs={12} md={8}>
              <LotteryComponent
                onBuyClickHandler={buy}
                githubLedgerHref={githubLedger}
              />
              <h3>
                <FormattedMessage id="LATEST_DRAWS" />
              </h3>
              <TableComponent columns={tableHeaders} data={pastDraws} />
            </Col>
          </Row>
        </Grid>
      </S.Content>
    </MainLayout>
  );
};

export default LotteryPage;
