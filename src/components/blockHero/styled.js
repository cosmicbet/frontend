import styled from "styled-components";
import { rem } from "polished";

export const Logo = styled.h1`
  text-align: center;
  font-size: ${rem(126)};
  font-size: 8vw;
  line-height: 1;
  margin-bottom: ${rem(40)};
  background: linear-gradient(to bottom, #f1f1f1 0%, #eaa065 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
