import styled, { css } from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  margin: 0;
`;

export const Card = styled.div`
  padding: ${rem(15)};
  margin: 0 0 ${rem(40)};
  border-radius: ${rem(5)};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #212121;
  color: ${(props) => props.theme.colors.white};

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    transition: transform 1s ease;
  }

  &:hover {
    &:before,
    &:after {
      transform: scale(1.5) rotate(-3deg);
    }
  }

  ${(props) =>
    props.$type === "accent" &&
    css`
      border: 0;
      color: white;
      background-color: transparent;

      &:before,
      &:after {
        background: linear-gradient(145deg, #772aff, #714393, #2196f3);
      }

      h4 {
        font-size: ${(props) => rem(props.theme.fontSize.h3)};
      }
    `}
`;

export const Inner = styled.div`
  p {
    opacity: 0.8;
  }
`;

export const Image = styled.div`
  height: ${rem(160)};
  margin-bottom: ${rem(20)};
  border-radius: ${rem(3)};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

export const Content = styled.div`
  margin-top: ${rem(20)};
`;
