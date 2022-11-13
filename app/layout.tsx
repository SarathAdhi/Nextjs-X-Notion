"use client";

import { Navbar } from "../common/components/Navbar";
import "./globals.css";
import clsx from "clsx";
import { zustantStore } from "../common/utils/store";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDark, setTheme } = zustantStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (!isLoading) setTheme();
  }, [isLoading]);

  return (
    <html>
      <head />
      <body
        className={clsx(
          "flex flex-col transition min-h-screen",
          isDark ? "bg-[#191919]" : "bg-white"
        )}
      >
        {!isLoading && (
          <>
            <Navbar />
            <main className="flex flex-col flex-1">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
