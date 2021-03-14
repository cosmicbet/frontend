const  {StargateClient } = require("@cosmjs/stargate");


async function main() {

  const client = await StargateClient.connect("https://rpc.cosmic.bet");

  const balance = await client.getAllBalancesUnverified("rack1juczud9nep06t0khghvm643hf9usw45rhchlj2");

  console.log(balance)
}


main()