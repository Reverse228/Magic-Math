import Link from "next/link";

import type { FC } from "react";
import type { Props } from "./types";

import * as S from "./styled";
import { Name } from "./staticData";

export const MainName: FC<Props> = (props) => {
  const { expand } = props;

  return (
    <S.Name {...{ expand }}>
      <Link href={"#"}>
        {Name.map((letter, idx) =>
          letter !== "M" ? (
            <S.MovingLetters
              key={idx}
              delay={expand ? idx / 18 : idx / 32}
              expand={expand}
            >
              {letter}
            </S.MovingLetters>
          ) : (
            letter
          )
        )}
      </Link>
    </S.Name>
  );
};
