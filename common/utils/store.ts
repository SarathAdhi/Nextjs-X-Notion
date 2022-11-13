"use client";

import create from "zustand";
import config from "../../site.config";

type Store = {
  isDark: boolean;
  setTheme: () => void;
  changeTheme: () => void;
};

export const zustantStore = create<Store>((set) => ({
  isDark: config.defaultTheme === "dark",

  setTheme: () => {
    const isDark = localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : config.defaultTheme === "dark";

    set({ isDark });
  },

  changeTheme: () => {
    set((state) => {
      localStorage.setItem("theme", state.isDark ? "light" : "dark");
      return { isDark: !state.isDark };
    });
  },
}));
