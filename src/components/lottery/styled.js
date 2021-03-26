import styled from "styled-components";
import { rem } from "polished";
import { Row as StyledRow, Col } from "react-styled-flexboxgrid";
import Countdown from "react-countdown";

export const Wrapper = styled.div`
  ${StyledRow} {
    margin-left: ${rem(-12)};
    margin-right: ${rem(-12)};
  }

  ${Col} {
    padding-left: ${rem(12)};
    padding-right: ${rem(12)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Card = styled.div`
  padding: ${rem(40)} ${rem(24)};
  margin-bottom: ${rem(24)};

  h3 {
    max-width: 350px;
  }
`;

export const Group = styled.div`
  padding: ${rem(40)} 0;
`;

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
`;

export const Amount = styled.h4`
  display: inline-block;
  min-width: ${rem(50)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
  text-align: center;
  margin-bottom: 0;
`;

const StyledCountdown = styled(Countdown)`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: ${(props) => rem(props.theme.fontSize.h1)};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const AccentTitle = styled.div`
  text-align: center;
  font-size: ${(props) => rem(props.theme.fontSize.h1)};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const AccentText = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.h1`
  text-align: center;
  max-width: ${rem(900)};
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.p`
  max-width: ${rem(600)};
  margin: ${rem(40)} auto;
  text-align: center;
`;

export const HintText = styled.p`
  margin-top: -10px;
  text-align: center;
`;

export const AmountContainer = styled.div`
  margin: ${rem(30)} 0;
`;

export const ErrorText = styled.div`
  margin-top: ${rem(20)};
  color: ${(props) => props.theme.colors.danger};
`;

export { StyledCountdown as Countdown };
