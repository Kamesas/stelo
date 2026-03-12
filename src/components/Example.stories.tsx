import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Box, Text } from "@chakra-ui/react";

function TypographySample() {
  return (
    <Box p="8" display="flex" flexDirection="column" gap="6" bg="s.bone">
      <Text textStyle="s.heading.h1" color="s.plum">
        Heading H1
      </Text>
      <Text textStyle="s.heading.h3" color="s.plum">
        Heading H3
      </Text>
      <Text textStyle="s.body.regular" color="s.plum">
        Body regular — The quick brown fox jumps over the lazy dog.
      </Text>
      <Box bg="s.tangerine" p="4" borderRadius="md">
        <Text textStyle="s.accent.label" color="s.plum">
          Accent label on tangerine
        </Text>
      </Box>
    </Box>
  );
}

const meta: Meta<typeof TypographySample> = {
  title: "Theme/Typography",
  component: TypographySample,
};

export default meta;
type Story = StoryObj<typeof TypographySample>;

export const Default: Story = {};
