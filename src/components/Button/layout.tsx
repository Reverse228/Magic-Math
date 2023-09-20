import { roboto_Mono } from "@/utils/fonts";

import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styled";

export const Button: FC<Props> = (props) => {
  const { label, variant, rounded, size, icon } = props;

  return (
    <S.Button
      variant={variant ?? "outlined"}
      rounded={rounded ?? "little"}
      size={size ?? "normal"}
      className={roboto_Mono.className}
    >
      {icon?.iconLeft?.iconElement && icon.iconLeft.iconElement}
      {label}
      {icon?.rightIcon?.iconElement && icon.rightIcon.iconElement}
    </S.Button>
  );
};
