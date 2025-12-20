import React from "react";
import { BiCalendar } from "react-icons/bi";
import { Box } from "@/components/common/Box";
import { Text } from "@/components/common/Text";
import { cn } from "@/lib";
import type { Achievement, Education } from "@/types";

type EducationListItemProps = Partial<Education> & Partial<Achievement>;

export default function EducationTimelineItem({
  school,
  competence,
  years,
  achievement,
  place,
}: EducationListItemProps): React.JSX.Element {
  return (
    <Box className="flex">
      <Box>
        <Box className="w-3 h-3 rounded-full bg-primary" />

        <Box className="w-1 h-full bg-primary translate-x-1 -translate-y-2" />
      </Box>

      <Box className={cn("flex-1 flex flex-col pl-3 gap-1 pb-6")}>
        <Text className="font-bold text-lg">{school || achievement}</Text>

        <Text className="font-medium text-base">
          {competence || `Diadakan Oleh ${place}`}
        </Text>

        <Text className="text-primary text-sm inline-flex items-center gap-2 mt-1">
          <BiCalendar /> {achievement ? "Diraih Pada" : "Sejak Tahun"} {years}
        </Text>
      </Box>
    </Box>
  );
}
