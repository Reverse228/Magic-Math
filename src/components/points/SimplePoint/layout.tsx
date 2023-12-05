import type { ThreeElements } from "@react-three/fiber";
import type { FC } from "react";

export const SimplePoint: FC<ThreeElements["circleGeometry"]> = () => {
  return (
    <>
      <circleGeometry args={[0.01, 32]} />
      <meshBasicMaterial color="white" />
    </>
  );
};
