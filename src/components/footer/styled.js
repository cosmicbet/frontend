import styled from "styled-components";
import { rem, rgba } from "polished";

export const Footer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${rem(20)} 0;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  hr {
    border-top-color: ${rgba("#fff", 0.1)};
  }
`;

export const Disclaimer = styled.p`
  font-size: ${rem(8)};
  color: ${rgba("#fff", 0.4)};
  max-width: ${rem(400)};
  margin-left: auto;
  margin-right: auto;

  a {
    opacity: 0.7;
  }
`;

export const Logo = styled.div`
  letter-spacing: 0.26em;
  font-family: ${(props) => props.theme.font.headings};
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const Links = styled.div`
  margin-bottom: ${rem(14)};
  font-size: ${rem(12)};

  a {
    padding: ${rem(3)} ${rem(6)};
  }
`;
