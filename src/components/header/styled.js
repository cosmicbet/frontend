import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  min-width: 320px;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
`;
