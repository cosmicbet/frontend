import styled from "styled-components";
import { rem } from "polished";

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: ${rem(30)} 0;
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
