import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-white rounded-full p-3 shadow-lg"
    >
      {theme === "light" ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </button>
  );
}