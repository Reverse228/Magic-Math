import styled from "@emotion/styled";

import { theme } from "@theme";

import type { Props, StyledProps } from "./types";

export const Name = styled.div<Props>`
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4px;
  margin: 0;
  text-align: center;

  a {
    text-decoration: none;
    display: grid;
    grid-template-columns: ${({ expand }) =>
      expand
        ? "25px 25px 25px 25px 25px 25px 25px 25px 25px 25px"
        : "25px 0 0 0 0 0 25px 0 0 0"};
    color: ${theme.colors.white.base};
    transition: grid-template-columns 0.6s ease-in-out;
  }
`;

export const MovingLetters = styled.span<Props & StyledProps>`
  position: relative;
  transition:
    left
      ${({ delay, expand }) =>
        delay && `${expand ? `0.2s` : `0.4s`} ease ${delay}s`},
    opacity
      ${({ delay, expand }) =>
        delay && `${expand ? "0.8s" : "0.4s"} ease ${delay}s`};
  left: ${({ expand }) => (expand ? "0" : "-25px")};
  opacity: ${({ expand }) => (expand ? "1" : " 0")};
`;
