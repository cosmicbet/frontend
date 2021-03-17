import styled, { keyframes, css } from "styled-components";
import { rem, rgba } from "polished";

const neonBlock = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  z-index: 2;
  border-radius: ${rem(50)};
  line-height: 1;
  padding: ${rem(12)} ${rem(24)};
  font-family: ${(props) => props.theme.font.base};
  font-size: ${(props) => rem(props.theme.fontSize.h4)};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
  overflow: hidden;
  will-change: transform;
  color: #212121;
  text-align: center;
  border: 0;
  cursor: pointer;
  appearance: none;
  outline: none !important;
  transition: all ${(props) => props.theme.transition.base};

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
      color: #fff;

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

  ${(props) =>
    props.$color === "white" &&
    css`
      background-color: ${(props) => props.theme.colors.white};
    `}

  ${(props) =>
    props.$icon &&
    css`
      padding: ${rem(12)};
      min-width: ${rem(42)};
    `}

  ${(props) =>
    props.$size === "lg" &&
    css`
      padding: ${rem(20)} ${rem(40)};
      font-size: ${(props) => rem(props.theme.fontSize.h3)};
    `}
`;
