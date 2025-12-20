import React from "react";
import { ArrowRight } from "lucide-react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { Image } from "@/components/common/Image";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/common/Link";
import { RotatingText } from "@/components/common/RotatingText";
import { AboutStatisticCard } from "@/components/home/fragments";
import {
  boldWordsToReact,
  fadeInTransition,
  slideInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/lib";
import { icons, profileData } from "@/constants";

export default function AboutSectionComponent(): React.JSX.Element {
  const { name, region, major, divisions, descriptions, pictures, statistics } =
    profileData;

  const formattedDecscription: React.ReactNode = boldWordsToReact(
    descriptions.about,
    [name, major, divisions[0]]
  );

  return (
    <Box
      as="section"
      id="tentang-saya"
      className="pt-16 lg:pt-30 pb-12"
    >
      {/* ========== ABOUT SECTION TITLE ========== */}
      <SectionTitle title="Tentang Saya" />

      {/* ========== ABOUT SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl grid gap-16 lg:gap-[10%] grid-cols-1 lg:grid-cols-[35%_55%] mt-4 lg:mt-8"
      >
        {/* ========== ABOUT SECTION IMAGE PROFILE ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("right", "tween", 0.1, 1.1)}
          className="relative h-full w-[80%] lg:w-full mx-auto lg:mx-0"
        >
          {/* ========== ABOUT SECTION PROFILE IMAGE ========== */}
          <Image
            src={pictures.about.src}
            alt={pictures.about.alt}
            priority="eager"
            className="w-full h-full object-cover"
          />

          {/* ========== ABOUT SECTION IMAGE ORNAMENT DECORATION ========== */}
          <React.Fragment>
            <Box
              as="motion.div"
              variants={slideInTransition("right", "tween", 0.1, 1.2)}
              className="absolute -top-8 -right-8 -z-10"
            >
              <Image
                src={icons.topBorder}
                alt="Profile Image Top Border Decoration"
                width={150}
                height={150}
              />
            </Box>

            <Box
              as="motion.div"
              variants={slideInTransition("left", "tween", 0.1, 1.4)}
              className="absolute -bottom-8 -left-8 -z-10"
            >
              <Image
                src={icons.bottomBorder}
                alt="Profile Image Bottom Border Decoration"
                width={150}
                height={150}
              />
            </Box>
          </React.Fragment>
        </Box>

        {/* ========== ABOUT SECTION PROFILE DESCRIPTION ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("left", "tween", 0.1, 1.2)}
          className="flex flex-col gap-y-2 lg:gap-y-2 justify-center"
        >
          {/* ========== ABOUT SECTION PROFILE DESCRIPTION GREETING ========== */}
          <Heading
            as="motion.h2"
            level={2}
            variants={textVariantTransition(1.2)}
            className="font-bold"
          >
            Halo 👋 Saya{" "}
            <Box
              as="span"
              className="text-primary"
            >
              {name}
            </Box>
          </Heading>

          {/* ========== ABOUT SECTION PROFILE DESCRIPTION INTRODUCTION ========== */}
          <Heading
            as="motion.h3"
            level={3}
            variants={textVariantTransition(1.3)}
            className="font-semibold flex items-center flex-wrap"
          >
            Seorang{" "}
            <Box
              as="span"
              className="inline-block"
            >
              <RotatingText
                texts={divisions}
                mainClassName="px-2 text-primary inline-flex overflow-hidden items-baseline"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                elementLevelClassName="inline-block align-baseline"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
              🧑‍💻
            </Box>{" "}
            yang berbasis di{" "}
            <Box
              as="span"
              className="text-primary pl-2 xl:pl-0"
            >
              {region}
            </Box>{" "}
            🇮🇩
          </Heading>

          {/* ========== ABOUT SECTION PROFILE DESCRIPTION DESCRIPTION ========== */}
          <Text
            as="motion.p"
            variant="large"
            variants={textVariantTransition(1.4)}
            className="text-justify mt-2 lg:mt-5"
          >
            {formattedDecscription}
          </Text>

          {/* ========== ABOUT SECTION PROFILE DESCRIPTION DIVIDER ========== */}
          <Box
            as="motion.hr"
            variants={fadeInTransition("up", "tween", 1.5, 0.5)}
            className="mt-2 bg-primary h-1 w-full rounded-full"
          />

          {/* ========== ABOUT SECTION PROFILE DESCRIPTION STATISTICS ========== */}
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {statistics.map(
              (statistic, index): React.ReactNode => (
                <Box
                  as="motion.div"
                  key={`statistic-${index}`}
                  className="h-full"
                  variants={fadeInTransition(
                    "down",
                    "spring",
                    ++index * 0.75,
                    0.75
                  )}
                >
                  <AboutStatisticCard {...statistic} />
                </Box>
              )
            )}
          </Box>

          {/* ========== ABOUT SECTION PROFILE DESCRIPTION DIVIDER ========== */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 1.6, 0.5)}
          >
            <Button
              variant="default"
              className="w-fit px-10 py-6 mt-10"
              size="icon-lg"
              asChild
            >
              <Link href="#kontak">
                Hubungi Saya <ArrowRight />
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
