import { useRef, type FC, useState } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";

export const StartPoint: FC<ThreeElements["group"]> = (props) => {
  const { position } = props;

  const basePoint = useRef<THREE.Mesh>(null!);
  const supportPoint = useRef<THREE.Mesh>(null!);

  const [opacity, setOpacity] = useState<number>(0.2);
  const [supportOpacity, setSupportOpacity] = useState<number>(0);

  useFrame((state, delta) => {
    if (basePoint && supportPoint) {
      if (basePoint.current.scale.x <= 0.1) {
        const speed = delta / 1.8;

        basePoint.current.scale.y += speed;
        basePoint.current.scale.x += speed;
      }

      const opacitySpeed = delta * 1.8;
      const newOpacity = opacity <= 0.8 ? opacity + opacitySpeed : 0.8;
      setOpacity(newOpacity);

      const newSupportOpacity = opacity <= 0.1 ? opacity + opacitySpeed : 0.1;
      setSupportOpacity(newSupportOpacity);
    }
  });

  return (
    <group position={position}>
      <mesh ref={supportPoint} scale={0.034}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color="white" transparent opacity={opacity} />
      </mesh>
      <mesh ref={basePoint} scale={0.02}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color="white" transparent opacity={supportOpacity} />
      </mesh>
    </group>
  );
};
