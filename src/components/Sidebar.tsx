
import { Computer, Settings, Palette, Info, Package } from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Software & Apps",
    icon: Package,
    path: "/software",
  },
  {
    label: "Optimize",
    icon: Computer,
    path: "/optimize",
  },
  {
    label: "Customize",
    icon: Palette,
    path: "/customize",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    label: "About",
    icon: Info,
    path: "/about",
  },
];

export default function Sidebar() {
  return (
    <SidebarComponent>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>philippdebloasyou</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}
