import React from "react";
import { Box } from "@/components/common/Box";
import { useParams } from "react-router";
import { DetailArticleSectionComponent } from "@/components/article";

export default function DetailArticlePage(): React.JSX.Element {
  const { slug } = useParams();

  return (
    <Box
      as="main"
      className="min-h-screen"
    >
      {/* ========== DETAIL ARTICLE SECTION ========== */}
      <DetailArticleSectionComponent slug={slug as string} />
    </Box>
  );
}
