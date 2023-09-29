import { Button, SvgIcon } from "@components";

import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styled";
import { menuList } from "./staticData";

export const Menu: FC<Props> = (props) => {
  const { expand } = props;

  return (
    <S.Wrapper {...{ expand }}>
      {menuList.map(({ id, label, icon }) => (
        <S.ButtonWrapper key={id} {...{ expand }}>
          <SvgIcon Svg={icon} opacity={0.8} />
          <Button
            variant="text"
            padding="0"
            icon={{
              iconLeft: {
                iconElement: icon,
              },
            }}
            {...{ label }}
          />
        </S.ButtonWrapper>
      ))}
    </S.Wrapper>
  );
};
