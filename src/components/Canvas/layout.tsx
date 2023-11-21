import { Canvas } from "@react-three/fiber";

import { Circle, StartLabel } from "./components";
import * as S from "./styled";

export const CanvasLayer = () => {
  return (
    <S.Wrapper>
      <StartLabel />
      <Canvas>
        <Circle position={[0, 0, 0]} />
      </Canvas>
    </S.Wrapper>
  );
};
