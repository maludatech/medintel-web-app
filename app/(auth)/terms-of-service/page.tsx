import { Metadata } from "next";
import { TermsOfService } from "./terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  return <TermsOfService />;
}
