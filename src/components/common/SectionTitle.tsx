import React from "react";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { textContainer, textVariantTransition } from "@/lib";
import { Image } from "./Image";
import { icons } from "@/constants";

type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps): React.JSX.Element {
  return (
    <Box
      as="motion.div"
      variants={textContainer(0.5)}
      viewport={{ once: true, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
      className="text-center"
    >
      {/* Title Text Overlay */}
      <Heading
        as="motion.h1"
        variants={textVariantTransition(0.6)}
        className="bg-linear-to-t from-transparent to-foreground bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 lg:mb-8 opacity-30 -z-10"
      >
        {title}
      </Heading>

      {/* Title Text Content */}
      <Heading
        as="motion.h2"
        variants={textVariantTransition(0.7)}
        className="text-[2.5em] lg:text-[3em] font-bold -translate-y-12 lg:-translate-y-16 z-10"
      >
        {title}
      </Heading>

      <Box
        as="motion.div"
        variants={textVariantTransition(0.8)}
        className="flex justify-center items-center -translate-y-10 lg:-translate-y-14"
      >
        <Image
          src={icons.titleOrnament}
          alt="Section Title Ornament"
          width={300}
          className="w-full h-auto"
        />
      </Box>
    </Box>
  );
}
