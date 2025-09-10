import { Metadata } from "next";
import { History } from "./history";

export const metadata: Metadata = {
  title: "History",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { callbackUrl } = searchParams;

  return <History callbackUrl={callbackUrl || "/sign-in"} />;
}
