import { createContext, useEffect, useState } from "react";
import { noop } from "lodash";

import { CONST } from "@constant";

import type { ReactNode } from "react";
import type { SidebarState, SidebarActions } from "./types";

export const SidebarContext = createContext<
  [state: SidebarState, actions: SidebarActions]
>([
  { isSidebarOpen: true, siteBarStatus: 343 },
  {
    handleSidebar: noop,
  },
]);

export const SidebarStateProvider = ({ children }: { children: ReactNode }) => {
  const { SIDE_BAR_CLOSE_WIDTH, SIDE_BAR_OPEN_WIDTH } = CONST;

  const [isSidebarOpen, handleSidebar] = useState(true);
  const [siteBarStatus, setSiteBarStatus] =
    useState<number>(SIDE_BAR_OPEN_WIDTH);

  useEffect(() => {
    setSiteBarStatus(
      isSidebarOpen ? SIDE_BAR_OPEN_WIDTH : SIDE_BAR_CLOSE_WIDTH
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSidebarOpen]);

  return (
    <SidebarContext.Provider
      value={[
        {
          isSidebarOpen,
          siteBarStatus,
        },
        { handleSidebar },
      ]}
    >
      {children}
    </SidebarContext.Provider>
  );
};
