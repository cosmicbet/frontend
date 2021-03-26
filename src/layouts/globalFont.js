import { withPrefix } from "gatsby";

const GlobalFontFace = `
@font-face {
  font-family: "Rotor Overlay";
  src: url(${withPrefix("/fonts/rotor-bold-overlay.woff2")}) format("woff2"),
    url(${withPrefix("/fonts/rotor-bold-overlay.woff")}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rotor";
  src: url(${withPrefix("/fonts/rotor-bold.woff2")}) format("woff2"),
    url(${withPrefix("/fonts/rotor-bold.woff")}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rotor";
  src: url(${withPrefix("/fonts/rotor-regular.woff2")}) format("woff2"),
    url(${withPrefix("/fonts/rotor-regular.woff")}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rotor Flex";
  src: url(${withPrefix(
    "/fonts/rotor-VF.woff2"
  )}) format("woff2 supports variations"),
    url(${withPrefix("/fonts/rotor-VF.woff2")}) format("woff2-variations");
  font-weight: 100 1000;
  font-stretch: 25% 151%;
}

@font-face {
  font-family: "Kyiv";
  src: url(${withPrefix("/fonts/KyivTypeSans-Regular.woff2")}) format("woff2"),
    url(${withPrefix("/fonts/KyivTypeSans-Regular.woff")}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Rotor";
  src: url(${withPrefix("/fonts/KyivTypeSans-Bold.woff2")}) format("woff2"),
    url(${withPrefix("/fonts/KyivTypeSans-Bold.woff")}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
`;

export default GlobalFontFace;
