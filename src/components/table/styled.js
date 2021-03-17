import styled from "styled-components";
import { rem, rgba } from "polished";

export const Table = styled.table`
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${rem(40)};
  border-collapse: collapse;
  border-bottom: 1px solid ${(props) => rgba(props.theme.colors.primary, 0.1)};

  th {
    font-weight: bold;
    text-align: left;
    background-color: ${(props) => rgba(props.theme.colors.primary, 0.1)};
    color: ${(props) => props.theme.colors.dark};
    padding: ${rem(6)} ${rem(16)};
  }

  td {
    font-weight: normal;
    padding: ${rem(10)} ${rem(16)};
  }

  td,
  th {
    font-size: 1em;
  }
`;
