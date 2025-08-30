import { AuthNavbar } from "@/components/shared/Auth/AuthNavbar";
import { AuthFooter } from "@/components/shared/Auth/AuthFooter";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0D200C] bg-[#F8F8F8]">
      <AuthNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <AuthFooter />
    </div>
  );
}
