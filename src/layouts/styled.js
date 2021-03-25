import styled, { css } from "styled-components";
import { rem, rgba } from "polished";

export const App = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

export const Main = styled.main`
  position: relative;

  &:before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    left: -10%;
    top: 0;
    background-image: radial-gradient(
      circle at 0% 50%,
      rgba(76, 185, 233, 0.3),
      rgba(76, 185, 233, 0) 50%
    );
  }
`;

export const Content = styled.div`
  padding: ${rem(100)} 0;
  padding: 20vh 0;
  min-height: 100vh;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.$topIndent &&
    css`
      padding-top: ${rem(140)};
    `}
`;

export const Section = styled.section``;

export const Divider = styled.hr`
  border: 0;
  margin: ${rem(20)} 0;
  border-top: 1px solid ${(props) => rgba(props.theme.colors.primary, 0.1)};
`;

export const Title = styled.h1`
  font-size: ${rem(60)};
  font-weight: 720;
  line-height: 1;
  margin-bottom: ${rem(20)};
`;

export const Grid = styled.div`
  padding-left: 6vw;
  padding-right: 6vw;
`;

export const StyledLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.font.headingsVariables};
  padding: ${rem(4)} 0;
  display: inline-block;

  span {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: ${rem(4)};

    &:after,
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      transition: all 0.4s ease-out;
    }

    &:after {
      left: -120%;
      width: 0%;
      transition: all 0.4s ease-in-out;
    }
  }

  &:after {
    content: "ᐳ";
    margin-left: ${rem(12)};
    position: relative;
    top: ${rem(2)};
  }

  &:hover {
    span {
      &:before {
        left: 200%;
        width: 80%;
      }

      &:after {
        left: 0;
        width: 100%;
      }
    }
  }
`;
