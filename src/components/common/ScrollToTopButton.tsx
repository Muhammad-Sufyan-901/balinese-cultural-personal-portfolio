import React from "react";
import { Box } from "@/components/common/Box";
import { AiOutlineArrowUp } from "react-icons/ai";
import { cn } from "@/lib";
import { usePageScrollTracker } from "@/hooks";

export function ScrollToTopButton(): React.JSX.Element {
  const { showElements } = usePageScrollTracker();

  const scrollToTopOfSection = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      as="button"
      className={cn(
        "fixed z-100 p-3 rounded-md cursor-pointer transition-all duration-600 bg-primary",
        "bottom-4 right-4",
        "md:bottom-8 md:right-8",
        "lg:bottom-12 lg:right-12",
        "xl:right-16",
        showElements ? "" : "-bottom-full",
        showElements
          ? "md:bottom-8 lg:bottom-12"
          : "md:-bottom-full lg:-bottom-full"
      )}
      aria-label="Scroll To Top Of Section Button"
      onClick={scrollToTopOfSection}
    >
      <AiOutlineArrowUp
        fontSize="1.25rem"
        color="white"
      />
    </Box>
  );
}
