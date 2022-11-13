import create from "zustand";
import config from "../../site.config";

type Store = {
  isDark: boolean;
  changeTheme: () => void;
};

export const zustantStore = create<Store>((set) => ({
  isDark: localStorage.getItem("theme")
    ? localStorage.getItem("theme") === "dark"
    : config.defaultTheme === "dark",

  changeTheme: () => {
    set((state) => {
      localStorage.setItem("theme", state.isDark ? "light" : "dark");
      return { isDark: !state.isDark };
    });
  },
}));
