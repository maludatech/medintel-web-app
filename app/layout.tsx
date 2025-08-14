import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants";
import { ClientThemeProvider } from "../components/shared/ClientThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <ClientThemeProvider>
          {children}
          <Toaster richColors />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
