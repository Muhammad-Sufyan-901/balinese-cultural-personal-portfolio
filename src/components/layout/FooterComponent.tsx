import React from "react";
import { Box } from "@/components/common/Box";
import { navigationLinkList, profileData, socialMediaList } from "@/constants";
import {
  fadeInTransition,
  staggeredContainer,
  textVariantTransition,
  cn,
} from "@/lib";

export default function FooterComponent(): React.JSX.Element {
  const { name, divisions } = profileData;

  const footerCopyrightText: string = `© 2025 Created by ${name}. All right reserved`;

  return (
    <Box
      as="motion.footer"
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
      className={cn(
        "w-screen py-16 text-center bg-primary transition-all duration-300",
        "flex flex-col items-center gap-16"
      )}
    >
      {/* Footer Heading Container */}
      <Box className="flex flex-col gap-4">
        {/* Footer Heading Name */}
        <Box
          as="motion.h3"
          variants={textVariantTransition(1)}
          className="text-white font-semibold text-[2rem] tracking-wide"
        >
          {name}
        </Box>

        {/* Footer Heading Division */}
        <Box
          as="motion.h4"
          variants={textVariantTransition(1.1)}
          className="text-white font-medium text-[1.4rem]"
        >
          {divisions[0]}🧑‍💻
        </Box>
      </Box>

      {/* Footer Link List */}
      <Box
        className={cn(
          "flex flex-wrap",
          "flex-col lg:flex-row",
          "gap-8 lg:gap-8"
        )}
      >
        {navigationLinkList.map(
          ({ title, href }, index): React.ReactNode => (
            <Box
              key={`#${title}-${index}`}
              as="a"
              href={`#${href}`}
              className={cn(
                "text-white font-normal text-base",
                "hover:text-secondary hover:no-underline",
                "transition-colors duration-200"
              )}
            >
              <Box
                as="motion.div"
                variants={fadeInTransition("up", "tween", index * 0.1, 1.2)}
              >
                {title}
              </Box>
            </Box>
          )
        )}
      </Box>

      {/* Footer Social Media Link List */}
      <Box className="flex items-center gap-6">
        {socialMediaList.map(
          ({ SocialMediaIcon, link }, index): React.ReactNode => (
            <Box
              key={`#${link}-${index}`}
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Media Button"
            >
              <Box
                as="motion.div"
                variants={fadeInTransition("up", "tween", index * 0.1, 1.2)}
                className={cn(
                  "shadow-sm text-primary bg-white p-3 rounded-xl",
                  "border-2 border-transparent transition-all duration-300",
                  "hover:text-white hover:border-white hover:bg-transparent",
                  "flex items-center justify-center"
                )}
              >
                <SocialMediaIcon />
              </Box>
            </Box>
          )
        )}
      </Box>

      {/* Footer Copyright Text */}
      <Box
        as="motion.span"
        variants={textVariantTransition(1.3)}
        className="text-white text-xs font-normal"
      >
        {footerCopyrightText}
      </Box>
    </Box>
  );
}
