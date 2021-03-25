import styled from "styled-components";
import { rem } from "polished";
import {
  Grid as StyledGrid,
  Row as StyledRow,
  Col as StyledCol,
} from "react-styled-flexboxgrid";

export const Grid = styled(StyledGrid)`
  padding-left: ${rem(24)};
  padding-right: ${rem(24)};
  width: 100%;
`;

export const Row = styled(StyledRow)`
  margin-left: -2vw;
  margin-right: -2vw;
`;

export const Col = styled(StyledCol)`
  padding-left: 2vw;
  padding-right: 2vw;
`;
