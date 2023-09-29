import type { FC } from "react";
import type { Props } from "./types";

import { socialLinks } from "./staticData";
import * as S from "./styled";

export const Links: FC<Props> = (props) => {
  const { expand } = props;

  return (
    <S.Wrapper {...{ expand }}>
      {socialLinks.map(({ id, Svg }, idx) => (
        <S.Link
          {...{ expand }}
          key={id}
          speed={idx / 20}
          variant="contained"
          size="small"
          icon={{
            iconLeft: {
              iconElement: Svg,
            },
          }}
        />
      ))}
    </S.Wrapper>
  );
};
