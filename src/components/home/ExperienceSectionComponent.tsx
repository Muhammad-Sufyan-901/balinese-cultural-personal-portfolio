import React from "react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { ExperienceTimelineItem } from "@/components/home/fragments";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import {
  boldWordsToReact,
  slideInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/lib";
import { experienceList } from "@/constants";

export default function ExperienceSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="pengalaman"
      className="pt-16 lg:pt-30 pb-12"
    >
      {/* ========== EXPERIENCE SECTION TITLE ========== */}
      <SectionTitle title="Pengalaman Saya" />

      {/* ========== EXPERIENCE SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl mt-4 lg:mt-8"
      >
        {/* ========== EXPERIENCE SECTION SUBTITLE & DESCRIPTION ========== */}
        <Box className="flex flex-col gap-2">
          <Heading
            level={4}
            as="motion.h4"
            variants={textVariantTransition(0.4)}
            className="text-primary font-bold mb-1"
          >
            Pengalaman Saya Sampai Sekarang
          </Heading>

          <Text
            variant="small"
            as="motion.p"
            variants={textVariantTransition(0.5)}
            className="text-foreground text-base"
          >
            {boldWordsToReact(
              "Berikut adalah beberapa Pengalaman Saya di dunia profesional sampai sekarang.",
              ["Pengalaman Saya"]
            )}
          </Text>
        </Box>

        {/* ========== EXPERIENCE SECTION TIMELINE ITEM ========== */}
        <Box className="mt-12">
          {experienceList.map(
            (experience, index): React.ReactNode => (
              <Box
                as="motion.div"
                key={`experience-${index}`}
                variants={slideInTransition(
                  index % 2 === 0 ? "left" : "right",
                  "spring",
                  index * 0.5,
                  1
                )}
              >
                <ExperienceTimelineItem
                  index={index + 1}
                  maxLength={experienceList.length}
                  {...experience}
                />
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
}
