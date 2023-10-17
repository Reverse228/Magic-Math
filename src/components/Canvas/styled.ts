import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    width: 100%;
    height: 100vh;
    display: block;
  }
`;

export const StartName = styled.div`
  position: absolute;
  display: flex;

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
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
