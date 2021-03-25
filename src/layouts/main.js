import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import WalletProvider from "../providers/wallet";
import IntlProvider from "../providers/intl";

import GlobalStyle from "./globalStyles";
import theme from "./theme";
import locales from "../locale";
import HeaderComponent from "../components/header";
import * as S from "./styled";
import { LANGUAGE } from "../constants/localStorage";
import { getLanguage } from "../utils/getLanguage";

export default function MainLayout({ children, innerPage }) {
  const [lang, setLang] = useState(getLanguage());

  const languageChangeHandler = (lang) => {
    setLang(lang);
    localStorage.setItem(LANGUAGE, lang);
  };

  const localeOptions = Object.keys(locales);
  const renderApp = () => (
    <S.App id="app">
      <HeaderComponent
        transform={innerPage}
        localeOptions={localeOptions}
        selectedLanguage={lang}
        languageChangeHandler={languageChangeHandler}
      />
      <S.Main>{children}</S.Main>
    </S.App>
  );

  return (
    <IntlProvider currentLocale={lang}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WalletProvider>{renderApp()}</WalletProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}
