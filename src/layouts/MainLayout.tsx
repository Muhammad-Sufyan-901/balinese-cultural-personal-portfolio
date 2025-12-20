import React from "react";
import { Outlet } from "react-router";
import { Box } from "@/components/common/Box";
import { FooterComponent, HeaderComponent } from "@/components/layout";

export default function MainLayout(): React.JSX.Element {
  return (
    <Box
      as="main"
      className="overflow-x-hidden"
    >
      {/* ========== HEADER ========== */}
      <HeaderComponent />

      {/* ========== PAGE CONTENT RENDERER ========== */}
      <Outlet />

      {/* ========== FOOTER ========== */}
      <FooterComponent />
    </Box>
  );
}
