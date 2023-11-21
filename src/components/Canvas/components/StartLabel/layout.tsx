import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styled";
export const StartLabel: FC<Props> = (props) => {
  const { remove } = props;
  return (
    <S.Wrapper {...{ remove }}>
      <S.Name>Create 3 start points </S.Name>
      <S.Point>.</S.Point>
      <S.Point>.</S.Point>
      <S.Point>.</S.Point>
    </S.Wrapper>
  );
};
