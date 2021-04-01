import styled from "styled-components";
import { rem, rgba } from "polished";

export const Table = styled.table`
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${rem(40)};
  border-collapse: collapse;

  th {
    text-align: left;
    opacity: 0.4;
    font-size: ${rem(16)};
    letter-spacing: 0;
    line-height: 24px;
    padding: ${rem(6)} 0 ${rem(16)};
  }

  td {
    font-weight: normal;
    padding: ${rem(10)} 0;
    border-bottom: 1px solid ${(props) => rgba(props.theme.colors.white, 0.04)};
  }

  td,
  th {
    font-size: 1em;
  }
`;

export const Overflow = styled.div`
  overflow: auto;
  width: 100%;
`;
