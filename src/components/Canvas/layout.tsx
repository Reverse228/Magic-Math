import { Canvas } from "@react-three/fiber";

import { Scene, StartLabel } from "./components";
import * as S from "./styled";
import { useCanvas } from "./hooks";

export const CanvasLayer = () => {
  const {
    isSidebarOpen,
    handles: { handleMouseCoord },
  } = useCanvas();

  return (
    <S.Wrapper onClick={handleMouseCoord}>
      <StartLabel remove={!isSidebarOpen} />
      <Canvas>
        <Scene />
      </Canvas>
    </S.Wrapper>
  );
};
