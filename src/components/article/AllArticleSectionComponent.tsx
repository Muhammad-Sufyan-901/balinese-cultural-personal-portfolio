import React from "react";
import { ArrowRight } from "lucide-react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { AllArticleCard } from "@/components/article/fragments";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/common/Link";
import { articleList } from "@/constants";
import {
  boldWordsToReact,
  fadeInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/lib";

export default function AllArticleSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="artikel"
      className="pt-30 pb-12"
    >
      {/* ========== ALL ARTICLE SECTION TITLE ========== */}
      <SectionTitle title="Semua Artikel" />

      {/* ========== ALL ARTICLE SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl mt-4 lg:mt-8"
      >
        {/* ========== ALL ARTICLE SECTION SUBTITLE & DESCRIPTION ========== */}
        <Box className="flex flex-col gap-2">
          <Heading
            level={4}
            as="motion.h4"
            variants={textVariantTransition(0.4)}
            className="text-primary font-bold mb-1"
          >
            Artikel Tentang Dunia IT
          </Heading>

          <Text
            variant="small"
            as="motion.p"
            variants={textVariantTransition(0.5)}
            className="text-foreground text-base"
          >
            {boldWordsToReact(
              "Kumpulan artikel tentang dunia IT, mulai dari pemrograman, desain, dan banyak lagi.",
              ["dunia IT", "pemrograman", "desain"]
            )}
          </Text>
        </Box>

        {/* ========== ARTICLE SECTION CARDS ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("right", "spring", 0.2)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] lg:w-full mx-auto lg:mx-0 mt-12"
        >
          {articleList.map(
            (article, index): React.ReactNode => (
              <Box
                as="motion.div"
                key={`article-${index}`}
                variants={fadeInTransition("up", "tween", ++index * 0.5, 0.25)}
              >
                <AllArticleCard {...article} />
              </Box>
            )
          )}
        </Box>

        {/* ========== ALL ARTICLE SECTION SEE ALL ARTIKEL BUTTON  ========== */}
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
              href="/"
              className="flex items-center gap-2"
            >
              Kembali ke Beranda
              <ArrowRight />
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
