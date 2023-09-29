import { Button } from "@components";
import How from "@public/svg/How.svg";

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
        {/* <S.Menu expand={hoverExpand ?? expand}>
          <Button
            label={hoverExpand ?? expand ? "How it works?" : ""}
            variant="text"
            padding="0px"
            icon={{
              iconLeft: {
                iconElement: How,
              },
            }}
          />
        </S.Menu> */}
        <Links expand={expandSideBar} />
      </S.Wrapper>
      {hoverExpand !== undefined && <S.InvisibleSize />}
    </>
  );
};
