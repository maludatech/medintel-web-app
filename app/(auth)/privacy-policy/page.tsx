import { Metadata } from "next";
import { PrivacyPolicy } from "./privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  return <PrivacyPolicy />;
}
