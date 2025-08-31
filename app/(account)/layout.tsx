import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/account/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col min-h-screen w-full dark:bg-[rgb(13,32,12)] bg-[#F8F8F8]">
        <SidebarTrigger className="hidden md:flex cursor-pointer" />
        {children}
      </main>
    </SidebarProvider>
  );
}
