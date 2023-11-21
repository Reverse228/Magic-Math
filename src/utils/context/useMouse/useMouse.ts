import { useContext } from "react";

import { MouseContext } from "./useMouseProvider";

export const useMouse = () => useContext(MouseContext);
