import { useState } from "react";

import type { ChangeEvent } from "react";

export const useSpeedControl = () => {
  const [speed, setSpeed] = useState<number>(50);

  const handleChangeSpeed = (e: ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value));
  };

  return {
    speed,
    handles: {
      handleChangeSpeed,
    },
  };
};
