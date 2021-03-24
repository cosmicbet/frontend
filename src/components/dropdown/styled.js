import styled from "styled-components";

export const DropdownHeader = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
`;

export const DropdownList = styled.ul`
  margin: 0;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border: 1px solid #a4a0a0;
  font-weight: 500;
`;

export const DropdownItem = styled.li`
  list-style: none;
  font-weight: 500;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
