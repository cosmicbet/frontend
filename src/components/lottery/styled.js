import styled from "styled-components";
import { rem } from "polished";
import Countdown from "react-countdown";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: ${rem(40)} 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  color: ${(props) => props.theme.colors.warning};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  max-width: 600px;
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
