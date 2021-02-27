import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Amount = styled.h4`
  display: inline-block;
  min-width: ${rem(50)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
  text-align: center;
  margin-bottom: 0;
`;
