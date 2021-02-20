import { getSigner } from "./keplr";

export const buildMsgBuyTicket = (quantity, buyer) => {
  return {
    type: "/cosmicbet.wta.v1beta1.MsgBuyTickets",
    value: {
      quantity,
      buyer,
    },
  };
};

export const buyTickets = async (quantity) => {
  const [accounts, signer] = await getSigner();

  const fee = {
    amount: "",
    gas: "200000",
  };

  console.log(accounts);
  const msg = buildMsgBuyTicket(quantity, accounts[0].address);

  console.log(msg);

  await signer.signAndBroadcast(accounts[0].address, [msg], fee, "ripperoni");
};
