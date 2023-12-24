import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { promises as fs } from "fs";
import { ConfigProvider } from "@/store/config-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = JSON.parse(
    await fs.readFile(process.cwd() + "/src/config/config.json", "utf-8")
  );

  return (
    <html lang="en">
      <ConfigProvider config={config}>
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
