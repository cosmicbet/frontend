import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  pointer-events: none;
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

  &:after {
    transform: rotate(90deg);
  }

  @media all and (max-width: 991px) {
    display: none;
  }
`;

export const System = styled.div`
  width: 100%;
  position: absolute;
  right: -35%;
  top: -10%;
  bottom: -20%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SystemCenter = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  object-fit: contain;
  transform: translate(-50%, -50%);
`;

export const SystemOrbit = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
