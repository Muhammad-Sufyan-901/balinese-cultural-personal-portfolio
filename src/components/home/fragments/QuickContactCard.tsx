import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Link } from "@/components/common/Link";
import { Image } from "@/components/common/Image";
import type { QuickContact as QuickContactCardProps } from "@/types";

export default function QuickContactCard({
  title,
  contactVia,
  contactLink,
  cardIcon,
}: QuickContactCardProps): React.JSX.Element {
  return (
    <Link
      href={contactLink}
      target="_blank"
      aria-label="Contact Card"
      className="block"
    >
      <Card className="bg-card py-0 border-b-[3px] rounded-sm border-b-primary group transition-all duration-300 shadow-lg hover:shadow-2xl">
        <CardContent className="flex items-center gap-6 p-6">
          <Image
            src={cardIcon}
            alt="Contact Card Icon"
            width={48}
            height={48}
            className="transition-all duration-300 group-hover:-translate-y-3"
          />

          <Box className="flex flex-col gap-2">
            <Heading
              as="h3"
              level={4}
              className="font-bold"
            >
              {title}
            </Heading>

            <Text className="text-muted-foreground text-[0.8em] md:text-[0.9em] max-w-[90%] md:max-w-[70%] lg:max-w-full">
              {contactVia}
            </Text>

            <Text className="text-primary font-semibold text-[0.8em] md:text-[0.9em]">
              Kirim Pesan
            </Text>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
