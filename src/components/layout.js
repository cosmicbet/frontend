import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle theme="purple" />
      {children}
    </Container>
  );
}
