import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    min-height: 80%;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Footer = styled.div`
  margin-top: 200px;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle theme="purple" />
      {children}
      <Footer>
        <hr />
        Cosmic Casino | <a href="">GitHub</a> | <a href="">Telegram</a> |{" "}
        <a href="">Discord</a> |
      </Footer>
    </Container>
  );
}
