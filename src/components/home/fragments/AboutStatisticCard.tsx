import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { CountUp } from "@/components/common/CountUp";
import type { Statistic as AboutStatisticCardProps } from "@/types";

export default function AboutStatisticCard({
  title,
  number,
}: AboutStatisticCardProps): React.JSX.Element {
  return (
    <Card className="w-full shadow-lg border-[3px] border-transparent bg-card border-b-primary transition-all duration-300 h-full hover:shadow-xl hover:border-primary">
      <CardContent className="pt-6">
        <Box className="flex flex-col text-center gap-3">
          <Heading
            as="h4"
            className="inline-flex justify-center items-center gap-1 text-primary text-[2rem] lg:text-[1.75rem] font-bold"
          >
            <CountUp
              from={0}
              to={number}
              direction="up"
              duration={5}
              className="count-up-text"
            />{" "}
            <Box as="span">+</Box>
          </Heading>
          <Text className="text-base text-foreground">{title}</Text>
        </Box>
      </CardContent>
    </Card>
  );
}
