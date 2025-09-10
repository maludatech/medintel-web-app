import { Metadata } from "next";
import { EditProfile } from "./edit-profile";

export const metadata: Metadata = {
  title: "Edit Profile",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { callbackUrl } = searchParams;

  return <EditProfile callbackUrl={callbackUrl || "/sign-in"} />;
}
