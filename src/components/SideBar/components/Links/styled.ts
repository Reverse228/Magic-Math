import styled from "@emotion/styled";

import { Button } from "../../../Button";

import type { Props, StyledProps } from "./types";

export const Wrapper = styled.div<Props>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: ${({ expand }) =>
    expand ? `62px 62px 62px` : `0px 0 0`};
  gap: ${({ expand }) => (expand ? `8px` : `0`)};
  transition: grid-template-columns 0.6s ease-in-out;
  margin-top: auto;
`;

export const Link = styled(Button)<StyledProps & Props>`
  position: relative;

  ${({ speed, expand }) => `
      transition: left 0.4s ease ${speed}s, opacity 0.4s ease ${
        expand ? speed * 5.15 : speed
      }s;
      left: ${expand ? 0 : `-154px`};
      opacity: ${expand ? 1 : 0};
  `}
`;
