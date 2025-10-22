"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-[40px] w-[40px] rounded-lg p-2"
        disabled
      />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-lg p-2 text-text transition-colors hover:bg-accent hover:text-text-on-accent"
    >
      {resolvedTheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
