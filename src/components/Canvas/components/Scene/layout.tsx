import { Circle, RenderScene } from "..";

import { useScene } from "./hook";

export const Scene = () => {
  const { apexCoord, startPointCoord } = useScene();

  return (
    <mesh>
      {apexCoord.map(({ x, y }, idx) => (
        <Circle key={idx} position={[x, y, 0]} type="apex" id={idx} />
      ))}
      {startPointCoord && (
        <Circle
          position={[startPointCoord.x, startPointCoord.y, 0]}
          type="startPoint"
        />
      )}
      {apexCoord.length === 3 && startPointCoord && (
        <RenderScene apexCoord={apexCoord} startPointCoord={startPointCoord} />
      )}
    </mesh>
  );
};
