import React from "react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { Image } from "@/components/common/Image";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { SkillTechStackCard } from "@/components/home/fragments";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  icons,
  mobileDevelopmentSkillList,
  websiteDevelopmentSkillList,
} from "@/constants";
import {
  boldWordsToReact,
  fadeInTransition,
  slideInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/lib";

export default function SkillSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="kemampuan"
      className="pt-16 lg:pt-30 pb-12"
    >
      {/* ========== SKILL SECTION TITLE ========== */}
      <SectionTitle title="Kemampuan Saya" />

      {/* ========== SKILL SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl mt-4 lg:mt-8"
      >
        {/* ========== SKILL SECTION WEB DEV TECH STACK CONTENT ========== */}
        <Box className="grid grid-cols-1 lg:grid-cols-[70%_25%] gap-10 lg:gap-[5%] place-items-center">
          <Box
            as="motion.div"
            variants={fadeInTransition("left", "spring", 0.1, 0.5)}
          >
            {/* ========== SKILL SECTION WEB DEV TECH STACK CARD ========== */}
            <Card className="w-full h-full py-10 rounded-sm border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle>
                  <Heading
                    level={4}
                    as="motion.h4"
                    variants={textVariantTransition(0.4)}
                    className="text-primary font-bold mb-1"
                  >
                    Website Development
                  </Heading>
                </CardTitle>

                <CardDescription>
                  <Text
                    variant="small"
                    as="motion.p"
                    variants={textVariantTransition(0.5)}
                    className="text-foreground text-base"
                  >
                    {boldWordsToReact(
                      "Berikut adalah teknologi yang saya kuasai untuk Website Development",
                      ["Website Development"]
                    )}
                  </Text>
                </CardDescription>
              </CardHeader>

              {/* ========== SKILL SECTION WEB DEV TECH STACK LIST ========== */}
              <CardContent className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {websiteDevelopmentSkillList.map(
                  (skill, index): React.ReactNode => (
                    <Box
                      as="motion.div"
                      key={`skill-${index} : ${skill.title}`}
                      variants={fadeInTransition(
                        "down",
                        "spring",
                        ++index * 0.25,
                        0.75
                      )}
                    >
                      <SkillTechStackCard {...skill} />
                    </Box>
                  )
                )}
              </CardContent>
            </Card>
          </Box>

          {/* ========== SKILL SECTION WEB DEV TECH STACK ORNAMENT ========== */}
          <Box
            as="motion.div"
            variants={fadeInTransition("right", "spring", 0.2, 1)}
            className="hidden w-full h-full lg:flex flex-col justify-center items-end"
          >
            <Image
              src={icons.sectionOrnament}
              alt="Skill Section Ornament"
              width={200}
            />
          </Box>
        </Box>

        {/* ========== SKILL SECTION ARROW ORNAMENT ========== */}
        <Box
          as="motion.div"
          variants={slideInTransition("up", "spring", 0.5, 1)}
          className="flex justify-center items-center my-10"
        >
          <Image
            src={icons.arrow}
            alt="Arrow Ornament"
            width={150}
            height={150}
          />
        </Box>

        {/* ========== SKILL SECTION MOBILE DEV TECH STACK CONTENT ========== */}
        <Box className="grid grid-cols-1 lg:grid-cols-[25%_70%] gap-10 lg:gap-[5%] place-items-center">
          <Box
            as="motion.div"
            variants={fadeInTransition("left", "spring", 0.1, 0.5)}
            className="order-2"
          >
            {/* ========== SKILL SECTION MOBILE DEV TECH STACK CARD ========== */}
            <Card className="w-full h-full py-10 rounded-sm border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle>
                  <Heading
                    level={4}
                    as="motion.h4"
                    variants={textVariantTransition(0.4)}
                    className="text-primary font-bold mb-1"
                  >
                    Mobile Development
                  </Heading>
                </CardTitle>

                <CardDescription>
                  <Text
                    variant="small"
                    as="motion.p"
                    variants={textVariantTransition(0.5)}
                    className="text-foreground text-base"
                  >
                    {boldWordsToReact(
                      "Berikut adalah teknologi yang saya kuasai untuk Mobile Development",
                      ["Mobile Development"]
                    )}
                  </Text>
                </CardDescription>
              </CardHeader>

              {/* ========== SKILL SECTION MOBILE DEV TECH STACK LIST ========== */}
              <CardContent className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {mobileDevelopmentSkillList.map(
                  (skill, index): React.ReactNode => (
                    <Box
                      as="motion.div"
                      key={`skill-${index} : ${skill.title}`}
                      variants={fadeInTransition(
                        "down",
                        "spring",
                        ++index * 0.25,
                        0.75
                      )}
                    >
                      <SkillTechStackCard {...skill} />
                    </Box>
                  )
                )}
              </CardContent>
            </Card>
          </Box>

          {/* ========== SKILL SECTION MOBILE DEV TECH STACK ORNAMENT ========== */}
          <Box
            as="motion.div"
            variants={fadeInTransition("right", "spring", 0.2, 1)}
            className="hidden lg:flex w-full h-full flex-col justify-center items-start"
          >
            <Image
              src={icons.sectionOrnament}
              alt="Skill Section Ornament"
              width={200}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
