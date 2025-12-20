import React from "react";
import { Box } from "@/components/common/Box";
import { AllArticleSectionComponent } from "@/components/article";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";

export default function AllArticlePage(): React.JSX.Element {
  return (
    <Box
      as="main"
      id="main-container"
      className="min-h-screen"
    >
      {/* ========== ALL ARTICLE SECTION ========== */}
      <AllArticleSectionComponent />

      {/* ========== SCROLL TO TOP ========== */}
      <ScrollToTopButton />
    </Box>
  );
}
