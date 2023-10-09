import type { FC } from "react";

import { Links, MainName, Menu } from "./components";
import { useSideBar } from "./hook";
import * as S from "./styled";

export const SideBar: FC = () => {
  const {
    hoverExpand,
    expandSideBar,
    handles: { handleMouseEnter, handleMouseLeave },
  } = useSideBar();

  return (
    <>
      <S.Wrapper
        hover={hoverExpand}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MainName expand={expandSideBar} />
        <Menu expand={expandSideBar} />
        <Links expand={expandSideBar} />
      </S.Wrapper>
      {hoverExpand !== undefined && <S.InvisibleSize />}
    </>
  );
};
