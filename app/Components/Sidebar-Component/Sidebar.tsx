"use client";
import { SideBarItemInterface } from "../Sidebar-Item-Component/Sidebar-Item-Component";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "../ui/sidebar";
import { House, Inbox, Calendar, Search, Settings } from "lucide-react";

const SideBarComponent = () => {
  const items: SideBarItemInterface[] = [
    {
      title: "Home",
      url: "/",
      icon: <House className="h-6 w-6" />,
    },
    {
      title: "Inbox",
      url: "#",
      icon: <Inbox className="h-6 w-6" />,
    },
    {
      title: "Calendar",
      url: "#",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Search",
      url: "#",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings className="h-6 w-6" />,
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBarComponent;
