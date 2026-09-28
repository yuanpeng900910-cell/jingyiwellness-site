import type { Metadata } from "next";
import { ImageProtection } from "@/components/ImageProtection";
import "./globals.css";

export const metadata: Metadata = {
  title: "京颐养方 JINGYI WELLNESS｜京医古法，颐养东方",
  description: "探索京颐养方的草本茶饮、生活好物与东方养生礼。让一杯茶饮、一件草本好物，把轻养带入日常。",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><ImageProtection />{children}</body></html>;
}
