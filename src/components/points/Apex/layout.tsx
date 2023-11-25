import { useRef, type FC, useState } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import { Text } from "@react-three/drei";

import type { Props } from "./types";

export const Apex: FC<ThreeElements["group"] & Props> = (props) => {
  const { position, id } = props;

  const basePoint = useRef<THREE.Mesh>(null!);
  const supportPoint = useRef<THREE.Mesh>(null!);

  const [supportOpacity, setSupportOpacity] = useState<number>(0.6);

  useFrame((state, delta) => {
    if (basePoint && supportPoint) {
      if (basePoint.current.scale.x <= 0.12) {
        const speed = delta / 2;

        basePoint.current.scale.y += speed;
        basePoint.current.scale.x += speed;
      }

      if (supportPoint.current.scale.x <= 0.6) {
        const speed = delta * 1.4;

        supportPoint.current.scale.y += speed;
        supportPoint.current.scale.x += speed;
      }

      const newOpacity =
        supportOpacity === 1
          ? Math.min(1, supportOpacity + delta)
          : Math.min(1, supportOpacity - delta * 1.6);
      setSupportOpacity(newOpacity);
    }
  });

  return (
    <group position={position}>
      <mesh ref={supportPoint} scale={0.05}>
        <ringGeometry args={[1, 1.03, 32]} />
        <meshBasicMaterial
          color={"white"}
          transparent
          opacity={supportOpacity}
        />
      </mesh>
      <mesh ref={basePoint} scale={0.05}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color={"white"} transparent opacity={0.9} />
      </mesh>
      <Text
        fontSize={0.1}
        fillOpacity={0.2}
        anchorX="center"
        position={[0, -0.01, 0]}
        anchorY="middle"
        color="black"
      >
        {Number(id) + 1}
      </Text>
    </group>
  );
};
