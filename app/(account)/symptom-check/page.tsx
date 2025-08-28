import { Metadata } from "next";
import { SymptomChecker } from "./symptom-check";

export const metadata: Metadata = {
  title: "Symptom Checker",
};

export default async function Page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const { callbackUrl } = searchParams;

  return <SymptomChecker callbackUrl={callbackUrl || "/dashboard"} />;
}
