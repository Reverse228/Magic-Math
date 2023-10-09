import type { Dispatch, SetStateAction } from "react";

export type SidebarState = {
  isSidebarOpen: boolean;
  siteBarStatus: number;
};

export type SidebarActions = {
  handleSidebar: Dispatch<SetStateAction<boolean>>;
};
