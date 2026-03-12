import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Box } from "@chakra-ui/react";
import { InsightCard } from "./InsightCard";
import { InsightSection } from "../sections/InsightSection";

const meta: Meta<typeof InsightCard> = {
  title: "Components/InsightCard",
  component: InsightCard,
  decorators: [
    (Story) => (
      <InsightSection bgSrc="/images/section-sleep-bg.png">
        <Box
          p="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Story />
        </Box>
      </InsightSection>
    ),
  ],
  args: {
    title: "Sleep more soundly",
    description:
      "Stable glucose supports better sleep, and better sleep helps regulate glucose the next day. When sleep is disrupted, glucose can become harder to manage.",
    imageSrc: "/images/insight-card-sleep.png",
    ctaLabel: "Learn more",
  },
};

export default meta;
type Story = StoryObj<typeof InsightCard>;

export const Default: Story = {};
