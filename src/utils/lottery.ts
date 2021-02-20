import { MsgBuyTickets } from "../codec/cosmicbet/wta/v1beta1/msgs";
import { getSigner } from "./keplr";

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

export const buyTickets = async (quantity) => {
  const [accounts, signer] = await getSigner();

  const fee = {
    amount: "",
    gas: "200000",
  };

  const msg = buildMsgBuyTicket(quantity, accounts[0].address);
  return await signer.signAndBroadcast(accounts[0].address, [msg], fee);
};
