import styled from "styled-components";
import { rem, rgba } from "polished";

export const Footer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${rem(20)} 0;
  color: ${(props) => props.theme.colors.white};
  position: absolute;

  a {
    font-weight: ${(props) => props.theme.fontWeight.medium};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  hr {
    border-top-color: ${rgba("#fff", 0.1)};
  }
`;

export const Disclaimer = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const Logo = styled.div`
  letter-spacing: 0.26em;
  font-family: ${(props) => props.theme.font.headings};
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;
