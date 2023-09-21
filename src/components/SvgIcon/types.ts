import type { ElementType } from "react";
import type { GlobalStyledProps, Size } from "@/utils/types";

export type StyledProps = Pick<
  GlobalStyledProps,
  "margin" | "padding" | "opacity"
> & {
  fill?: string;
  size?: Size;
};

export type Props = StyledProps & {
  Svg: ElementType;
};
