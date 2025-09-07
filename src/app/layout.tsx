import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tal Shimoni - Music Producer & Sound Designer",
  description: "Creating immersive audio experiences that connect with souls",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}