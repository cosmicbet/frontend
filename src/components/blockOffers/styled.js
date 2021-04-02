import styled from "styled-components";
import { rem, rgba } from "polished";

export const Container = styled.div`
  margin-bottom: ${rem(40)};
`;

export const Content = styled.div``;

export const Card = styled.div`
  padding: ${rem(22)} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => rgba(props.theme.colors.white, 0.08)};
`;

export const Title = styled.div`
  padding-right: ${rem(40)};
  max-width: ${rem(380)};
`;
