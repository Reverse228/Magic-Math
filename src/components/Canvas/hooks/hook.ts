import { useMouse, useSidebar } from "@context";

export const useCanvas = () => {
  const [{ mouseCoord }, { handleSetCoord }] = useMouse();
  const [{ isSidebarOpen }, { handleSidebar }] = useSidebar();

  const handleMouseCoord = (event: React.MouseEvent) => {
    if (mouseCoord.length) {
      handleSetCoord({ x: event.clientX, y: event.clientY });
    } else {
      handleSidebar(false);
      setTimeout(() => {
        handleSetCoord({ x: event.clientX, y: event.clientY });
      }, 800);
    }
  };

  return {
    isSidebarOpen,
    handles: {
      handleMouseCoord,
    },
  };
};
