"use client";

import { Navbar } from "../common/components/Navbar";
import "./globals.css";
import clsx from "clsx";
import { zustantStore } from "../common/utils/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") return <></>;

  const { isDark } = zustantStore();

  return (
    <html>
      <head />
      <body
        className={clsx(
          "flex flex-col transition min-h-screen",
          isDark ? "bg-[#191919]" : "bg-white"
        )}
      >
        <Navbar />

        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}
