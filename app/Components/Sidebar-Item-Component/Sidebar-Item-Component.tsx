import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export interface SideBarItemInterface {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const SidebarItemComponent = (props: SideBarItemInterface) => {
  return (
    <SidebarMenuItem key={props.title}>
      <SidebarMenuButton asChild>
        <a href={props.url}>
          {props.icon}
          <span>{props.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default SidebarItemComponent;
