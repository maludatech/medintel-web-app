import { create } from "zustand";

const THEME_COLOR_KEY = "theme-color";

// Same map as ThemeColorSwitcher
const themeColors: Record<string, string> = {
  "theme-blue": "oklch(0.705 0.212 242)",
  "theme-red": "oklch(0.65 0.22 27)",
  "theme-green": "oklch(0.75 0.2 142)",
  "theme-purple": "oklch(0.65 0.2 300)",
  "theme-yellow": "oklch(0.95 0.2 100)",
  "theme-orange": "oklch(0.78 0.22 65)",
  "theme-aqua": "oklch(0.8 0.23 185)",
  "theme-rose": "oklch(0.72 0.23 20)",
};

interface ThemeColorStore {
  themeName: string; // "theme-green"
  colorValue: string; // "oklch(...)"
  setThemeColor: (name: string) => void;
}

export const useThemeStore = create<ThemeColorStore>((set) => {
  let initialTheme = "theme-green";

  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(THEME_COLOR_KEY);
    if (stored) {
      initialTheme = stored;

      const existingThemes = Array.from(document.body.classList).filter((c) =>
        c.startsWith("theme-")
      );
      existingThemes.forEach((c) => document.body.classList.remove(c));
      document.body.classList.add(initialTheme);
    }
  }

  return {
    themeName: initialTheme,
    colorValue: themeColors[initialTheme] || "oklch(0.75 0.2 142)",

    setThemeColor: (name: string) => {
      // Update DOM
      if (typeof document !== "undefined") {
        const existingThemes = Array.from(document.body.classList).filter((c) =>
          c.startsWith("theme-")
        );
        existingThemes.forEach((c) => document.body.classList.remove(c));
        document.body.classList.add(name);
      }

      // Save
      if (typeof window !== "undefined") {
        localStorage.setItem(THEME_COLOR_KEY, name);
      }

      // Update store
      set({ themeName: name, colorValue: themeColors[name] });
    },
  };
});
