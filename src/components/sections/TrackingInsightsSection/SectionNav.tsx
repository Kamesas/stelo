import { Flex, Text } from "@chakra-ui/react";

type tSectionNavProps = {
  label: string;
};

export function SectionNav({ label }: tSectionNavProps) {
  return (
    <Flex
      bg="rgba(0, 0, 0, 0.2)"
      backdropFilter="blur(3.55px)"
      borderRadius="100px"
      alignItems="center"
      px="32px"
      py="16px"
    >
      <Text textStyle="s.utility.nav" color="s.white">
        {label}
      </Text>
    </Flex>
  );
}
