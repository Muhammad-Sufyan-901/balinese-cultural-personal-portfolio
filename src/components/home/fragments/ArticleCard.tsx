import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Box } from "@/components/common/Box";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Image } from "@/components/common/Image";
import { Text } from "@/components/common/Text";
import { Link } from "@/components/common/Link";
import { Heading } from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import type { Article as ArticleCardProps } from "@/types";

export default function ArticleCard({
  title,
  slug,
  prologue,
  thumbnailImage,
  categories,
  uploadedAt,
  author: { name, avatar },
}: ArticleCardProps): React.JSX.Element {
  const formattedUploadedAt: string = uploadedAt.toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="bg-card transition-all duration-300 shadow-lg hover:shadow-2xl rounded-sm py-0 border-t-3 border-transparent border-t-primary group">
      <CardContent className="flex flex-col gap-5 p-6">
        <Box className="overflow-hidden rounded-md">
          <Image
            src={thumbnailImage}
            alt="Article Thumbnail Image"
            height={225}
            className="object-fill object-center w-full h-full transition-all duration-300 rounded-sm border-2 border-secondary group-hover:scale-110"
          />
        </Box>

        <Box className="flex justify-between items-center">
          <Box className="flex flex-wrap items-center gap-1">
            {categories.map(
              ({ name, color }, index): React.ReactNode => (
                <Text
                  key={`${name} - ${index}`}
                  className={cn("text-xs font-semibold", color)}
                >
                  #{name}
                </Text>
              )
            )}
          </Box>

          <Text className="text-muted-foreground text-xs inline-flex items-center gap-1">
            <BiTime /> {formattedUploadedAt}
          </Text>
        </Box>

        <Link href={`/artikel/${slug}`}>
          <Heading
            level={4}
            className="font-bold line-clamp-2 transition-all duration-300 hover:text-primary"
          >
            {title}
          </Heading>
        </Link>

        <Text
          variant="small"
          className="text-foreground text-justify line-clamp-2"
        >
          {prologue}
        </Text>
      </CardContent>

      <CardFooter className="items-center justify-between p-6 pt-0">
        <Box className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-contain"
          />

          <Box>
            <Text className="font-semibold">{name}</Text>
            <Text className="text-xs text-muted-foreground">Author</Text>
          </Box>
        </Box>

        <Button
          asChild
          variant="default"
          className="text-xs"
        >
          <Link href={`/artikel/${slug}`}>
            Selengkapnya
            <BsArrowRight className="ml-2 text-base" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
