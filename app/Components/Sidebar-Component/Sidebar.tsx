"use client";
//Components
import SidebarItemComponent, {
  SideBarItemInterface,
} from "../Sidebar-Item-Component/Sidebar-Item-Component";
//Utilits
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
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
          <SidebarGroupContent className="mt-10">
            <SidebarMenu className="flex flex-col gap-4">
              {items.map((item) => (
                <Button
                  key={item.title}
                  variant={"outline"}
                  className="rounded"
                >
                  <SidebarItemComponent
                    key={item.title}
                    title={item.title}
                    url={item.url}
                    icon={item.icon}
                  />
                </Button>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBarComponent;
