import { Canvas } from "@react-three/fiber";

import { StartLabel } from "./components";
import * as S from "./styled";

export const CanvasLayer = () => {
  return (
    <S.Wrapper>
      <StartLabel />
      <Canvas>{}</Canvas>
    </S.Wrapper>
  );
};
