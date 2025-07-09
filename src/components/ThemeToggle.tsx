"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(initialDark);
    applyTheme(initialDark);
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      applyTheme(isDark);
    }
  }, [isDark]);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  if (isDark === null) return null;

  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className={`
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md hover:opacity-90 transition border
         border-[var(--color-secondary-foreground)] text-[var(--color-secondary-foreground)]
         dark:border-[var(--color-secondary-foreground-dark)] dark:text-[var(--color-secondary-foreground-dark)]
        `}
    >
      {isDark ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </button>
  );
}
