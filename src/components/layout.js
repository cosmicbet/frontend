import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

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

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: grey;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle theme="purple" />
      {children}
      <Footer>
        <hr />
        Cosmic Casino | <a href="">GitHub</a> | <a href="">Telegram</a> |{" "}
        <a href="">Discord</a>
        <Disclaimer>
          Disclaimer. All betting in any forms involves risk. Be aware and
          accept this risk before betting. Never bet with money you cannot
          afford to lose. <Link to="/disclaimer">Read More</Link>{" "}
        </Disclaimer>
      </Footer>
    </Container>
  );
}
