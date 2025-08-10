import { AuthNavbar } from "@/components/shared/Auth/AuthNavbar";
import { AuthFooter } from "@/components/shared/Auth/AuthFooter";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <AuthFooter />
    </div>
  );
}
