"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BrainCircuit,
  BookCheck,
  LayoutDashboard,
  History,
  UserPen,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { APP_NAME } from "@/lib/constants";
import images from "@/public/assets/images";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Symptom Check", url: "/symptom-check", icon: BookCheck },
  { title: "History", url: "/history", icon: History },
  { title: "Profile", url: "/profile", icon: UserPen },
];

export default function AppSidebar() {
  const currentPath = usePathname();
  const { user, logout } = useAuthStore();
  const { setOpenMobile } = useSidebar(); // <-- ShadCN mobile control
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  // Detect mobile after hydration
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically open sidebar on desktop
  useEffect(() => {
    if (!isMobile) setSidebarOpen(true);
  }, [isMobile]);

  // Auto-close sidebar on mobile click
  const handleLinkClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
      setOpenMobile(false); // <-- Close ShadCN mobile sidebar
    }
  };

  return (
    <Sidebar
      className={`w-48 max-w-48 fixed h-full z-40 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={
        {
          "--sidebar-width": "12rem",
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }
    >
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
                    onClick={handleLinkClick}
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
              onClick={() => {
                logout();
                handleLinkClick();
              }}
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
