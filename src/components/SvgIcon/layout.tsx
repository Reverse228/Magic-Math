import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styled";

export const SvgIcon: FC<Props> = (props) => {
  const { Svg, ...restProps } = props;

  return (
    <S.Wrapper {...{ ...restProps }}>
      <Svg />
    </S.Wrapper>
  );
};
