import styled from "styled-components";
import { rgba, rem } from "polished";

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${rem(20)} 0;

  hr {
    border: 0;
    margin: 0 0 ${rem(20)};
    border-top: 1px solid ${rgba("#fff", 0.1)};
  }

  a {
    font-weight: ${(props) => props.theme.fontWeight.medium};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Disclaimer = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
`;
