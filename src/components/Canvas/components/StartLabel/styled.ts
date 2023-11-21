import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import type { Props } from "./types";

export const opacityAnim = (max: number, min: number) => keyframes`
  0% {
    opacity: ${max};
  }
  50% {
    opacity: ${min};
  }
  100%{
    opacity: ${max};
  }
`;

export const Wrapper = styled.div<Props>`
  position: absolute;
  display: flex;
  transition: 1s;
  z-index: -1;

  ${({ remove }) =>
    remove && {
      opacity: 0,
    }}

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
    transition: 0.2s;
  }
`;

export const Name = styled.h2`
  animation: ${opacityAnim(0.8, 0.4)} 4s linear infinite;
  margin-right: 8px;
`;

export const Point = styled.h2`
  &:nth-child(2) {
    animation: ${opacityAnim(1, 0)} 2s linear infinite;
  }
  &:nth-child(3) {
    animation: ${opacityAnim(1, 0)} 2s linear 0.5s infinite;
  }
  &:last-child {
    animation: ${opacityAnim(1, 0)} 2s linear 1s infinite;
  }
`;
