import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

import { theme } from "@theme";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  max-height: 80px;
  border: 1px solid ${rgba(theme.colors.white.base, 0.2)};
  border-radius: 100px;
  padding: 26px 36px;
  backdrop-filter: blur(16px);
`;

export const InputSpeed = styled.input`
  &[type="range"] {
    min-width: 260px;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;

    &::-webkit-slider-runnable-track {
      background: ${rgba(theme.colors.white.base, 0.6)};
      border-radius: 6px;
      height: 6px;
    }

    &::-moz-range-track {
      background: ${rgba(theme.colors.white.base, 0.6)};
      border-radius: 6px;
      height: 4px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background-color: ${theme.colors.white.base};
      width: 16px;
      height: 16px;
      border-radius: 16px;
      margin-top: -5px;
      box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.25);
      transition: 0.2s;

      &:hover,
      &:active {
        width: 18px;
        height: 18px;
        margin-top: -6px;
      }
    }

    &::-moz-range-thumb {
      border: none;
      border-radius: 0;
      background-color: ${theme.colors.white.base};
      width: 16px;
      height: 16px;
      border-radius: 16px;
      margin-top: -5px;
      box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.25);

      &:hover,
      &:active {
        width: 18px;
        height: 18px;
        margin-top: -6px;
      }
    }
  }
`;

export const Range = styled.p`
  margin: 0;
`;
