import { Circle } from "..";

import { useScene } from "./useScene";

export const Scene = () => {
  const { position, startPointCoord } = useScene();

  return (
    <mesh>
      {position.map(({ x, y }, idx) => (
        <Circle key={idx} position={[x, y, 0]} type="apex" id={idx} />
      ))}
      {startPointCoord && (
        <Circle
          position={[startPointCoord.x, startPointCoord.y, 0]}
          type="startPoint"
        />
      )}
    </mesh>
  );
};
