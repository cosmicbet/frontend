import styled, { css } from "styled-components";
import { rem } from "polished";

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: ${rem(30)} 0;
  position: absolute;
  z-index: 10;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.$black ? props.theme.colors.primary : "transparent"};

  ~ main {
    padding-top: ${rem(90)};
  }
`;

export const Logo = styled.div`
  letter-spacing: 0.26em;
  font-family: ${(props) => props.theme.font.headings};
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const Nav = styled.div`
  display: flex;
`;

export const NavItem = styled.div`
  & + & {
    margin-left: ${rem(12)};
  }

  a {
    padding: ${rem(10)};
    font-weight: ${(props) => props.theme.fontWeight.medium};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const NavButton = styled.div`
  background-color: #80808070;
  border-radius: ${rem(5)};
  cursor: pointer;
`;
