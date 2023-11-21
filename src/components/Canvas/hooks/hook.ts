import { useMouse } from "@context";

export const useCanvas = () => {
  const [, { handleSetCoord }] = useMouse();

  const handleMouseCoord = (event: React.MouseEvent) => {
    handleSetCoord({ x: event.clientX, y: event.clientY });
  };

  return {
    handles: {
      handleMouseCoord,
    },
  };
};
