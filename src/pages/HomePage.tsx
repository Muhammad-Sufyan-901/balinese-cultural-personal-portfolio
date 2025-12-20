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

export default function HomePage(): React.JSX.Element {
  return (
    <Box
      as="main"
      className="min-h-screen"
    >
      {/* ========== HOME SECTION ========== */}
      <HomeSectionComponent />

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
    </Box>
  );
}
