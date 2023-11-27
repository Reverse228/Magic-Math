import React from "react";

import { Circle } from "..";

import type { FC } from "react";
import type { Props } from "./types";

import { useRenderScene } from "./hook";

export const RenderScene: FC<Props> = (props) => {
  const { simplePoints } = useRenderScene(props);

  return simplePoints.map(({ x, y }) => (
    <Circle key={x * y} type="simplePoint" position={[x, y, 0]} />
  ));
};
