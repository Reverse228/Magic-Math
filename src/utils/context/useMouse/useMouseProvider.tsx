import { createContext, useState } from "react";
import { noop } from "lodash";

import type { Coord } from "@types";
import type { ReactNode } from "react";
import type { MouseActions, MouseState } from "./types";

export const MouseContext = createContext<
  [state: MouseState, actions: MouseActions]
>([
  {
    mouseCoord: [],
  },
  {
    handleSetCoord: noop,
    handleClearCoord: noop,
  },
]);

export const MouseProvider = ({ children }: { children: ReactNode }) => {
  const [mouseCoord, setMouseCoord] = useState<Coord[]>([]);

  const handleSetCoord = (value: Coord) => {
    setMouseCoord([...mouseCoord, value]);
  };

  const handleClearCoord = () => {
    setMouseCoord([]);
  };

  return (
    <MouseContext.Provider
      value={[{ mouseCoord }, { handleSetCoord, handleClearCoord }]}
    >
      {children}
    </MouseContext.Provider>
  );
};
