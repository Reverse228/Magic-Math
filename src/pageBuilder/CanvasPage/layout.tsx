import { CanvasLayer } from "@components";

import { MainWrapper } from "..";

import type { FC } from "react";

export const CanvasPage: FC = () => {
  return (
    <MainWrapper>
      <CanvasLayer />
    </MainWrapper>
  );
};
