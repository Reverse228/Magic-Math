import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

import { theme } from "@theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 128px;
  height: 100vh;
  width: fit-content;
  padding: 46px;
  border-right: 1px solid ${rgba(theme.colors.white.base, 0.1)};
`;

export const Name = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4px;
  margin: 0;
  text-align: center;
`;

export const Menu = styled.div<{ expand: boolean }>`
  display: grid;
  gap: 48px;
  margin: 0;
  justify-content: ${({ expand }) => (expand ? `flex-start` : "center")};
`;

export const ButtonWrapper = styled.div<{ expand: boolean }>`
  width: 100%;
  display: ${({ expand }) => (expand ? "flex" : "grid")};
  gap: 8px;
  justify-content: ${({ expand }) => (expand ? `space-between` : "center")};
  margin-top: auto;
`;
