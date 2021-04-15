import styled from "styled-components";
import { rem, rgba } from "polished";
import { Row as StyledRow, Col as StyledCol } from "react-styled-flexboxgrid";
import Countdown from "react-countdown";

export const Wrapper = styled.div`
  ${StyledRow} {
    margin-left: ${rem(-12)};
    margin-right: ${rem(-12)};
  }

  ${StyledCol} {
    padding-left: ${rem(12)};
    padding-right: ${rem(12)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  padding: 0 !important;
  border: 1px solid ${rgba("#D8D8D8", 0.08)};

  & + & {
    border-left: 0;
  }

  h3 {
    max-width: 350px;
  }
`;

export const CardInner = styled.div`
  padding: ${rem(20)} ${rem(40)};
`;

export const Group = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  max-width: ${rem(380)};
  margin-bottom: ${rem(10)};
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
`;

export const Col = styled.div``;

export const Amount = styled.h4`
  display: inline-block;
  min-width: ${rem(50)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
  margin-bottom: 0;
  text-align: center;
`;

const StyledCountdown = styled(Countdown)`
  display: inline-block;
  width: 100%;
  font-size: ${rem(28)};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const AccentTitle = styled.div`
  font-size: ${rem(28)};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const AccentText = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const ValuesText = styled.span`
  font-size: ${rem(28)};
  display: block;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const Title = styled.h1`
  max-width: ${rem(900)};
  margin-left: auto;
  margin-right: auto;
  line-height: 1;
  margin-bottom: 0;
`;

export const Description = styled.div`
  margin-top: ${rem(20)};
`;

export const HintText = styled.p`
  opacity: 0.4;
  font-weight: 800;
  font-size: ${rem(16)};
  font-family: ${(props) => props.theme.font.headingsVariables};
`;

export const AmountContainer = styled.div`
  width: 100%;
  padding: ${rem(12)};
  margin: 0 0 ${rem(16)} 0;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;

  button {
    width: ${rem(20)};
    min-width: ${rem(20)};
    max-width: ${rem(20)};
    height: ${rem(20)};
    padding: ${rem(2)};
    font-size: ${rem(14)};
  }
`;

export const ErrorText = styled.div`
  margin-bottom: ${rem(20)};
  color: ${(props) => props.theme.colors.danger};
`;

export { StyledCountdown as Countdown };
