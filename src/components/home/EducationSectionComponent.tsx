import React from "react";
import { Award, GraduationCap } from "lucide-react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EducationTimelineItem } from "@/components/home/fragments";
import { achievementList, educationList } from "@/constants";
import {
  boldWordsToReact,
  fadeInTransition,
  slideInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/lib";

export default function EducationSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="pendidikan"
      className="pt-16 lg:pt-30 pb-12"
    >
      {/* ========== EDUCATION SECTION TITLE ========== */}
      <SectionTitle title="Pendidikan & Prestasi" />

      {/* ========== EDUCATION SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl mt-4 lg:mt-8"
      >
        <Box
          as="motion.div"
          variants={fadeInTransition("up", "spring", 0.2, 0.75)}
        >
          {/* ========== EDUCATION SECTION CARD ========== */}

          <Card className="shadow-lg px-6 py-12 rounded-sm border-4 border-transparent border-b-primary transition-all duration-300 w-full h-full hover:shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle>
                <Heading
                  level={4}
                  as="motion.h4"
                  variants={textVariantTransition(0.4)}
                  className="text-primary font-bold mb-1"
                >
                  Pendidikan & Prestasi Saya
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
                    "Berikut adalah Riwayat Pendidikan dan Prestasi yang pernah saya tempuh.",
                    ["Riwayat Pendidikan", "Prestasi"]
                  )}
                </Text>
              </CardDescription>
            </CardHeader>

            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-4">
              {/* ========== EDUCATION SECTION EDUCATION LIST ========== */}
              <Box>
                <Box
                  as="motion.div"
                  variants={fadeInTransition("down", "spring", 0.4, 1)}
                >
                  <Badge className="text-sm bg-primary text-white rounded-sm py-2 px-5 inline-flex items-center gap-2">
                    Pendidikan <GraduationCap />
                  </Badge>
                </Box>

                <Box
                  as="ul"
                  className="mt-8"
                >
                  {educationList.map(
                    (education, index): React.ReactNode => (
                      <Box
                        as="motion.li"
                        key={`education-${index}`}
                        variants={slideInTransition(
                          "left",
                          "spring",
                          ++index * 0.5,
                          1
                        )}
                      >
                        <EducationTimelineItem {...education} />
                      </Box>
                    )
                  )}
                </Box>
              </Box>

              {/* ========== EDUCATION SECTION ACHIEVEMENT LIST ========== */}
              <Box>
                <Box
                  as="motion.div"
                  variants={fadeInTransition("down", "spring", 0.5, 1)}
                >
                  <Badge className="text-sm bg-primary text-white rounded-sm py-2 px-5 inline-flex items-center gap-2">
                    Prestasi <Award />
                  </Badge>
                </Box>

                <Box
                  as="ul"
                  className="mt-8"
                >
                  {achievementList.map(
                    (achivement, index): React.ReactNode => (
                      <Box
                        as="motion.li"
                        key={`achivement-${index}`}
                        variants={slideInTransition(
                          "right",
                          "spring",
                          ++index * 0.5,
                          1
                        )}
                      >
                        <EducationTimelineItem {...achivement} />
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
