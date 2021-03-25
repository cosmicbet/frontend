import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  margin: 0;
`;

export const Card = styled.div`
  margin: 0 0 ${rem(40)};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};
`;

export const Inner = styled.div`
  p {
    opacity: 0.8;
  }
`;

export const Image = styled.div`
  height: ${rem(175)};
  margin-bottom: ${rem(32)};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

export const Content = styled.div`
  margin-top: ${rem(20)};
`;

export const StyledCol = styled.div`
  padding-left: ${rem(19)};
  padding-right: ${rem(19)};
`;

export const StyledRow = styled.div`
  margin-left: ${rem(-19)};
  margin-right: ${rem(-19)};
`;
