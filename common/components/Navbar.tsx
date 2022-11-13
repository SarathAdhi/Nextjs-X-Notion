"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { zustantStore } from "../utils/store";
import clsx from "clsx";
import config from "../../site.config";

export const Navbar = () => {
  const { isDark, changeTheme } = zustantStore();

  if (!config.showNavbar) return <></>;

  return (
    <header
      className={clsx(
        "w-full px-4 py-3 z-[9999] flex justify-between items-center border-b",
        isDark ? "bg-[#191919]" : "bg-white"
      )}
    >
      <h1
        className={clsx(
          "text-2xl font-bold truncate mr-4",
          isDark ? "text-white" : "text-black"
        )}
      >
        {config.navigationBarTitle}
      </h1>

      <div className="flex items-center">
        <button onClick={changeTheme}>
          {isDark ? (
            <SunIcon className="w-6 h-6 text-sky-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-sky-500" />
          )}
        </button>
      </div>
    </header>
  );
};
