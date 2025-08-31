"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BookCheck,
  BrainCircuit,
  History,
  LayoutDashboard,
  LogOut,
  UserPen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { APP_NAME } from "@/lib/constants";
import images from "@/public/assets/images";

// Menu items.
const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Symptom Check", url: "/symptom-check", icon: BookCheck },
  { title: "History", url: "/history", icon: History },
  { title: "Profile", url: "/profile", icon: UserPen },
];

export default function AppSidebar() {
  const currentPath = usePathname();
  const { user, logout } = useAuthStore();
  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-4 h-full justify-between">
          <h1 className="pt-8 group flex items-center gap-1 rounded-xl">
            <BrainCircuit
              size={32}
              strokeWidth={1.75}
              className="text-foreground transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span className="text-xl text-primary font-semibold tracking-wide">
              {APP_NAME}
            </span>
          </h1>
          <SidebarGroupContent className="h-2/4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link
                    href={item.url}
                    className={`text-base flex items-center gap-2 px-1.5 py-2.5 mb-4 rounded-md${
                      isActive(item.url) ? " bg-primary/30" : " hover:bg-accent"
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
              <Image
                src={images.profile}
                width={50}
                height={50}
                alt="User Avatar"
                className="rounded-full"
              />
              <h4>{user?.name}</h4>
            </div>
            <Button
              onClick={logout}
              className="flex items-center cursor-pointer w-full bg-red-500 text-white hover:bg-red-600"
            >
              <LogOut />
              Log Out
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
