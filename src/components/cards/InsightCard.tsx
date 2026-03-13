import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type InsightCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export function InsightCard({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel = "Learn more",
  onCtaClick,
}: InsightCardProps) {
  return (
    <Flex
      w="410px"
      h="570px"
      p="16px"
      gap="32px"
      borderRadius="24px"
      border="1px solid red"
      bg="rgba(0, 0, 0, 0.2)"
      backdropFilter="blur(100px)"
      direction="column"
    >
      <Box
        w="376px"
        h="282px"
        flexShrink={0}
        borderRadius="8px"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Flex direction="column" gap="24px">
        <Text textStyle="s.heading.h5" color="white">
          {title}
        </Text>
        <Text lineClamp={3} textStyle="s.body.2" color="white" opacity={0.8}>
          {description}
        </Text>
      </Flex>

      <Box
        as="button"
        bg="rgba(0, 0, 0, 0.2)"
        borderRadius="59px"
        px="33px"
        py="17px"
        mt="auto"
        alignSelf="self-start"
        cursor="pointer"
        textStyle="s.utility.cta"
        color="white"
        textAlign="center"
        onClick={onCtaClick}
        _hover={{ bg: "rgba(255, 255, 255, 0.15)" }}
      >
        {ctaLabel}
      </Box>
    </Flex>
  );
}
