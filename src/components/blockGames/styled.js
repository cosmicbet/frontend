import styled, { css } from "styled-components";
import { rgba, rem } from "polished";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`;

export const Card = styled.div`
  padding: ${rem(10)};
  margin: 0 ${rem(10)};
  max-width: 240px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #212121;
  color: ${(props) => props.theme.colors.secondary};

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
      transform: scale(1.5) rotate(-10deg);
    }
  }

  a {
    color: white;
    margin-top: auto;
  }

  ${(props) =>
    props.$type === "accent" &&
    css`
      border: 0;
      color: white;
      background-color: transparent;
      max-width: 530px;

      &:before,
      &:after {
        background: linear-gradient(235deg, #772aff, #eaa065, #2196f3);
      }
    `}
`;

export const Inner = styled.div``;

export const Image = styled.div`
  height: ${rem(160)};
  margin-bottom: ${rem(10)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
