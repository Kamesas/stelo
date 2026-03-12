import { Box } from "@chakra-ui/react";

type tInsightSectionProps = {
  bgSrc: string;
  children?: React.ReactNode;
};

export function InsightSection({ bgSrc, children }: tInsightSectionProps) {
  return (
    <Box
      position="relative"
      w="1360px"
      h="989px"
      borderRadius="24px"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        bgImage={`url(${bgSrc})`}
        bgSize="cover"
        backgroundPosition="center"
      />
      <Box position="relative" w="100%" h="100%">
        {children}
      </Box>
    </Box>
  );
}
