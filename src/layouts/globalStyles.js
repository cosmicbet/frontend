import { createGlobalStyle } from "styled-components";
import { normalize, rem } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()};

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
    color: ${(props) => props.theme.colors.odd};
    background-color: ${(props) => props.theme.colors.primary};
    /* background: linear-gradient(0, #140e38, #000000); */
    background: linear-gradient(235deg, #772aff, #010615, #2196f3);
    direction: ltr;
    overscroll-behavior: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }


  h1 {
    font-family: ${(props) => props.theme.font.headings};
    font-size: ${(props) => rem(props.theme.fontSize.h1)};
    font-weight: ${(props) => props.theme.fontWeight.black};
    text-transform: uppercase;
    letter-spacing: 0.26em;
    margin-top: 0;
    line-height: 1.3;
  }

  h3 {
    margin-top: 0;
    margin-bottom: ${rem(14)};
    line-height: 1.3;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font.headings};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => rem(props.theme.fontSize.h3)};
  }

  h4 {
    margin-top: 0;
    margin-bottom: ${rem(10)};
    line-height: 1.3;
    font-family: ${(props) => props.theme.font.headings};
    font-size: ${(props) => rem(props.theme.fontSize.h4)};
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all ${(props) => props.theme.transition.base};
  }

  p {
    margin-top: 0;
  }
`;

export default GlobalStyle;
