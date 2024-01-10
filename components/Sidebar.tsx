"use client";

import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome ,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      { label: "Search", active: pathname === "/search", href: "/search" },
    ],
    []
  );

  return <div>{children}</div>;
};

export default Sidebar;
