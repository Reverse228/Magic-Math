import type { Coord } from "@types";

export type MouseState = {
  mouseCoord: Coord[];
};

export type MouseActions = {
  handleSetCoord: (value: Coord) => void;
  handleClearCoord: () => void;
};
