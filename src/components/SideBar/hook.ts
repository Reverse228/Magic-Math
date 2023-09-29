import { useEffect, useState } from "react";

export const useSideBar = (expand: boolean) => {
  const [hoverExpand, setHoverExpand] = useState<boolean | undefined>(
    undefined
  );

  function handleMouseEnter() {
    !expand && setHoverExpand(true);
  }

  function handleMouseLeave() {
    !expand && setHoverExpand(false);
  }

  useEffect(() => {
    setHoverExpand(undefined);
  }, [expand]);

  return {
    hoverExpand,
    expandSideBar: hoverExpand ?? expand,
    handles: {
      handleMouseEnter,
      handleMouseLeave,
    },
  };
};
