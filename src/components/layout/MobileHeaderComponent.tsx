import React from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import { Box } from "@/components/common/Box";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Link } from "@/components/common/Link";
import { navigationLinkList } from "@/constants";
import { cn } from "@/lib";

type MobileHeaderComponentProps = {
  activeHref: string;
};

export default function MobileHeaderComponent({
  activeHref,
}: MobileHeaderComponentProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // Listen to global event for opening drawer from header
  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openMobileMenu", handleOpen);
    return () => window.removeEventListener("openMobileMenu", handleOpen);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Box className="xl:hidden">
      <Drawer
        direction="top"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DrawerContent className="h-screen max-h-screen rounded-none z-1000">
          <Box className="h-full flex flex-col bg-background py-4">
            {/* Accessible Title and Description (Hidden) */}
            <VisuallyHidden.Root>
              <DrawerTitle>Mobile Navigation Menu</DrawerTitle>
              <DrawerDescription>
                Navigate through the website sections
              </DrawerDescription>
            </VisuallyHidden.Root>

            {/* Close Button */}
            <DrawerHeader className="p-0 pb-4">
              <DrawerClose asChild>
                <Box
                  as="button"
                  aria-label="Close Mobile Menu"
                  className={cn(
                    "ml-auto mr-4 p-2 rounded-md",
                    "text-red-500 hover:bg-red-50 dark:hover:bg-red-950",
                    "transition-colors duration-200"
                  )}
                >
                  <X className="w-6 h-6" />
                </Box>
              </DrawerClose>
            </DrawerHeader>

            {/* Navigation Links */}
            <Box className="flex-1 flex items-center justify-center">
              <Box
                role="navigation"
                aria-label="Mobile navigation"
                className="flex flex-col items-center justify-center gap-6"
              >
                {navigationLinkList.map(
                  ({ title, href }, index): React.ReactNode => (
                    <Link
                      key={`#${title}-${index}`}
                      href={`/#${href}`}
                      onClick={handleLinkClick}
                      aria-current={href === activeHref ? "page" : undefined}
                      className={cn(
                        "font-medium transition-colors duration-200",
                        "text-base md:text-xl",
                        "hover:text-primary hover:no-underline",
                        href === activeHref ? "text-primary" : "text-foreground"
                      )}
                    >
                      {title}
                    </Link>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
