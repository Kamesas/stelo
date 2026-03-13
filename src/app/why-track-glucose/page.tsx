import { TrackingInsightsSection } from "@/components/sections/TrackingInsightsSection/TrackingInsightsSection";
import { Flex } from "@chakra-ui/react";

export default function WhyTrackGlucosePage() {
  return (
    <Flex
      as="main"
      direction="column"
      alignItems="center"
      w="100%"
      bg="s.bone"
      minH="100vh"
    >
      <TrackingInsightsSection />
    </Flex>
  );
}
