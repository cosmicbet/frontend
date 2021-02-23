import styled, { keyframes, css } from "styled-components";
import { rem } from "polished";

const neonBlock = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

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
  padding-bottom: ${rem(120)};
`;

export const Section = styled.section`
  margin-bottom: ${rem(60)};
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  z-index: 2;
  border-radius: 30px;
  padding: ${rem(8)} ${rem(24)};
  font-family: ${(props) => props.theme.font.base};
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
  overflow: hidden;
  will-change: transform;
  color: #212121;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.$color === "gradient" &&
    css`
      background-color: transparent;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(45deg, #ff005e, #fbff00);
        animation: ${neonBlock} 30s linear infinite;
        opacity: 0.7;
      }
    `}
`;
