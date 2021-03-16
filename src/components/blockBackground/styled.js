import styled, { keyframes } from "styled-components";

const animStar = keyframes`
  0%	{transform: translateY(0px)}
  100% {transform: translateY(-2000px)}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    z-index: -1;
    background: #772aff url(${(props) => props.image}) no-repeat center top /
      cover;
  }
`;
