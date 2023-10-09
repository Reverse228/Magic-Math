import type { FC } from "react";
import type { SideBarProps } from "./types";

import { Links, MainName, Menu } from "./components";
import { useSideBar } from "./hook";
import * as S from "./styled";

export const SideBar: FC<SideBarProps> = (props) => {
  const { expand = true } = props;

  const {
    hoverExpand,
    expandSideBar,
    handles: { handleMouseEnter, handleMouseLeave },
  } = useSideBar(expand);

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
