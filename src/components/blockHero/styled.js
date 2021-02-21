import styled from "styled-components";
import { rem } from "polished";

export const Logo = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
  opacity: 0.8;
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
`;

export const Wrapper = styled.div`
  padding: ${rem(100)} 0;
`;
