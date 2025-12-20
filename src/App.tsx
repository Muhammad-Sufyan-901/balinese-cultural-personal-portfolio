import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers";

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Toaster
        richColors
        position="bottom-center"
      />

      <Outlet />
    </ThemeProvider>
  );
}
