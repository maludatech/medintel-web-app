import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/account/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      className="flex w-full !gap-0 !p-0 !m-0"
      style={{ "--sidebar-width": "12rem" } as React.CSSProperties}
    >
      <div className="flex min-h-screen w-full !gap-0">
        <AppSidebar />
        <main className="flex flex-col flex-1 min-h-screen dark:bg-[rgb(13,32,12)] bg-[#F8F8F8] !m-0 !p-0">
          <SidebarTrigger className="hidden md:flex cursor-pointer p-2" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
