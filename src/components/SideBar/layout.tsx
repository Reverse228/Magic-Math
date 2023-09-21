import Link from "next/link";

import { Button } from "@components";
import How from "@public/svg/How.svg";

import type { FC } from "react";
import type { Props } from "./types";

import { socialLinks } from "./staticData";
import * as S from "./styled";

export const SideBar: FC<Props> = (props) => {
  const { expand = true } = props;

  return (
    <S.Wrapper>
      <S.Name>{expand ? " Magic Math" : "MM"} </S.Name>
      <S.Menu {...{ expand }}>
        <Button
          label={expand ? "How it works?" : ""}
          variant="text"
          icon={{
            iconLeft: {
              iconElement: <How />,
            },
          }}
        />
      </S.Menu>
      <S.ButtonWrapper {...{ expand }}>
        {socialLinks.map(({ id, Svg, href }) => (
          <Link href={href} key={id}>
            <Button
              variant="contained"
              padding="16px"
              icon={{
                iconLeft: {
                  iconElement: <Svg />,
                },
              }}
            />
          </Link>
        ))}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
