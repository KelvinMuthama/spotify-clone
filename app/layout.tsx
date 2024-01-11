import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Sidebar from "@/components/Sidebar";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
