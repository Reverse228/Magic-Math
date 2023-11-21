import { useFrame } from "@react-three/fiber";
import { useRef, type FC } from "react";

import type { ThreeElements } from "@react-three/fiber";

export const Circle: FC<ThreeElements["mesh"]> = (props) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (ref.current.scale.x <= 0.18) {
      ref.current.scale.y += delta;
      ref.current.scale.x += delta;
    }
  });
  return (
    <mesh {...props} ref={ref} scale={0.05}>
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial color={"white"} />
    </mesh>
  );
};
