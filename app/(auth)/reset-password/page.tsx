import { Metadata } from "next";
import { ResetPassword } from "./reset-password";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { callbackUrl } = searchParams;

  return <ResetPassword callbackUrl={callbackUrl || "/dashboard"} />;
}
