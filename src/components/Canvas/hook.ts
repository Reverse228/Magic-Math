import { useEffect, useState } from "react";

import { useSidebar } from "@context";

import type { WindowSize } from "@types";

export const useCanvas = () => {
  const [{ siteBarStatus }] = useSidebar();

  const [, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth - siteBarStatus,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [siteBarStatus]);

  return {};
};
