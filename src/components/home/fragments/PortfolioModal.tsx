import React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Image } from "@/components/common/Image";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Link } from "@/components/common/Link";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import { cn } from "@/lib";
import type { Portfolio } from "@/types";

type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
};

type PortfolioModalProps = Portfolio & ModalProps;

export default function PortfolioModal({
  title,
  imageThumbnail,
  description,
  repositoryURL,
  livePreviewURL,
  techStack,
  isOpen,
  onClose,
}: PortfolioModalProps): React.JSX.Element {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="z-10000 bg-background max-w-[calc(100%-2rem)] sm:max-w-md md:max-w-lg lg:max-w-2xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle>
            <Heading
              as="h2"
              level={3}
              className="text-lg"
            >
              {title}
            </Heading>
          </DialogTitle>

          <Button
            onClick={onClose}
            className="absolute bg-accent/80 hover:bg-accent right-4 top-4 rounded-sm opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4 text-red-500" />
            <Box
              as="span"
              className="sr-only"
            >
              Close
            </Box>
          </Button>
        </DialogHeader>

        <DialogDescription asChild>
          <Box className="flex flex-col gap-5">
            <Box className="rounded-md overflow-hidden border-[3px] border-secondary w-full h-full">
              {!imageLoaded && <Skeleton className="h-80 w-full" />}

              <Image
                src={imageThumbnail}
                alt="Project Preview Thumbnail"
                className={cn(
                  "object-cover object-center w-full h-full ",
                  !imageLoaded ? "hidden" : ""
                )}
                onLoad={() => setImageLoaded(true)}
              />
            </Box>

            <Box className="flex flex-wrap items-center gap-2">
              {techStack.map(
                ({ tech, logo }, index): React.ReactNode => (
                  <Badge
                    key={`${tech} - ${index}`}
                    className="flex items-center gap-2 py-1"
                    variant="secondary"
                  >
                    <Image
                      src={logo}
                      alt="Tech Stack Logo"
                      width={16}
                      height={16}
                    />
                    <Text className="text-sm">{tech}</Text>
                  </Badge>
                )
              )}
            </Box>

            <Heading
              as="h3"
              level={6}
            >
              Deskripsi Proyek :
            </Heading>

            <Text className="text-[0.9em] md:text-base text-justify">
              {description}
            </Text>
          </Box>
        </DialogDescription>

        <DialogFooter className="justify-start gap-3 flex-row">
          {repositoryURL && (
            <Button
              asChild
              variant="outline"
              className="border-2 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Link
                href={repositoryURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="mr-2" />
                Repositori Proyek
              </Link>
            </Button>
          )}

          {livePreviewURL && (
            <Button
              asChild
              variant="outline"
              className="border-2 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Link
                href={livePreviewURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillEyeFill className="mr-2" />
                Pratinjau Proyek
              </Link>
            </Button>
          )}

          <Button
            onClick={onClose}
            variant="destructive"
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Tutup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
