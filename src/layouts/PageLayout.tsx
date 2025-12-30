import React from "react";
import { Box } from "@/components/common/Box";
import { Link } from "@/components/common/Link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Text } from "@/components/common/Text";
import { cn, fadeInTransition, staggeredContainer } from "@/lib";
import { useIntersectionObserver, usePageScrollTracker } from "@/hooks";
import { navigationLinkList, socialMediaList } from "@/constants";

type SectionLayoutProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function PageLayout({
  children,
}: SectionLayoutProps): React.JSX.Element {
  const [activeSection, setActiveSection] = React.useState<string>("beranda");
  const { showElements } = usePageScrollTracker();

  useIntersectionObserver(({ id }: Element): void => {
    setActiveSection(id);
  });

  return (
    <Box
      as="motion.div"
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true }}
      whileInView="show"
      initial="hidden"
      className="relative w-full h-full"
    >
      {/* ========== SOCIAL MEDIA ========== */}
      <Box
        className={cn(
          "fixed top-1/2 translate-y-[-50%] flex-col gap-4 transition-all duration-600 z-100 hidden lg:flex",
          showElements ? "left-4" : "-left-full"
        )}
      >
        {socialMediaList.map(
          ({ SocialMediaIcon, link }, index): React.ReactNode => (
            <Link
              key={`#${link} - ${index}`}
              href={link}
              target="_blank"
              aria-label="Social Media Button"
            >
              <Box
                as="motion.div"
                variants={fadeInTransition("right", "tween", index * 0.1, 0.85)}
                className="
                  shadow-lg 
                  text-primary 
                  bg-background 
                  p-3 
                  rounded-full 
                  border-transparent 
                  transition-all 
                  duration-300 
                  hover:text-white 
                  hover:bg-primary 
                  hover:-translate-y-1
                  dark:hover:text-primary 
                  dark:hover:bg-white
                "
              >
                <SocialMediaIcon />
              </Box>
            </Link>
          )
        )}
      </Box>

      {/* ========== LAYOUT CONTENT ========== */}
      <React.Fragment>{children}</React.Fragment>

      {/* ========== NAVIGATION DOTS ========== */}
      <Box
        className={cn(
          "fixed top-1/2 translate-y-[-50%] flex-col gap-4 transition-all duration-600 hidden lg:flex",
          showElements ? "right-4" : "-right-full"
        )}
      >
        {navigationLinkList.map(
          ({ href, title }, index): React.ReactNode => (
            <TooltipProvider key={`#tooltip-nav-dot-${href}-${index}`}>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link
                    key={`#nav-dot-${href}-${index}`}
                    href={`#${href}`}
                    scroll={false}
                    aria-label="Section Navigation Indicator Button"
                  >
                    <Box
                      as="motion.div"
                      variants={fadeInTransition("left", "tween", 0.2, 0.5)}
                      className={cn(
                        `
                        w-3 
                        h-3 
                        rounded-full 
                        transition-all 
                        duration-300
                        `,
                        activeSection === href ? "bg-primary" : "bg-gray-300"
                      )}
                    />
                  </Link>
                </TooltipTrigger>

                <TooltipContent
                  side="left"
                  className="shadow-lg"
                >
                  <Text
                    variant="small"
                    className="w-full text-foreground text-center"
                  >
                    {title}
                  </Text>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        )}
      </Box>
    </Box>
  );
}
