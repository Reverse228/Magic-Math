import { Button, SpeedControl } from "@components";
import Pause from "@public/svg/Pause.svg";
import Reload from "@public/svg/Reload.svg";
import { theme } from "@theme";

import { useControlPanel } from "./hook";
import * as S from "./styled";

export const ControlPanel = () => {
  const { mouseCoord } = useControlPanel();

  return (
    <S.Wrapper appear={mouseCoord.length >= 3}>
      <Button
        square
        rounded="totally"
        icon={{
          iconLeft: {
            color: theme.colors.white.base,
            iconElement: Pause,
          },
        }}
      />
      <Button
        square
        rounded="totally"
        icon={{
          iconLeft: {
            color: theme.colors.white.base,
            iconElement: Reload,
          },
        }}
      />
      <SpeedControl />
    </S.Wrapper>
  );
};
