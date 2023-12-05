import { useMouse } from "@/utils/context";

export const useControlPanel = () => {
  const [{ mouseCoord }] = useMouse();

  return {
    mouseCoord,
  };
};
