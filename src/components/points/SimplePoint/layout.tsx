import type { ThreeElements } from "@react-three/fiber";
import type { FC } from "react";

export const SimplePoint: FC<ThreeElements["mesh"]> = (props) => {
  return (
    <mesh {...props} scale={0.005}>
      <circleGeometry args={[1, 3]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};
