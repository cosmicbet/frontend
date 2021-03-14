import { StargateClient } from "@cosmjs/stargate";
import { chainConfig } from "./keplr";

export const getBalance = async (address, coin) => {
  const client = await StargateClient.connect(chainConfig.rpc);
  // get single balance is bugged 🤷‍♂️
  // const bal = await client.getBalance(address, coin);
  var bal = await client.getAllBalancesUnverified(address);
  client.disconnect();

  // Filter useless balances
  return bal.filter((el) => el.denom === coin);
};

export const shortAddress = (address) => {
  return (
    address.substring(0, 7) +
    "..." +
    address.substring(address.length - 4, address.length)
  );
};

export const formatCoin = (coin, decimals = 4) => {
  if (!coin || coin.length < 1) {
    return "0";
  }

  return coin.map((e) => {
    return (
      (parseInt(e.amount) / Math.pow(10, chainConfig.coinDecimals)).toFixed(
        decimals
      ) +
      " " +
      chainConfig.coinDenom
    );
  });
};
