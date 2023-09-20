import type { Sides, Size } from ".";

type IconSettings = {
  iconElement: JSX.Element;
  color?: string;
  size?: Size;
  alt?: string;
};

type Icon = {
  iconLeft?: IconSettings;
  rightIcon?: IconSettings;
};

export type GlobalTypeProps = {
  variant?: "contained" | "outlined" | "text";
  rounded?: "off" | "little" | "totally";
  size?: "small" | "normal";
};

export type GlobalStyledProps = {
  margin?: string | Sides;
  padding?: string | Sides;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: number;
  icon?: Icon;
  fontOpacity?: number;
};