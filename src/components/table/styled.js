import styled from "styled-components";
import {rem} from "polished"

export const Table = styled.table`
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
  
  thead {
    overflow: hidden;
  }

  th {
    font-weight: bold;
    text-align: left;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.dark};
    padding: ${rem(6)} ${rem(16)};
    
    &:first-child {
        border-radius: ${rem(30)} 0 0 ${rem(30)};
    }
    
    &:last-child {
        border-radius: 0 ${rem(30)} ${rem(30)} 0;
    }
  }

  td {
    font-weight: normal;
    padding: ${rem(10)} ${rem(16)}
  }

  td,
  th {
    font-size: 1em;
  }
`;
