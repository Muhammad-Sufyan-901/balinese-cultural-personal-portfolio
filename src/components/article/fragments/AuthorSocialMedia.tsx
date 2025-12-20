import React from "react";
import { Box } from "@/components/common/Box";
import { Link } from "@/components/common/Link";
import type { SocialMedia as AuthorSocialMediaProps } from "@/types";

export default function AuthorSocialMedia({
  SocialMediaIcon,
  link,
}: AuthorSocialMediaProps): React.JSX.Element {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box className="p-2 border border-secondary rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary">
        <SocialMediaIcon size="1rem" />
      </Box>
    </Link>
  );
}
