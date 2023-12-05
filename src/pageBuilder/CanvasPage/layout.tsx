import { CanvasLayer, ControlPanel } from "@components";

import { MainWrapper } from "..";

import type { FC } from "react";

export const CanvasPage: FC = () => {
  return (
    <MainWrapper>
      <ControlPanel />
      <CanvasLayer />
    </MainWrapper>
  );
};
