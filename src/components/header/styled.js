import styled from "styled-components";
import { rem } from "polished";
import { Row, Col } from "../../layouts/grid";

export const Header = styled.header`
  width: 100%;
  padding: ${rem(21)} 0;
  position: absolute;
  z-index: 9;
  color: ${(props) => props.theme.colors.white};

  ${Row} {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  ${Col} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
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
  display: inline-block;

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

  @media all and (max-width: 580px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: 0;

  a {
    display: block;

    img {
      transition: 0.3s ease;
    }

    &:hover img {
      transform: rotateY(180deg);
    }
  }
`;
