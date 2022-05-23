import React from "react";
import { useSession } from "next-auth/react";
import SidebarROw from "./SidebarRow";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarROw Icon={UserIcon} title="Friends" />
      <SidebarROw Icon={UserGroupIcon} title="Groups" />
      <SidebarROw Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarROw Icon={DesktopComputerIcon} title="Watch" />
      <SidebarROw Icon={CalendarIcon} title="Events" />
      <SidebarROw Icon={ClockIcon} title="Memories" />
      <SidebarROw Icon={ChevronDownIcon} title="See more" />
    </div>
  );
};

export default Sidebar;
