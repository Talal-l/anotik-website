"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.body;
    const bodyWrapper = document.querySelector(".body-wrapper");
    const isCurrentlyDark = body.classList.contains("dark");
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    const bodyWrapper = document.querySelector(".body-wrapper");
    
    if (isDark) {
      body.classList.remove("dark");
      bodyWrapper?.classList.remove("dark");
      setIsDark(false);
    } else {
      body.classList.add("dark");
      bodyWrapper?.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}
