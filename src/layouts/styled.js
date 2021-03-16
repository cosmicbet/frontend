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
  flex: 1 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  padding: ${rem(40)} 0;

  ${(props) =>
    props.$topIndent &&
    css`
      padding-top: ${rem(140)};
    `}
`;

export const Section = styled.section`
  padding: ${rem(40)} 0;
`;

export const Divider = styled.hr`
  border: 0;
  margin: ${rem(20)} 0;
  border-top: 1px solid ${(props) => rgba(props.theme.colors.primary, 0.1)};
`;
