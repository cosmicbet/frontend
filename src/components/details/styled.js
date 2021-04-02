import styled, { keyframes } from "styled-components";
import { rem } from "polished";

const spin = keyframes`
  0% { transform: rotate(0deg) translate3d(0,0,0); }
  100% { transform: rotate(360deg) translate3d(0,0,0); }
`;

const spinRotate = keyframes`
  0% { transform: rotate(90deg) translate3d(0,0,0); }
  100% { transform: rotate(270deg) translate3d(0,0,0); }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  pointer-events: none;
  transform: translate3d() (0, 0, 0);
`;

export const Plus = styled.span`
  position: absolute;
  width: ${rem(14)};
  height: ${rem(14)};
  left: ${(props) => (props.$left ? props.$left : "auto")};
  top: ${(props) => (props.$top ? props.$top : "auto")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "auto")};
  right: ${(props) => (props.$right ? props.$right : "auto")};
  opacity: ${(props) => props.$opacity};

  &:after,
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    left: 0;
    top: 50%;
    margin-top: -1px;
    background-color: ${(props) => props.theme.colors.white};
  }

  &:before {
    animation: 1.5s ${spin} forwards ease-in-out
      ${(props) => props.$delay + "s"};
  }

  &:after {
    transform: rotate(90deg);
    animation: 1s ${spinRotate} forwards ease ${(props) => props.$delay + "s"};
  }

  @media all and (max-width: 991px) {
    display: none;
  }
`;

export const System = styled.div`
  width: 100%;
  position: absolute;
  left: 40%;
  top: -10%;
  bottom: -20%;
  transition: all 0.8s ease;
  will-change: transform, left, right, bottom;
  transform: translate3d(0, 0, 0) rotate(0);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .fp-viewing-1 & {
    /* left: -50%;
    top: 25%;
    bottom: -45%;
    transform: translate3d(0, 0, 0) rotate(180deg); */

    opacity: 0.2;
  }
`;

export const SystemCenter = styled.div`
  width: ${rem(380)};
  height: ${rem(380)};
  margin-top: ${rem(-190)};
  margin-left: ${rem(-190)};
  position: absolute;
  left: 50%;
  top: 50%;
  object-fit: contain;
  animation: 300s ${spin} infinite linear;
  background: url(${(props) => props.$image}) no-repeat center / contain;

  @media all and (max-width: 767px) {
    width: 120px;
    height: 120px;
    margin-top: -60px;
    margin-left: -60px;
  }
`;

export const SystemOrbit = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: url(${(props) => props.$image}) no-repeat center / contain;
`;

export const SystemPlanets = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: 60s ${spin} infinite linear;
  background: url(${(props) => props.$image}) no-repeat center / contain;
`;

export const SystemPlanetsTwo = styled(SystemPlanets)`
  animation: 100s ${spin} infinite linear;
  background: url(${(props) => props.$image}) no-repeat center / contain;
`;

export const SystemPlanetsThree = styled(SystemPlanets)`
  animation: 140s ${spin} infinite linear;
  background: url(${(props) => props.$image}) no-repeat center / contain;
`;
