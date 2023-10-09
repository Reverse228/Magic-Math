import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

import { theme } from "@theme";

import type { StyledProps } from "./types";

export const Wrapper = styled.div<StyledProps>`
  position: ${({ hover }) => (hover !== undefined ? "absolute" : "relative")};
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 128px;
  height: 100vh;
  width: fit-content;
  padding: 46px;
  border-right: 1px solid ${rgba(theme.colors.white.base, 0.1)};
`;

export const Menu = styled.div<StyledProps>`
  display: grid;
  gap: 48px;
  margin: 0;
  justify-content: ${({ expand }) => (expand ? `flex-start` : "center")};
`;

export const InvisibleSize = styled.div`
  width: 143px;
  height: 100vh;
`;
