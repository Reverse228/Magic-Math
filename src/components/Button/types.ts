import type { GlobalStyledProps, GlobalTypeProps } from "@utils/types";

export type StyledProps = Omit<GlobalStyledProps, "backgroundColor"> &
  GlobalTypeProps;

export type Props = StyledProps & {
  label?: string;
  onClick?: () => void;
};
