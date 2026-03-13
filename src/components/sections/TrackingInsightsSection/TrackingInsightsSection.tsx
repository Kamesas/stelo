import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { InsightCard } from "../../cards/InsightCard";
import { insightCards } from "./data";
import { SectionNav } from "./SectionNav";

export function TrackingInsightsSection() {
  return (
    <Box
      position="relative"
      w="1360px"
      h="989px"
      borderRadius="24px"
      overflow="hidden"
      bgImage="url(/images/section-sleep-bg.png)"
      bgSize="cover"
      backgroundPosition="center"
    >
      <Box position="absolute" top="78px" left="31px">
        <SectionNav label="01 / 04" />
      </Box>

      <Flex
        position="absolute"
        top="185px"
        left="475px"
        direction="column"
        gap="24px"
      >
        {insightCards.map((card) => (
          <InsightCard key={card.title} {...card} />
        ))}
      </Flex>

      <Box position="absolute" top="447px" left="133px">
        <Image
          src="/images/sleep-stats.svg"
          alt="120 mg/dl — Waking Glucose"
          width={281}
          height={38}
        />
      </Box>

      <Box position="absolute" top="345px" left="976px">
        <Image
          src="/images/sleep-graph.svg"
          alt="Sleep glucose graph"
          width={280}
          height={242}
        />
      </Box>
    </Box>
  );
}
