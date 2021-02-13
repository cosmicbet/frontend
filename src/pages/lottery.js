import * as React from "react";
import Layout from "../components/layout";
import BuyForm from "../components/lottery/buyform";
import Stats from "../components/lottery/stats";

const LotteryPage = () => {
  return (
    <Layout>
      <h1>cosmic.bet lottery</h1>

      <p>
        Buy a ticket for 10 FCHS, wait for the draw. One lucky winner takes all
        the jackpot!{" "}
        <a
          href="https://github.com/cosmicbet/ledger"
          rel="noreferrer"
          target="_blank"
        >
          Learn more
        </a>
      </p>

      <hr />

      <Stats />

      <hr />

      <BuyForm />
    </Layout>
  );
};

export default LotteryPage;
