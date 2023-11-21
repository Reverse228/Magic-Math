import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

import { theme } from "@theme";

import type { StyledProps } from "./types";

export const Wrapper = styled.div`
  min-width: 143px;
`;
export const Content = styled.div<StyledProps>`
  position: ${({ hover }) => (hover !== undefined ? "absolute" : "relative")};
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 128px;
  height: 100vh;
  width: fit-content;
  padding: 46px;
  border-right: 1px solid ${rgba(theme.colors.white.base, 0.1)};
  background: ${rgba(theme.colors.black.base, 0.6)};
  backdrop-filter: blur(16px);
  z-index: 100;
`;

export const Menu = styled.div<StyledProps>`
  display: grid;
  gap: 48px;
  margin: 0;
  justify-content: ${({ expand }) => (expand ? `flex-start` : "center")};
`;
