import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

import type { StyledProps } from "./types";

export const Wrapper = styled.div<StyledProps>`
  display: flex;

  ${({ padding, margin }) => `
    ${margin && `margin: ${margin}`};
    ${padding && `padding: ${padding}`};
  `}

  ${({ size, fill, opacity }) =>
    `
    &&{
      svg {
        width: ${size?.width ?? "auto"};
        height: ${size?.height ?? "auto"};
        
        path, rect {
          fill: ${fill && rgba(fill, opacity ?? 0.8)}
        }
      } 
    } 
  `}
`;
