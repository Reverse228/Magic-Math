import styled from "@emotion/styled";

import type { StyledProps } from "./types";

export const Wrapper = styled.div<StyledProps>`
  position: absolute;
  display: flex;
  gap: 26px;
  z-index: ${({ appear }) => (appear ? 100 : -1)};
  left: 50%;
  top: 100%;
  transition:
    opacity 0.4s ease-in 0.4s,
    transform 0.8s ease-out 0.2s;
  opacity: ${({ appear }) => (appear ? 1 : 0)};

  transform: translate(
    -50%,
    calc(${({ appear }) => (appear ? `-100% - 34px` : `-100%`)})
  );
`;
