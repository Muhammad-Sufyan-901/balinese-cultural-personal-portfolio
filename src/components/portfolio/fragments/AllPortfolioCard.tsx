import React from "react";
import { FaGithub } from "react-icons/fa";
import { Image } from "@/components/common/Image";
import { Link } from "@/components/common/Link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { BsArrowRightCircleFill, BsFillEyeFill } from "react-icons/bs";
import { AllPortfolioModal } from "@/components/portfolio/fragments";
import { cn, truncateList } from "@/lib";
import type { Portfolio, Technology } from "@/types";

type PortfolioCardProps = Portfolio & {
  index: number;
};

export default function AllPortfolioCard({
  title,
  imageThumbnail,
  description,
  livePreviewURL,
  repositoryURL,
  techStack,
  type,
}: PortfolioCardProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const truncatedTechStackList: Technology[] = truncateList(techStack, 3);

  return (
    <React.Fragment>
      <Card className="bg-card transition-all duration-300 shadow-lg hover:shadow-2xl rounded-sm py-0 border-t-3 border-transparent border-t-primary group h-full flex flex-col">
        <CardContent className="flex flex-col gap-4 px-3 py-4 flex-1">
          <Box className="rounded-md overflow-hidden border-[1.5px] border-gray-400 relative">
            {repositoryURL && (
              <Box className="h-full w-full absolute -top-full z-50 left-0 bg-white/10 backdrop-blur-[1.25rem] transition-all duration-300 group-hover:top-0">
                <Box className="h-full w-full flex items-center justify-center">
                  <Link
                    href={repositoryURL}
                    target="_blank"
                    className="p-3 bg-card rounded-full"
                    aria-label="Github Button"
                  >
                    <FaGithub className="text-2xl" />
                  </Link>
                </Box>
              </Box>
            )}

            {!imageLoaded && <Skeleton className="h-52 w-full" />}

            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbnail"
              height={225}
              className={cn(
                "object-cover object-center w-full h-full transition-all duration-300 rounded-sm border-2 border-secondary",
                !imageLoaded ? "hidden" : "",
                repositoryURL === null ? "group-hover:scale-110" : ""
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </Box>

          <Badge variant="default" className="w-fit">
            {type}
          </Badge>

          <Heading
            level={4}
            className="font-bold transition-all duration-300 hover:text-primary"
          >
            <Link
              href={livePreviewURL ?? "#"}
              target="_blank"
              className="hover:no-underline"
            >
              {title}
            </Link>
          </Heading>

          <Box className="flex flex-wrap items-center gap-3">
            {truncatedTechStackList.map(
              ({ tech, logo }, stackIndex): React.ReactNode => (
                <Badge
                  key={`${tech} - ${stackIndex}`}
                  variant="secondary"
                  className="flex items-center gap-2 py-1 dark:bg-input"
                >
                  <Image
                    src={logo}
                    alt="Tech Stack Logo"
                    width={16}
                    height={16}
                  />
                  <Text className="text-xs">{tech}</Text>
                </Badge>
              )
            )}
          </Box>

          <Text
            variant="small"
            className="line-clamp-3 text-foreground text-justify"
          >
            {description}
          </Text>
        </CardContent>

        <CardFooter className="pb-6 p-3 pt-0">
          <Box className="flex gap-2">
            <Button
              onClick={() => setIsOpen(true)}
              variant="default"
              size="icon-lg"
              aria-label="Details Button"
              className="p-4 px-6 w-fit"
            >
              Detail
              <BsArrowRightCircleFill className="ml-1" />
            </Button>

            <Button
              asChild={livePreviewURL !== ""}
              variant={livePreviewURL === "" ? "default" : "outline"}
              size="icon-lg"
              aria-label="Preview Button"
              className={cn(
                "p-4 w-fit border-primary text-primary transition-all duration-150",
                livePreviewURL === null
                  ? "bg-gray-500 text-white border-transparent cursor-not-allowed hover:bg-gray-600 hover:text-white"
                  : "hover:bg-primary hover:text-white"
              )}
              disabled={livePreviewURL === ""}
            >
              {livePreviewURL === null ? (
                <Box as="span">
                  Pratinjau
                  <BsFillEyeFill className="ml-1" />
                </Box>
              ) : (
                <Link
                  href={livePreviewURL ?? "#"}
                  target="_blank"
                >
                  Pratinjau
                  <BsFillEyeFill className="ml-1 inline" />
                </Link>
              )}
            </Button>
          </Box>
        </CardFooter>
      </Card>

      <AllPortfolioModal
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        title={title}
        imageThumbnail={imageThumbnail}
        description={description}
        livePreviewURL={livePreviewURL}
        repositoryURL={repositoryURL}
        techStack={techStack}
        type={type}
      />
    </React.Fragment>
  );
}
