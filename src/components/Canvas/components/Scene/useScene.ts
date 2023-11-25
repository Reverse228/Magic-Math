import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useEffect, useState } from "react";

import { useMouse } from "@context";

import type { Coord } from "@types";

export const useScene = () => {
  const [{ mouseCoord }] = useMouse();

  const { camera, size } = useThree();

  const [position, setPosition] = useState<Coord[]>([]);
  const [startPointCoord, setStartPointCoord] = useState<Coord>();

  const handleConvertSize = (x: number, y: number) => {
    const xCoord = ((x - size.left) / size.width) * 2 - 1;
    const yCoord = (-(y - size.top) / size.height) * 2 + 1;

    const vector = new Vector3(xCoord, yCoord, 0);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    return { posX: pos.x, posY: pos.y };
  };

  useEffect(() => {
    mouseCoord.length <= 3 &&
      mouseCoord.map(({ x, y }) => {
        const { posX, posY } = handleConvertSize(x, y);

        setPosition([...position, { x: posX, y: posY }]);
      });

    if (mouseCoord.length === 4) {
      const { x, y } = mouseCoord[mouseCoord.length - 1];
      const { posX, posY } = handleConvertSize(x, y);
      setStartPointCoord({ x: posX, y: posY });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseCoord]);

  return { position, startPointCoord };
};
