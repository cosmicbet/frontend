import styled from "styled-components";
import { rem } from "polished";

export const Header = styled.header`
  width: 100%;
  padding: ${rem(21)} 0;
  position: fixed;
  z-index: 9;
  color: ${(props) => props.theme.colors.white};
`;

export const Logo = styled.div`
  letter-spacing: 0.26em;
  font-family: ${(props) => props.theme.font.headings};
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.div`
  position: relative;

  & + & {
    margin-left: ${rem(12)};
    margin-left: 1vw;
  }
`;

export const NavLink = styled.a`
  padding: ${rem(10)};
  font-weight: ${(props) => props.theme.fontWeight.base};
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const NavButton = styled.div`
  display: inline-block;

  a {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    border-radius: ${rem(5)};
    line-height: 1;
    display: block;
    padding: ${rem(4)} ${rem(10)} ${rem(5)};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;
