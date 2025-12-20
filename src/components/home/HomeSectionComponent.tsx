import React from "react";
import { ChevronDown, Download, UserRound } from "lucide-react";
import { Box } from "@/components/common/Box";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/common/Link";
import { Image } from "@/components/common/Image";
import { icons, profileData } from "@/constants";
import {
  boldWordsToReact,
  fadeInTransition,
  slideInTransition,
  staggeredContainer,
} from "@/lib";
import { useMediaQuery } from "@/hooks";
import { SplitText } from "@/components/common/SplitText";

export default function HomeSectionComponent(): React.JSX.Element {
  const { name, descriptions } = profileData;
  const { leftGapura, rightGapura } = icons;

  const isLargerThanXL: boolean = useMediaQuery("(min-width: 1280px)");

  const formattedDecscription: React.ReactNode = boldWordsToReact(
    descriptions.home,
    ["Software Engineer", "Solusi Digital"]
  );

  return (
    <Box
      as="motion.section"
      id="beranda"
      whileInView="show"
      initial="hidden"
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true }}
      className="flex flex-col gap-y-6 items-center justify-center min-h-screen relative"
    >
      {/* ========== HOME TEXT CONTENT ========== */}
      <Box className="max-w-xl px-4 text-center flex flex-col gap-y-8 pt-24">
        <Text
          as="motion.p"
          variant="large"
          variants={fadeInTransition("up", "tween", 0.1, 0.5)}
          className="font-medium text-black dark:text-white"
        >
          Hai Semuanya 👋 Salam Kenal Saya
        </Text>

        <SplitText
          text={name}
          className="text-6xl text-primary font-bold pb-2"
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-120px"
          textAlign="center"
        />

        <Text
          as="motion.p"
          variants={fadeInTransition("up", "tween", 0.1, 0.7)}
          className="text-black dark:text-white font-normal"
        >
          {formattedDecscription}
        </Text>

        {/* ========== HOME ACTIONS BUTTONS ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("up", "tween", 0.1, 0.8)}
          className="flex justify-center items-center gap-x-4"
        >
          <Button
            variant="default"
            size="icon-lg"
            className="w-fit px-7 py-5 rounded-sm"
          >
            Download CV <Download />
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon-lg"
            className="border-primary dark:border-primary text-primary hover:bg-primary hover:text-white w-fit px-7 py-5 rounded-sm"
          >
            <Link href="#tentang-saya">
              Tentang Saya <UserRound />
            </Link>
          </Button>
        </Box>

        {/* ========== SCROLL DOWN BUTTON ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("up", "tween", 0.1, 0.9)}
          className="flex justify-center items-center"
        >
          <Link
            href="#tentang-saya"
            className="mt-3 inline-block"
          >
            <Text
              variant="small"
              className="tracking-widest inline-flex justify-center items-center gap-x-2 text-black dark:text-white"
            >
              Scroll ke Bawah{" "}
              <ChevronDown
                className="animate-bounce"
                size={20}
              />
            </Text>
          </Link>
        </Box>
      </Box>

      {/* ========== HOME ORNAMENT DECORATION ========== */}
      <React.Fragment>
        <Box
          as="motion.div"
          variants={slideInTransition("left", "tween", 0.1, 0.75)}
          className="absolute bottom-0 left-0 hidden lg:block"
        >
          <Image
            src={leftGapura}
            alt="Dekorasi Gapura Kiri"
            width={isLargerThanXL ? 400 : 300}
            className="object-cover w-full "
          />
        </Box>

        <Box
          as="motion.div"
          variants={slideInTransition("right", "tween", 0.1, 0.75)}
          className="absolute bottom-0 right-0 hidden lg:block"
        >
          <Image
            src={rightGapura}
            alt="Dekorasi Gapura Kanan"
            width={isLargerThanXL ? 400 : 300}
            className="object-cover w-full"
          />
        </Box>
      </React.Fragment>
    </Box>
  );
}
