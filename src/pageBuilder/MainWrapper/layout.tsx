import { SideBar } from "@/components";

import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styles";

export const MainWrapper: FC<Props> = (props) => {
  const { children } = props;

  return (
    <S.Wrapper>
      <SideBar />
      {children}
    </S.Wrapper>
  );
};
