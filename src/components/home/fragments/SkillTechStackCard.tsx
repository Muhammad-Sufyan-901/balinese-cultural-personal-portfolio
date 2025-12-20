import React from "react";
import { Image } from "@/components/common/Image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Box } from "@/components/common/Box";
import { Text } from "@/components/common/Text";
import { Heading } from "@/components/common/Heading";
import type { Skill as SkillTechStackCardProps } from "@/types";
import { boldWordsToReact } from "@/lib";

export default function SkillCard({
  skillIcon,
  title,
  level,
  description,
}: SkillTechStackCardProps): React.JSX.Element {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Box className="flex flex-col gap-3 items-center group text-center">
            <Box className="p-5 rounded-full bg-card dark:bg-input shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:shadow-xl">
              <Image
                src={skillIcon}
                alt="Skill Icon"
                width={32}
                height={32}
              />
            </Box>

            <Heading
              as="h5"
              className="font-semibold text-[0.9em] md:text-[1em] lg:text-[1em]"
            >
              {title}
            </Heading>

            <Text
              variant="small"
              className="text-muted-foreground text-sm"
            >
              {level}
            </Text>
          </Box>
        </TooltipTrigger>

        <TooltipContent
          side="top"
          className="shadow-lg max-w-xs text-center"
        >
          <Text className="w-full">
            {boldWordsToReact(description, [title])}
          </Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
