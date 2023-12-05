import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

import { theme } from "@theme";

import type { StyledProps } from "./types";

export const Button = styled.button<StyledProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 28px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border 0.2s,
    border-radius 0.2s,
    color 0.2s;

  ${({ variant }) => {
    switch (variant) {
      case "contained":
        return `
          background-color: ${rgba(theme.colors.white.base, 0.1)};
          border: none;

          &:hover {
            background-color: ${rgba(theme.colors.white.base, 0.15)};
          }
        `;
      case "outlined":
        return `
          background-color: transparent;
          border: 1px solid ${rgba(theme.colors.white.base, 0.2)};

          &:hover {
            background-color: ${rgba(theme.colors.white.base, 0.05)};
          }
        `;
      case "text":
        return `
          background-color: transparent;
          padding: 8px;
          border: none;
        `;
      default:
        return ``;
    }
  }}

  ${({ rounded }) => {
    switch (rounded) {
      case "off":
        return `
          border-radius: 0;
      `;
      case "little":
        return `
          border-radius: 16px;
        `;

      case "totally":
        return `
          border-radius: 100px;
        `;
      default:
        return ``;
    }
  }}

  ${({
    padding,
    margin,
    color,
    fontSize,
    fontWeight,
    size,
    fontOpacity,
    square,
  }) =>
    `
      ${
        square &&
        `
        width: ${size === "small" ? "40px" : "80px"};
        height: ${size === "small" ? "40px" : "80px"};
        `
      };

      padding: ${padding ?? (size === "small" ? "14px" : "26px")};
      margin: ${margin ?? "0"};
      color: ${
        (color && rgba(color, fontOpacity ?? 0.8)) ??
        rgba(theme.colors.white.base, fontOpacity ?? 0.8)
      };
      font-size: ${fontSize ?? (size === "small" ? "14px" : "20px")};
      font-weight: ${fontWeight ?? "normal"};

      & svg path, & svg rect{
        transition: 0.2s;
        fill: ${
          (color && rgba(color, fontOpacity ?? 0.8)) ??
          rgba(theme.colors.white.base, fontOpacity ?? 0.3)
        };
      }

      &:hover{
        color: ${color ?? theme.colors.white.base};

        & svg path, & svg rect{
          fill: ${color ?? theme.colors.white.base};
        }
      }
    `}
`;
