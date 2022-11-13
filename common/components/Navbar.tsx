"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { zustantStore } from "../utils/store";
import clsx from "clsx";
import config from "../../site.config";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const { isDark, changeTheme } = zustantStore();

  if (!config.showNavbar) return <></>;

  return (
    <header className="w-full px-4 py-3 z-[9999] flex justify-between items-center border-b dark:bg-[#191919] bg-white">
      <Link
        href="/"
        className="text-2xl font-bold truncate mr-4 dark:text-white text-black"
      >
        {config.navigationBarTitle}
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="https://global-vulture-225.notion.site/Resume-b9a259743fdb4f06b2fd53011631a9f9"
          className="p-1 flex items-center rounded-md font-semibold dark:bg-white"
        >
          <Image
            src="/assets/notion-logo.svg"
            width={20}
            height={20}
            alt="notion"
          />
        </Link>

        <Link
          href="/add/page"
          className="p-[1px] rounded-md font-semibold dark:bg-white text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            width={26}
            height={26}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>

        <button onClick={changeTheme}>
          {isDark ? (
            <SunIcon className="w-7 h-7 text-sky-500" />
          ) : (
            <MoonIcon className="w-7 h-7 text-sky-500" />
          )}
        </button>
      </div>
    </header>
  );
};
