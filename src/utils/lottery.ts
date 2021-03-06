import { createRpc, QueryClient } from "@cosmjs/stargate";
import { MsgBuyTickets } from "../codec/cosmicbet/wta/v1beta1/msgs";
import { QueryClientImpl as LotteryQuery } from "../codec/cosmicbet/wta/v1beta1/query";
import { chainConfig, initStargateClient } from "./keplr";
import { adaptor34, Client as TendermintClient } from "@cosmjs/tendermint-rpc";

/* Query Client */
export const setupLotteryQueryService = async () => {
  const tm = await TendermintClient.connect(chainConfig.rpc, adaptor34);

  const client = QueryClient.withExtensions(tm);
  const rpc = createRpc(client);

  return new LotteryQuery(rpc);
};

/* Buy Transaction */
export const buildMsgBuyTicket = (quantity, buyer) => {
  const msg: MsgBuyTickets = {
    quantity: quantity,
    buyer: buyer,
  };
  const msgAny = {
    typeUrl: "/cosmicbet.wta.v1beta1.MsgBuyTickets",
    value: msg,
  };

  return msgAny;
};

export const buyTickets = async (quantity, wallet) => {
  const accounts = wallet.accounts;
  const client = await initStargateClient(wallet.signer);

  const fee = {
    amount: "",
    gas: "200000",
  };

  const msg = buildMsgBuyTicket(quantity, accounts[0].address);
  return await client.signAndBroadcast(accounts[0].address, [msg], fee);
};
