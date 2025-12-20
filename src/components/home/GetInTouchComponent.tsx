import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Container } from "@/components/common/Container";
import { Box } from "@/components/common/Box";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/common/Heading";
import { Link } from "@/components/common/Link";
import {
  fadeInTransition,
  slideInTransition,
  staggeredContainer,
  textVariantTransition,
} from "@/lib";

export default function GetInTouchComponent(): React.JSX.Element {
  return (
    <Container
      as="motion.div"
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true }}
      whileInView="show"
      initial="hidden"
      maxWidth="xl"
      className="xl:max-w-7xl relative pt-12 px-8 pb-8"
    >
      {/* Get In Touch Box Container */}
      <Box
        as="motion.div"
        variants={slideInTransition("right", "tween", 0, 0.5)}
        className="bg-background shadow-lg rounded-lg w-full border-b-4 border-primary py-12 px-20 transition-all duration-300 hover:shadow-2xl"
      >
        {/* Get In Touch Content Container */}
        <Box className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          {/* Get In Touch Text Content Container */}
          <Box className="uppercase leading-15 text-center md:text-start mb-8 md:mb-0">
            <Heading
              as="motion.h4"
              variants={textVariantTransition(1)}
              className="font-light leading-5 mb-3 text-[1em] lg:text-[1.2em]"
            >
              Ayo Mulai
            </Heading>
            <Heading
              as="motion.h3"
              variants={textVariantTransition(1.1)}
              className="text-[2em] lg:text-[2.3em] mb-3"
            >
              Berkolaborasi Untuk
            </Heading>
            <Heading
              as="motion.h2"
              variants={textVariantTransition(1.2)}
              className="font-bold bg-clip-text opacity-90 bg-linear-to-t from-transparent to-foreground text-transparent text-[3em] lg:text-[4.2em]"
            >
              Proyek IT Anda
            </Heading>
          </Box>

          {/* Get In Touch Button */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 0, 1.3)}
          >
            <Button
              asChild
              variant="default"
              size="icon-lg"
              className="px-10 py-6 border-2 w-fit border-transparent transition-all duration-300 hover:bg-transparent hover:border-primary hover:text-primary"
            >
              <Link href="#kontak">
                Hubungi Saya
                <FaPaperPlane className="ml-2" />
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
