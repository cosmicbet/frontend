import React, { useEffect } from "react";
import { useState } from "react";
import { WalletContext } from "../contexts";
import { useInterval } from "../hooks";
import { getBalance } from "../utils/cosmic-casino";
import {
  chainConfig,
  checkExtensionAndBrowser,
  connectAccount,
} from "../utils/keplr";

const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  const setupWallet = async (update = false) => {
    if (wallet === null || update) {
      if (checkExtensionAndBrowser()) {
        const [accounts, offlineSigner] = await connectAccount();

        // use current selected account
        const address = accounts[0].address;

        // get balance
        const bal = await getBalance(address, chainConfig.coinMinimalDenom);

        setWallet({
          address: address,
          balance: bal,
          signer: offlineSigner,
        });
      } else {
        // TODO: Open modal "please install keplr, or continue without wallet"

        // for now retry after a second
        setTimeout(() => setupWallet(), 1000);
      }
    }
  };

  useEffect(() => {
    // hack, keplr is not appended to window fast enough sometimes..
    setTimeout(() => setupWallet(), 500);

    // Reload wallet every time user change account
    window.addEventListener("keplr_keystorechange", () => {
      console.log(
        "Key store in Keplr is changed. You may need to refetch the account info."
      );
      setupWallet(true);
    });

    return () => {
      window.removeEventListener("keplr_keystorechange", () => {});
    };
  }, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
