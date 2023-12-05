import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { Coord } from "@types";
import type { Props } from "./types";

export const useRenderScene = ({ apexCoord, startPointCoord }: Props) => {
  const [renderedCount, setRenderedCount] = useState<number>(0);

  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const frameCount = useRef(0);

  const findMidpoint = (apex: Coord, point: Coord) => {
    const x = (apex.x + point.x) / 2;
    const y = (apex.y + point.y) / 2;
    return { x, y };
  };

  const circlesData: Coord[] = [];

  let nextPoint = { x: 0, y: 0 };

  for (let index = 0; index < 10000; index++) {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomApex = apexCoord[randomIndex];
    const firstPoint = index ? nextPoint : startPointCoord;
    const { x, y } = findMidpoint(randomApex, firstPoint);
    nextPoint = { x, y };
    circlesData.push({ x, y });
  }

  useFrame(() => {
    frameCount.current += 1;
    if (frameCount.current % 1 === 0) {
      if (meshRef.current && renderedCount < circlesData.length) {
        const count = Math.min(renderedCount + 100, circlesData.length);

        for (let i = renderedCount; i < count; i++) {
          const { x, y } = circlesData[i];
          const dummy = new THREE.Object3D();
          dummy.position.set(x, y, 0);
          dummy.updateMatrix();
          meshRef.current.setMatrixAt(i, dummy.matrix);
        }

        if (count !== renderedCount) {
          meshRef.current.instanceMatrix.needsUpdate = true;
          setRenderedCount(count);
        }
      }
    }
  });
  return {
    circlesData,
    meshRef,
  };
};
