import React from "react";
import { Box } from "@/components/common/Box";
import { AllPortfolioSectionComponent } from "@/components/portfolio";

export default function AllPortfolioPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      className="min-h-screen"
    >
      {/* ========== ALL PORTFOLIO SECTION ========== */}
      <AllPortfolioSectionComponent />
    </Box>
  );
}
