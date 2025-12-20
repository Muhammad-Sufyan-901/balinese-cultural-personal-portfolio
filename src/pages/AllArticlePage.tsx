import React from "react";
import { Box } from "@/components/common/Box";
import { AllArticleSectionComponent } from "@/components/article";

export default function AllArticlePage(): React.JSX.Element {
  return (
    <Box
      as="main"
      className="min-h-screen"
    >
      {/* ========== ALL ARTICLE SECTION ========== */}
      <AllArticleSectionComponent />
    </Box>
  );
}
