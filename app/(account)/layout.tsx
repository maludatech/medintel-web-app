import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0D200C] bg-[#F8F8F8]">
      <SidebarProvider>
        <main className="flex-1">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
