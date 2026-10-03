import type { Metadata } from "next";
import { JingyiTemplateHome } from "@/components/JingyiTemplateHome";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <JingyiTemplateHome />;
}
