import React from "react";
import { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";

import MetadataProvider from "../providers/metadata";
import WalletProvider from "../providers/wallet";

import GlobalStyle, { Flex } from "./globalStyles";
import theme from "./theme";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";

import * as S from "./styled";

export default function MainLayout({ children, blackHeader }) {
  const renderApp = () => {
    return (
      <S.App id="app">
        <HeaderComponent black={blackHeader} />
        <Flex>
          <S.Main>{children}</S.Main>
          <MetadataProvider>
            <FooterComponent />
          </MetadataProvider>
        </Flex>
      </S.App>
    );
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Montserrat:wght@200;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WalletProvider>{renderApp()}</WalletProvider>
      </ThemeProvider>
    </>
  );
}
