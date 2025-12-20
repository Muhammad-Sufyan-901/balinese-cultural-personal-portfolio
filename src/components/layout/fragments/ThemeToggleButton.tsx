import * as React from "react";
import { Box } from "@/components/common/Box";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function ThemeToggleButton(): React.JSX.Element {
  const { theme, setTheme } = useTheme();

  // Determine current theme (resolve "system" to actual theme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light"
  );

  React.useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  const toggleColorMode = () => {
    if (theme === "system") {
      // If currently system, switch to opposite of resolved theme
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      // Toggle between light and dark
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <Box
      as="button"
      role="button"
      aria-label="Theme Toggle Button"
      onClick={toggleColorMode}
      className={cn(
        "p-5 rounded-full shadow-lg transition-all duration-200",
        "hover:scale-110 active:scale-95 cursor-pointer",
        "flex items-center justify-center",
        resolvedTheme === "dark"
          ? "bg-white/10 text-white"
          : "bg-white text-gray-900"
      )}
    >
      {resolvedTheme === "light" ? (
        <BsMoonFill className="w-4 h-4" />
      ) : (
        <BsSunFill className="w-4 h-4" />
      )}
    </Box>
  );
}
