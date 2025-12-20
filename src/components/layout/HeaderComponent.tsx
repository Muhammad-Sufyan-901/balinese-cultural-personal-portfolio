import React from "react";
import { HiMenu } from "react-icons/hi";
import { useLocation } from "react-router";
import { Box } from "@/components/common/Box";
import { ThemeToggleButton } from "@/components/layout/fragments";
import { Link } from "@/components/common/Link";
import { MobileHeaderComponent } from "@/components/layout";
import { navigationLinkList, profileData } from "@/constants";
import {
  staggeredContainer,
  fadeInTransition,
  openMobileMenu,
  cn,
} from "@/lib";
import {
  useIntersectionObserver,
  useMediaQuery,
  useWindowOnEvent,
} from "@/hooks";

export default function HeaderComponent(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [activeLink, setActiveLink] = React.useState<string>("beranda");
  const [isHomePage, setIsHomePage] = React.useState<boolean>(false);

  const { name } = profileData;

  const location = useLocation();

  const isLargerThanXL: boolean = useMediaQuery("(min-width: 1280px)");

  useWindowOnEvent("scroll", (): void => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useIntersectionObserver(({ id }: Element): void => {
    setActiveLink(id);
  });

  React.useEffect((): VoidFunction => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    }

    return () => {
      setIsHomePage(false);
    };
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Box
        as="motion.header"
        variants={staggeredContainer(0.1, 0.1)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        className={cn(
          "w-screen fixed top-0 left-0 right-0 z-100 transition-all duration-300",
          isScrolled ? "bg-background shadow-lg" : "bg-transparent"
        )}
      >
        {/* Header Container */}
        <Box
          as="motion.div"
          variants={fadeInTransition("down", "tween", 0.1, 0.5)}
          className={cn(
            "w-full mx-auto px-4 transition-all duration-300",
            // Max Width Responsive
            "sm:max-w-160 md:max-w-3xl lg:max-w-300 xl:max-w-328 2xl:max-w-392",
            // Height Responsive
            isScrolled
              ? "h-[calc(3.5rem+1rem)] md:h-20"
              : "h-[calc(4.5rem+1rem)] md:h-24"
          )}
        >
          <Box
            as="nav"
            className="w-full h-full flex items-center justify-between"
          >
            {/* Theme Toggle Button (Small Devices) */}
            <Box className="xl:hidden flex justify-center items-center">
              <ThemeToggleButton />
            </Box>

            {/* Header Logo */}
            <Link
              href="/"
              className={cn(
                "text-primary font-semibold hover:no-underline transition-colors",
                "text-[2.5rem] xl:text-2xl"
              )}
            >
              {isLargerThanXL && name}
            </Link>

            {/* Header Navigation Link List (Laptop Devices Only) */}
            <Box className="hidden xl:flex items-center gap-8 navigation-list">
              {navigationLinkList.map(
                ({ title, href }, index): React.ReactNode => (
                  <Link
                    key={`#${title}-${index}`}
                    href={isHomePage ? `#${href}` : `/#${href}`}
                    className={cn(
                      "font-medium text-base border-b-2 transition-colors hover:text-primary hover:no-underline",
                      activeLink === href
                        ? "text-primary border-primary"
                        : "text-foreground border-transparent"
                    )}
                  >
                    {title}
                  </Link>
                )
              )}
            </Box>

            {/* Theme Toggle Button (Large Devices) */}
            <Box className="hidden xl:flex justify-center items-center">
              <ThemeToggleButton />
            </Box>

            {/* Header Sidebar Links Open / Close Button */}
            <Box className="xl:hidden">
              <Box
                as="button"
                aria-label="Mobile Navigation Bar Toggle Button"
                onClick={openMobileMenu}
                className={cn(
                  "text-white p-4 rounded-md bg-primary",
                  "flex justify-center items-center transition-all duration-300",
                  "hover:bg-primary/90 active:scale-95"
                )}
              >
                <HiMenu />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Mobile Header Navigation (Tablet & Phone Only) */}
      <Box className="xl:hidden">
        <MobileHeaderComponent activeHref={activeLink} />
      </Box>
    </React.Fragment>
  );
}
