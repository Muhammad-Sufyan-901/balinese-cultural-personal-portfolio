import React from "react";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { Image } from "@/components/common/Image";
import { Text } from "@/components/common/Text";
import { Card, CardContent } from "@/components/ui/card";
import { icons } from "@/constants";
import {
  boldWordsToReact,
  cn,
  fadeInTransition,
  textVariantTransition,
} from "@/lib";
import type { Experience } from "@/types";

type ExperienceTimelineItemProps = Experience & {
  index: number;
  maxLength: number;
};

export default function ExperienceTimelineItem({
  title,
  companyName,
  years,
  jobStatus,
  jobDescription,
  techStack,
  appHandled,
  index,
  maxLength,
}: ExperienceTimelineItemProps): React.JSX.Element {
  return (
    <Box className="grid grid-cols-[10%_90%] md:grid-cols-[47.5%_5%_47.5%]">
      {/* ========== EXPERIENCE SECTION TIMELINE CARD ========== */}
      <Box
        className={cn(
          "py-4 px-1 order-2",
          index % 2 === 0 ? "md:order-3" : "md:order 1"
        )}
      >
        <Card
          className={cn(
            "shadow-xl px-2 py-8 rounded-sm border-4 border-transparent transition-all duration-300 w-full h-full hover:shadow-2xl border-r-primary",
            index % 2 === 0
              ? "md:border-r-primary! md:border-l-transparent"
              : "md:border-l-primary! md:border-r-transparent"
          )}
        >
          <CardContent>
            <Heading
              as="motion.h4"
              level={4}
              variants={textVariantTransition(0.5 * index)}
              className="mb-2 font-bold"
            >
              {title}
            </Heading>

            <Heading
              as="motion.h5"
              level={6}
              variants={textVariantTransition(0.6 * index)}
              className="mb-2 text-primary font-bold"
            >
              {companyName}{" "}
              <Box
                as="span"
                className="text-foreground"
              >
                | {jobStatus}
              </Box>
            </Heading>

            <Box className="flex items-center gap-4 my-4">
              {techStack.map((stack, stackIndex) => (
                <Box
                  as="motion.div"
                  key={`stack-${stackIndex}`}
                  variants={fadeInTransition(
                    "up",
                    "tween",
                    ++stackIndex * 0.7,
                    0.25
                  )}
                >
                  <Image
                    src={stack}
                    alt="Tech Stack Icons"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </Box>
              ))}
            </Box>

            <Text
              as="motion.p"
              variant="small"
              variants={textVariantTransition(0.8 * index)}
              className="text-muted-foreground mb-6"
            >
              Sejak {years}
            </Text>

            <Text
              as="motion.p"
              variant="small"
              variants={textVariantTransition(0.9 * index)}
              className="text-foreground text-justify"
            >
              {boldWordsToReact(jobDescription, appHandled || [])}
            </Text>
          </CardContent>
        </Card>
      </Box>

      {/* ========== EXPERIENCE SECTION TIMELINE LINE ========== */}
      <Box className="flex justify-center items-center w-full h-full order-1 md:order-2">
        <Box
          className={cn("w-fit h-full flex justify-center relative", {
            "pt-1": index === 1,
            "pb-1": index === maxLength,
          })}
        >
          <Box className="w-5 h-5 rounded-full bg-primary absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <Box
            className={cn("w-2 h-full bg-primary", {
              "rounded-t-full": index === 1,
              "rounded-b-full": index === maxLength,
            })}
          />
        </Box>
      </Box>

      {/* ========== EXPERIENCE SECTION TIMELINE ORNAMENT ========== */}
      <Box
        as="motion.div"
        variants={fadeInTransition("down", "spring", 0.5 * index, 1)}
        className={cn(
          "items-center justify-center hidden md:flex",
          index % 2 === 0 ? "order-1" : "order-3"
        )}
      >
        <Image
          src={icons.sectionOrnament}
          alt="Experience Section Ornament"
          width={150}
          height={300}
          className="object-contain "
        />
      </Box>
    </Box>
  );
}
