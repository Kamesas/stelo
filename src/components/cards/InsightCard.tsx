import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type tInsightCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

const gradientBorderCss = {
  position: "relative" as const,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "24px",
    padding: "1px",
    background:
      "radial-gradient(circle at 37% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
};

export function InsightCard({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel = "Learn more",
  onCtaClick,
}: tInsightCardProps) {
  return (
    <Flex
      layerStyle="s.glass"
      direction="column"
      alignItems="center"
      gap="32px"
      p="16px"
      w="410px"
      h="570px"
      css={gradientBorderCss}
    >
      <Box
        w="376px"
        h="282px"
        borderRadius="8px"
        overflow="hidden"
        flexShrink={0}
        position="relative"
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Flex direction="column" justify="space-between" flex="1" w="100%">
        <Flex direction="column" gap="24px">
          <Text textStyle="s.heading.h5" color="white" lineHeight="1.1">
            {title}
          </Text>
          <Text textStyle="s.body.2" color="white" opacity={0.8}>
            {description}
          </Text>
        </Flex>

        <Box
          as="button"
          layerStyle="s.glass.pill"
          px="33px"
          py="17px"
          alignSelf="flex-start"
          cursor="pointer"
          onClick={onCtaClick}
          _hover={{ bg: "rgba(255, 255, 255, 0.15)" }}
        >
          <Text textStyle="s.utility.cta" color="white" textAlign="center">
            {ctaLabel}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
