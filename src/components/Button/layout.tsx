import { roboto_Mono } from "@/utils/fonts";

import { SvgIcon } from "..";

import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styled";

export const Button: FC<Props> = (props) => {
  const { label, variant, rounded, size, icon, onClick, ...restProps } = props;

  return (
    <S.Button
      variant={variant ?? "outlined"}
      rounded={rounded ?? "little"}
      size={size ?? "normal"}
      className={roboto_Mono.className}
      {...{ ...restProps, onClick }}
    >
      {icon?.iconLeft?.iconElement && (
        <SvgIcon Svg={icon.iconLeft.iconElement} fill={icon.iconLeft.color} />
      )}
      {label}
      {icon?.rightIcon?.iconElement && (
        <SvgIcon Svg={icon.rightIcon.iconElement} fill={icon.rightIcon.color} />
      )}
    </S.Button>
  );
};
