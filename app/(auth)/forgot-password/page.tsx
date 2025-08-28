import { Metadata } from "next";
import { ForgotPassword } from "./forgot-password";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { callbackUrl } = searchParams;

  return <ForgotPassword callbackUrl={callbackUrl || "/dashboard"} />;
}
