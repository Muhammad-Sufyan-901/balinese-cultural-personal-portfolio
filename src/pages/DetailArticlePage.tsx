import React from "react";
import { Box } from "@/components/common/Box";
import { useParams } from "react-router";
import { DetailArticleSectionComponent } from "@/components/article";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";

export default function DetailArticlePage(): React.JSX.Element {
  const { slug } = useParams();

  return (
    <Box
      as="main"
      id="main-container"
      className="min-h-screen"
    >
      {/* ========== DETAIL ARTICLE SECTION ========== */}
      <DetailArticleSectionComponent slug={slug as string} />

      {/* ========== SCROLL TO TOP ========== */}
      <ScrollToTopButton />
    </Box>
  );
}
