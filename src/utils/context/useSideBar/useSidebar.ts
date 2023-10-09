import { useContext } from "react";

import { SidebarContext } from "./useSideBarProvider";

export const useSidebar = () => useContext(SidebarContext);
