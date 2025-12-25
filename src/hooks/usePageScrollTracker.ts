import React from "react";
import { useLocation } from "react-router";

export function usePageScrollTracker() {
  const [showElements, setShowElements] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  const isBottomOfSection = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    return element.getBoundingClientRect().bottom < window.innerHeight;
  };

  React.useEffect((): VoidFunction => {
    const trackPageScroll = (): void => {
      const mainContainer: HTMLElement | null =
        document.getElementById("main-container");
      const isHomePage: boolean = pathname === "/";

      if (mainContainer && isBottomOfSection(mainContainer)) {
        setShowElements(false);
        return;
      }

      if (isHomePage) {
        const homeElement = document.getElementById("beranda");

        if (!homeElement || !isBottomOfSection(homeElement)) {
          setShowElements(false);
          return;
        }
      } else {
        if (window.scrollY < 100) {
          setShowElements(false);
          return;
        }
      }

      setShowElements(true);
    };

    trackPageScroll();

    document.addEventListener("scroll", trackPageScroll);

    return () => {
      document.removeEventListener("scroll", trackPageScroll);
    };
  }, [pathname]);

  return { showElements };
}
