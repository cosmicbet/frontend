import { Registry } from "@cosmjs/proto-signing";
const { SigningStargateClient } = require("@cosmjs/stargate");

export const chainConfig = {
  id: "cosmic-devnet-2",
  name: "Cosmic Casino",
  rpc: "http://68.183.9.198:26657",
  lcd: "https://cosmicbet.dimi.sh",
};

export const checkExtensionAndBrowser = () => {
  if (typeof window !== `undefined`) {
    if (
      window.getOfflineSigner &&
      window.keplr &&
      window.keplr.experimentalSuggestChain
    ) {
      return true;
    }
  }
  return false;
};

export const suggestChain = async () => {
  try {
    // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
    // cosmoshub-3 is integrated to Keplr so the code should return without errors.
    // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
    // If the user approves, the chain will be added to the user's Keplr extension.
    // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
    // If the same chain id is already registered, it will resolve and not require the user interactions.
    await window.keplr.experimentalSuggestChain({
      // Chain-id of the Cosmos SDK chain.
      chainId: chainConfig.id,
      // The name of the chain to be displayed to the user.
      chainName: chainConfig.name,
      // RPC endpoint of the chain.
      rpc: chainConfig.rpc,
      // REST endpoint of the chain.
      rest: chainConfig.lcd,
      // Staking coin information
      stakeCurrency: {
        // Coin denomination to be displayed to the user.
        coinDenom: "FCHS",
        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
        coinMinimalDenom: "ufchs",
        // # of decimal points to convert minimal denomination to user-facing denomination.
        coinDecimals: 6,
        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
        // coinGeckoId: ""
      },
      // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
      // The 'stake' button in Keplr extension will link to the webpage.
      // walletUrlForStaking: "",
      // The BIP44 path.
      bip44: {
        // You can only set the coin type of BIP44.
        // 'Purpose' is fixed to 44.
        coinType: 118,
      },
      // Bech32 configuration to show the address to user.
      // This field is the interface of
      // {
      //   bech32PrefixAccAddr: string;
      //   bech32PrefixAccPub: string;
      //   bech32PrefixValAddr: string;
      //   bech32PrefixValPub: string;
      //   bech32PrefixConsAddr: string;
      //   bech32PrefixConsPub: string;
      // }
      bech32Config: {
        bech32PrefixAccAddr: "rack",
        bech32PrefixAccPub: "rackpub",
        bech32PrefixValAddr: "rackvaloper",
        bech32PrefixValPub: "rackvaloperpub",
        bech32PrefixConsAddr: "rackvalcons",
        bech32PrefixConsPub: "rackvalconspub",
      },
      // List of all coin/tokens used in this chain.
      currencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: "FCHS",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "ufchs",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          // coinGeckoId: ""
        },
      ],
      // List of coin/tokens used as a fee token in this chain.
      feeCurrencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: "FCHS",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "ufchs",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          // coinGeckoId: ""
        },
      ],
      // (Optional) The number of the coin type.
      // This field is only used to fetch the address from ENS.
      // Ideally, it is recommended to be the same with BIP44 path's coin type.
      // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
      // So, this is separated to support such chains.
      coinType: 118,
      // (Optional) This is used to set the fee of the transaction.
      // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
      // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
      // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
      },
      features: ["stargate"],
    });
  } catch {
    alert("Failed to suggest the chain");
  }
};

export const getSigner = async () => {
  await window.keplr.enable(chainConfig.id);
  const offlineSigner = window.getOfflineSigner(chainConfig.id);
  const accounts = await offlineSigner.getAccounts(); // only one account currently supported by keplr

  // Initialize the cosmic casino api with the offline signer that is injected by Keplr extension.
  const registry = new Registry();
  registry.register("/custom.MsgCustom", MsgSend);
  const options = { registry: registry };

  const cosmJS = await SigningStargateClient.connectWithSigner(
    chainConfig.rpc,
    offlineSigner,
    options
  );

  return [accounts, cosmJS];
};
