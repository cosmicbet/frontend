import styled from "styled-components";
import { rem } from "polished";

export const DropdownHeader = styled.div`
  text-transform: uppercase;
  cursor: pointer;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`;

export const DropdownList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: ${rem(6)};
  border-radius: ${rem(6)};
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.white};
`;

export const DropdownItem = styled.li`
  list-style: none;
  padding: ${rem(4)} ${rem(12)};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
