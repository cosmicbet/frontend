import styled, { createGlobalStyle } from "styled-components";
import { normalize, rem } from "polished";

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  html {
    @media all and (min-width: 2040px) {
        font-size: 24px
    }

    @media all and (max-width: 747px) {
        font-size: 14px
    }
  }

  body {
    position: relative;
    min-height: 100vh;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    font-size: ${(props) => rem(props.theme.fontSize.base)};
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.tertiary};
    direction: ltr;
    overscroll-behavior: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }


  h1 {
    font-family: ${(props) => props.theme.font.headingsVariables};
    font-size: ${(props) => rem(props.theme.fontSize.h1)};
    margin-top: 0;
    line-height: 1.3;
    font-variation-settings: "DPTH" 0, "OFST" -50;
  }

  h2 {
    margin-top: 0;
    margin-bottom: ${rem(14)};
    line-height: 1.3;
    font-family: ${(props) => props.theme.font.headingsVariables};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => rem(props.theme.fontSize.h2)};
  }

  h3 {
    margin-top: 0;
    margin-bottom: ${rem(14)};
    line-height: 1.3;
    font-family: ${(props) => props.theme.font.headings};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => rem(props.theme.fontSize.h3)};
  }

  h4 {
    margin-top: 0;
    margin-bottom: ${rem(6)};
    line-height: 1.3;
    font-family: ${(props) => props.theme.font.headingsVariables};
    font-size: ${(props) => rem(props.theme.fontSize.h4)};
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all ${(props) => props.theme.transition.base};
    outline: none !important
  }

  p {
    margin-top: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Flex = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyles;
