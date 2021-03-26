import styled from "styled-components";
import { rem } from "polished";

export const Description = styled.p`
  max-width: ${rem(470)};
  margin: 0 auto;
  opacity: 0.8;
  margin-bottom: ${rem(10)};
`;

export const Wrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  width: 100%;

  a,
  button {
    min-width: 240px;
  }
`;

export const Icon = styled.div`
  margin: 10vh 0 -10vh;

  img,
  svg {
    width: ${rem(24)};
  }
`;
