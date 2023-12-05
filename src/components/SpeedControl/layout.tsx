import { useSpeedControl } from "./hook";
import * as S from "./styled";

export const SpeedControl = () => {
  const {
    speed,
    handles: { handleChangeSpeed },
  } = useSpeedControl();

  return (
    <S.Wrapper>
      <S.Range>x1</S.Range>
      <S.InputSpeed
        type="range"
        name="speed"
        min="1"
        max="100"
        value={speed}
        onChange={handleChangeSpeed}
      />
      <S.Range>x10</S.Range>
    </S.Wrapper>
  );
};
