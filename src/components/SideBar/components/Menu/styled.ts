import styled from "@emotion/styled";

import type { Props } from "./types";

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

export const ButtonWrapper = styled.div<Props>`
  display: flex;

  & button {
    position: absolute;
    transition:
      transform 0.2s ${({ expand }) => expand && `ease 0.25s`},
      opacity 0.2s ${({ expand }) => expand && `ease 0.25s`};
    transform: ${({ expand }) =>
      expand ? `translate(0)` : "translate(-24px)"};
    opacity: ${({ expand }) => (expand ? 1 : 0)};
  }

  & > div {
    flex: 1;
    transition:
      transform 0.2s ${({ expand }) => !expand && `ease 0.25s`},
      opacity 0.2s ${({ expand }) => !expand && `ease 0.25s`};
    transform: ${({ expand }) =>
      expand ? `translate(-24px)` : "translate(13px)"};
    opacity: ${({ expand }) => (expand ? 0 : 1)};
  }
`;
