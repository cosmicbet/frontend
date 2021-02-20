import React from "react";
import { ThemeProvider } from "styled-components";
import MetadataProvider from "../providers/metadata";
import GlobalStyle from "./globalStyles";
import theme from "./theme";
import * as S from "./styled";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";

export default function MainLayout({ children }) {
  const renderApp = () => {
    return (
      <S.App id="app">
        <HeaderComponent />
        <S.Main>{children}</S.Main>
        <FooterComponent />
      </S.App>
    );
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MetadataProvider>{renderApp()}</MetadataProvider>
      </ThemeProvider>
    </>
  );
}
