"use client";

import { Navbar } from "../common/components/Navbar";
import "./globals.css";
import clsx from "clsx";
import { zustantStore } from "../common/utils/store";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

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
    <html className={clsx(isDark && "dark")}>
      <head />
      <body className="flex flex-col transition min-h-screen dark:bg-[#191919] bg-white">
        {!isLoading && (
          <>
            <Navbar />
            <main className="flex flex-col flex-1">{children}</main>
          </>
        )}

        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
