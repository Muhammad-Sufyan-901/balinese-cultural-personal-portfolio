import React from "react";
import { ArrowRight } from "lucide-react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { PortfolioCard } from "@/components/home/fragments";
import { Link } from "@/components/common/Link";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import {
  boldWordsToReact,
  fadeInTransition,
  staggeredContainer,
  textVariantTransition,
  truncateList,
} from "@/lib";
import { portfolioList } from "@/constants";
import type { Portfolio } from "@/types";

export default function PortfolioSectionComponent(): React.JSX.Element {
  const truncatedPortfolioList: Portfolio[] = truncateList(portfolioList, 6);

  return (
    <Box
      as="section"
      id="portofolio"
      className="pt-16 lg:pt-30 pb-12"
    >
      {/* ========== PORTFOLIO SECTION TITLE ========== */}
      <SectionTitle title="Portofolio Saya" />

      {/* ========== PORTFOLIO SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl mt-4 lg:mt-8"
      >
        {/* ========== PORTFOLIO SECTION SUBTITLE & DESCRIPTION ========== */}
        <Box className="flex flex-col gap-2">
          <Heading
            level={4}
            as="motion.h4"
            variants={textVariantTransition(0.4)}
            className="text-primary font-bold mb-1"
          >
            Kumpulan Portfolio Saya
          </Heading>

          <Text
            variant="small"
            as="motion.p"
            variants={textVariantTransition(0.5)}
            className="text-foreground text-base"
          >
            {boldWordsToReact(
              "Berikut adalah Kumpulan Portofolio yang pernah saya kerjakan.",
              ["Kumpulan Portofolio"]
            )}
          </Text>
        </Box>

        {/* ========== PORTFOLIO SECTION CARDS ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("right", "spring", 0.2)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] lg:w-full mx-auto lg:mx-0 mt-12"
        >
          {truncatedPortfolioList.map(
            (portfolio, index): React.ReactNode => (
              <Box
                as="motion.div"
                key={`portfolio-${index}`}
                variants={fadeInTransition("up", "tween", ++index * 0.3, 0.25)}
              >
                <PortfolioCard
                  index={++index}
                  {...portfolio}
                />
              </Box>
            )
          )}
        </Box>

        {/* ========== PORTFOLIO SECTION SEE ALL PORTFOLIO BUTTON  ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("right", "spring", 0.2)}
          className="flex justify-center mt-16"
        >
          <Button
            size="icon-lg"
            className="w-fit px-6 py-4"
            asChild
          >
            <Link
              href="/portofolio"
              className="flex items-center gap-2"
            >
              Lihat Semua Portofolio
              <ArrowRight />
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
