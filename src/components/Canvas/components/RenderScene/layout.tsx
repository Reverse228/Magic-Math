import React from "react";

import { Circle } from "..";

import type { FC } from "react";
import type { Props } from "./types";

import { useRenderScene } from "./hook";

export const RenderScene: FC<Props> = (props) => {
  const { meshRef, circlesData } = useRenderScene(props);

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, circlesData.length]}
    >
      <Circle type="simplePoint" />
    </instancedMesh>
  );
};
