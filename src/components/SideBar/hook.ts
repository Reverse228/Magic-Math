import { useEffect, useState } from "react";

import { useSidebar } from "@context";

export const useSideBar = () => {
  const [{ isSidebarOpen }] = useSidebar();

  const [hoverExpand, setHoverExpand] = useState<boolean | undefined>(
    undefined
  );

  function handleMouseEnter() {
    !isSidebarOpen && setHoverExpand(true);
  }

  function handleMouseLeave() {
    !isSidebarOpen && setHoverExpand(false);
  }

  useEffect(() => {
    setHoverExpand(undefined);
  }, [isSidebarOpen]);

  return {
    hoverExpand,
    expandSideBar: hoverExpand ?? isSidebarOpen,
    handles: {
      handleMouseEnter,
      handleMouseLeave,
    },
  };
};
