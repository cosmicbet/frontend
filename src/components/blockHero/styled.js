import styled from "styled-components";
import { rem } from "polished";

export const Logo = styled.h1`
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
  opacity: 0.8;
  margin-bottom: ${rem(40)};
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
  font-size: 1.8vh;
`;

export const Wrapper = styled.div`
  padding: ${rem(190)} 0 ${rem(100)};
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  a,
  button {
    min-width: 240px;
  }
`;
