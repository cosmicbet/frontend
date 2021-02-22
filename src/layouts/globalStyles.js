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
    background: linear-gradient(0, #4D329C, #19154C);
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
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all ${(props) => props.theme.transition.base};
  }
`;

export default GlobalStyle;
