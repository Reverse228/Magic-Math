import { useEffect, useState } from "react";

import type { Coord } from "@types";
import type { Props } from "./types";

export const useRenderScene = ({ apexCoord, startPointCoord }: Props) => {
  const [simplePoints, setSimplePoints] = useState<Coord[]>([]);

  const findMidpoint = (apex: Coord, point: Coord) => {
    const x = (apex.x + point.x) / 2;
    const y = (apex.y + point.y) / 2;
    return { x, y };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newPoints = [];
      let nextPoint = { x: 0, y: 0 };

      for (let index = 0; index < 30000; index++) {
        const randomIndex = Math.floor(Math.random() * 3);
        const randomApex = apexCoord[randomIndex];
        const firstPoint = index ? nextPoint : startPointCoord;

        const middleCoord = findMidpoint(randomApex, firstPoint);
        nextPoint = middleCoord;
        newPoints.push(middleCoord);
      }

      setSimplePoints(newPoints);
    }, 500);

    return () => clearTimeout(timer);
  }, [apexCoord, startPointCoord]);

  return {
    simplePoints,
  };
};
