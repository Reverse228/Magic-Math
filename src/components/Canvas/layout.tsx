import { useCanvas } from "./hook";
import * as S from "./styled";

export const Canvas = () => {
  const {
    windowSize: { width, height },
  } = useCanvas();

  return (
    <S.Wrapper>
      <canvas {...{ width, height }} />
    </S.Wrapper>
  );
};
