import React from "react";
import { Box } from "@/components/common/Box";
import {
  HomeSectionComponent,
  AboutSectionComponent,
  SkillSectionComponent,
  EducationSectionComponent,
  ExperienceSectionComponent,
  PortfolioSectionComponent,
  GetInTouchComponent,
  ArticleSectionComponent,
  ContactSectionComponent,
} from "@/components/home";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { PageLayout } from "@/layouts";

export default function HomePage(): React.JSX.Element {
  return (
    <Box
      as="main"
      id="main-container"
      className="min-h-screen"
    >
      {/* ========== HOME SECTION ========== */}
      <HomeSectionComponent />

      <PageLayout>
        {/* ========== ABOUT SECTION ========== */}
        <AboutSectionComponent />

        {/* ========== SKILL SECTION ========== */}
        <SkillSectionComponent />

        {/* ========== EDUCATION SECTION ========== */}
        <EducationSectionComponent />

        {/* ========== EDUCATION SECTION ========== */}
        <ExperienceSectionComponent />

        {/* ========== PORTFOLIO SECTION ========== */}
        <PortfolioSectionComponent />

        {/* ========== GET IN TOUCH SECTION ========== */}
        <GetInTouchComponent />

        {/* ========== ARTICLE SECTION ========== */}
        <ArticleSectionComponent />

        {/* ========== CONTACT SECTION ========== */}
        <ContactSectionComponent />
      </PageLayout>

      {/* ========== SCROLL TO TOP ========== */}
      <ScrollToTopButton />
    </Box>
  );
}
