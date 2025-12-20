import React from "react";
import { Box } from "@/components/common/Box";
import { AllPortfolioSectionComponent } from "@/components/portfolio";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";

export default function AllPortfolioPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      id="main-container"
      className="min-h-screen"
    >
      {/* ========== ALL PORTFOLIO SECTION ========== */}
      <AllPortfolioSectionComponent />

      {/* ========== SCROLL TO TOP ========== */}
      <ScrollToTopButton />
    </Box>
  );
}
