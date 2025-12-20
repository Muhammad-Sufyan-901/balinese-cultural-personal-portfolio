import React from "react";
import { Box } from "@/components/common/Box";
import { AiOutlineArrowUp } from "react-icons/ai";
import { cn } from "@/lib";
import { useLocation } from "react-router";

export function ScrollToTopButton(): React.JSX.Element {
  const [showButton, setShowButton] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  const isBottomOfSection = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    return element.getBoundingClientRect().bottom < window.innerHeight;
  };

  const scrollToTopOfSection = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect((): VoidFunction => {
    const trackSectionScrolling = (): void => {
      const mainContainer: HTMLElement | null =
        document.getElementById("main-container");
      const isHomePage: boolean = pathname === "/";

      if (mainContainer && isBottomOfSection(mainContainer)) {
        setShowButton(false);
        return;
      }

      if (isHomePage) {
        const homeElement = document.getElementById("beranda");
        if (!homeElement || !isBottomOfSection(homeElement)) {
          setShowButton(false);
          return;
        }
      } else {
        if (window.scrollY < 100) {
          setShowButton(false);
          return;
        }
      }

      setShowButton(true);
    };

    trackSectionScrolling();

    document.addEventListener("scroll", trackSectionScrolling);

    return () => {
      document.removeEventListener("scroll", trackSectionScrolling);
    };
  }, [pathname]);

  return (
    <Box
      as="button"
      className={cn(
        "fixed z-100 p-3 rounded-md cursor-pointer transition-all duration-600 bg-primary",
        "bottom-4 right-4",
        "md:bottom-8 md:right-8",
        "lg:bottom-12 lg:right-12",
        "xl:right-16",
        showButton ? "" : "-bottom-full",
        showButton
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
