import React, { useEffect } from "react";
import { useState } from "react";
import { WalletContext } from "../contexts";
import { getBalance } from "../utils/cosmic-casino";
import {
  chainConfig,
  checkExtensionAndBrowser,
  connectAccount,
} from "../utils/keplr";

export const setupWallet = async (setWallet) => {
  if (checkExtensionAndBrowser()) {
    const [accounts, offlineSigner] = await connectAccount();

    // use current selected account
    const address = accounts[0].address;

    // get balance
    const bal = await getBalance(address, chainConfig.coinMinimalDenom);

    setWallet({
      address: address,
      balance: bal,
      accounts: accounts,
      signer: offlineSigner,
    });
  } else {
    // TODO: Open modal "please install keplr, or continue without wallet"
    alert("Please install keplr or continue without wallet");
  }
};

const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    // hack, keplr is not appended to window fast enough sometimes..
    setTimeout(() => setupWallet(setWallet), 500);

    // Reload wallet every time user change account
    window.addEventListener("keplr_keystorechange", () => {
      console.log(
        "Key store in Keplr is changed. You may need to refetch the account info."
      );
      setupWallet(setWallet);
    });

    return () => {
      window.removeEventListener("keplr_keystorechange", () => {});
    };
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
