import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Box } from "@/components/common/Box";
import { Image } from "@/components/common/Image";
import { Link } from "@/components/common/Link";
import { Text } from "@/components/common/Text";
import type { Article } from "@/types";

type OtherArticleCardProps = Partial<Article> & {
  color?: string;
};

export default function OtherArticleCard({
  title,
  thumbnailImage,
  uploadedAt,
  slug,
  color,
}: OtherArticleCardProps): React.JSX.Element {
  const formattedUploadedAt: string = uploadedAt!.toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Box className="flex w-full gap-4">
      <Box className="rounded-md overflow-hidden w-20 h-full border border-primary shrink-0">
        <Image
          src={thumbnailImage as string}
          alt="Blog Thumbnail Image"
          className="aspect-square object-fill w-full h-full"
        />
      </Box>

      <Box className="flex flex-col flex-1 gap-1">
        <Link
          href={`/artikel/${slug}`}
          className="font-bold transition-all duration-300 hover:text-primary"
        >
          {title}
        </Link>

        <Box className="flex items-center gap-2 text-xs">
          <FaCalendarAlt
            color={color}
            className="text-primary"
          />
          <Text
            variant="small"
            className="text-muted-foreground"
          >
            {formattedUploadedAt}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
